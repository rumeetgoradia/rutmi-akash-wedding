import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { Guest, Party, guests, parties } from "@/server/db/schema";
import { eq, sql } from "drizzle-orm";

import { env } from "@/env.mjs";
import { SignInInputSchema } from "@/server/api/routers/auth.schema";

export const authRouter = createTRPCRouter({
  signIn: publicProcedure
    .input(SignInInputSchema)
    .mutation(
      async ({
        ctx: { db },
        input: { firstName, lastName, id, password },
      }): Promise<
        | { error: SignInError; foundGuests?: never }
        | { error?: never; foundGuests: { guest: Guest; party: Party }[] }
      > => {
        if (password.trim() !== env.SITE_PASSWORD) {
          return { error: { code: "WRONG_PASSWORD" } };
        }

        let condition;
        if (id) {
          condition = eq(guests.id, id);
        } else {
          condition = sql`lower(${
            guests.firstName
          }) = lower(${firstName.trim()}) AND lower(${
            guests.lastName
          }) = lower(${lastName.trim()})`;
        }

        try {
          const foundGuests = await db
            .select()
            .from(guests)
            .innerJoin(parties, eq(guests.partyId, parties.id))
            .where(condition);
          return { foundGuests };
        } catch (e) {
          return {
            error: {
              code: "INTERNAL_SERVER_ERROR",
              cause:
                e instanceof Error
                  ? e.message
                  : "Something went wrong on the server.",
            },
          };
        }
      },
    ),
});

export type SignInError = {
  code: "WRONG_PASSWORD" | "INTERNAL_SERVER_ERROR";
  cause?: string;
};
