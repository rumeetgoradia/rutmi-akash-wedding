import { EventId } from "@/app/schedule/content";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { allowedEventsForParties } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const eventsRouter = createTRPCRouter({
  allowedEvents: publicProcedure
    .input(z.object({ partyId: z.string().optional() }))
    .query(async ({ ctx: { db }, input: { partyId } }) => {
      if (!partyId) {
        return null;
      }

      const dbResults = await db
        .select({ field1: allowedEventsForParties.event })
        .from(allowedEventsForParties)
        .where(eq(allowedEventsForParties.partyId, partyId));

      const allowedEvents: EventId[] = [];
      dbResults.forEach(({ field1 }) => allowedEvents.push(field1));

      return allowedEvents;
    }),
});
