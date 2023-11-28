import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { Guest, guests, parties } from "@/server/db/schema";
import { sql } from "drizzle-orm";

import { env } from "@/env.mjs";
import { SignInInputSchema } from "@/server/api/routers/auth.schema";

export const authRouter = createTRPCRouter({
  signIn: publicProcedure
    .input(SignInInputSchema)
    .mutation(
      async ({
        ctx: { db },
        input: { firstName, lastName, email, password, phone, specifierType },
      }): Promise<
        { error: SignInError; guest?: never } | { error?: never; guest: Guest }
      > => {
        if (password.trim() !== env.SITE_PASSWORD) {
          return { error: { code: "WRONG_PASSWORD" } };
        }

        try {
          const { rows: foundGuests } = await db.execute(
            specifierType === "email" && email
              ? sql`
          select * from ${guests} join ${parties} on ${guests.partyId} = ${
            parties.id
          } 
          where 
            lower(${guests.firstName}) = lower(${firstName.trim()})
          and 
            lower(${guests.lastName}) = lower(${lastName.trim()})
          and 
            lower(${parties.email} = lower(${email.trim()}))`
              : specifierType === "phone" && phone
                ? sql`
          select * from ${guests} join ${parties} on ${guests.partyId} = ${
            parties.id
          } 
          where 
            lower(${guests.firstName}) = lower(${firstName.trim()})
          and 
            lower(${guests.lastName}) = lower(${lastName.trim()})
          and 
            ${parties.phone} = ${phone.replace(/[^0-9]/g, '')}`
                : sql`
          select * from ${guests} 
          where 
            lower(${guests.firstName}) = lower(${firstName.trim()})
          and 
            lower(${guests.lastName}) = lower(${lastName.trim()})
          `,
          );

          if (foundGuests.length === 1) {
            const sqlGuest = foundGuests[0] as {"first_name": string, "last_name": string, id: number, "party_id": string, suffix: string | null, title: string | null}
            return { guest: {
              firstName: sqlGuest['first_name'],
              lastName: sqlGuest['last_name'],
              isAdmin: null,
              id: sqlGuest['id'],
              partyId: sqlGuest['party_id'],
              suffix: sqlGuest['suffix'],
              title: sqlGuest['title']
            } };
          } else if (foundGuests.length > 1) {
            return { error: { code: "TOO_MANY_USERS_FOUND" } };
          } else {
            return { error: { code: "NO_USER_FOUND" } };
          }
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
  code:
    | "WRONG_PASSWORD"
    | "NO_USER_FOUND"
    | "TOO_MANY_USERS_FOUND"
    | "INTERNAL_SERVER_ERROR";
  cause?: string;
};
