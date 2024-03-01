import { EVENTS, EventId } from "@/app/schedule/content";
import {
  EmailResult,
  RsvpInputSchema,
} from "@/server/api/routers/events.schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {
  allowedEventsForParties,
  guestRelations,
  guests,
  parties,
  rsvps,
} from "@/server/db/schema";
import { and, eq, isNotNull, sql } from "drizzle-orm";
import { z } from "zod";
import MassEmail from "@/emails/mass";
import {
  EMAIL_ADDRESS,
  FRIENDLY_EMAIL_ADDRESS,
} from "@/server/email/constants";
import RsvpEmail, { EmailRsvps } from "@/emails/rsvp";

export const eventsRouter = createTRPCRouter({
  eventsAndRsvps: publicProcedure
    .input(z.object({ partyId: z.string().optional() }))
    .query(async ({ ctx: { db }, input: { partyId } }) => {
      if (!partyId) {
        return null;
      }

      const dbResults = await db
        .select()
        .from(allowedEventsForParties)
        .innerJoin(guests, eq(allowedEventsForParties.partyId, guests.partyId))
        .leftJoin(
          rsvps,
          and(
            eq(rsvps.guestId, guests.id),
            eq(rsvps.event, allowedEventsForParties.event),
          ),
        )
        .where(eq(allowedEventsForParties.partyId, partyId));

      const groupedByEvents: { [k in EventId]?: typeof dbResults } = {};

      dbResults.forEach((dbResult) => {
        let eventList = groupedByEvents[dbResult.events_parties.event];
        if (!eventList) {
          eventList = [];
          groupedByEvents[dbResult.events_parties.event] = eventList;
        }

        eventList.push(dbResult);
      });

      return groupedByEvents;
    }),
  rsvp: publicProcedure.input(RsvpInputSchema).mutation(
    async ({
      ctx: { db, emailClient },
      input: { rsvpInput: input, email, partyId },
    }): Promise<{
      upserted: {
        guestId: number;
        event: EventId;
        attending: boolean;
      }[];
      emailResult?: EmailResult;
    }> => {
      const upserted = await db
        .insert(rsvps)
        .values(input)
        .onConflictDoUpdate({
          target: [rsvps.guestId, rsvps.event],
          set: {
            guestId: sql`excluded.guest_id`,
            event: sql`excluded.event`,
            attending: sql`excluded.attending`,
          },
        })
        .returning({
          guestId: rsvps.guestId,
          attending: rsvps.attending,
          event: rsvps.event,
        });

      if (!email) {
        return { upserted };
      }

      try {
        const partyEmails = await db
          .select({ partyEmail: parties.email, guest: { ...guests } })
          .from(parties)
          .innerJoin(guests, eq(parties.id, guests.partyId))
          .where(eq(parties.id, partyId));

        const nonNullPartyEmails = partyEmails.filter(
          (pe) => pe.partyEmail !== null,
        );
        if (nonNullPartyEmails.length === 0) {
          return { upserted, emailResult: { error: "NO_EMAIL" } };
        }

        const event = EVENTS.filter((event) => event.id === input[0].event)[0];

        const emailRsvps: EmailRsvps = [];
        nonNullPartyEmails.forEach((pe) => {
          const attendingWrapped = upserted.filter(
            (u) => u.guestId === pe.guest.id,
          );
          if (attendingWrapped.length === 0) return;
          const rsvp = {
            guest: pe.guest,
            attending: attendingWrapped[0].attending,
          };
          emailRsvps.push(rsvp);
        });

        const emails = Array.from(
          new Set(nonNullPartyEmails.map((pe) => pe.partyEmail!)),
        );

        let emailClientResult = await emailClient.emails.send({
          from: FRIENDLY_EMAIL_ADDRESS,
          to: emails,
          subject: `Your RSVP Details - ${event.title}`,
          react: RsvpEmail({ event, rsvps: emailRsvps }),
        });

        if (emailClientResult.error) {
          return { upserted, emailResult: { error: "EMAIL_CLIENT_ERROR" } };
        } else {
          return { upserted, emailResult: { emails } };
        }
      } catch (e: any) {
        return { upserted, emailResult: { error: "SERVER_ERROR" } };
      }
    },
  ),
});
