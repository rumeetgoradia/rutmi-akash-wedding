import { EVENT_IDS, EventId } from "@/app/schedule/content";
import { RsvpInputSchema } from "@/server/api/routers/events.schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { allowedEventsForParties, guests, rsvps } from "@/server/db/schema";
import { and, eq, sql } from "drizzle-orm";
import { z } from "zod";

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
  rsvp: publicProcedure
    .input(RsvpInputSchema)
    .mutation(async ({ ctx: { db }, input: { rsvpInput: input } }) => {
      const guests = await db
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
      return guests;
    }),
});
