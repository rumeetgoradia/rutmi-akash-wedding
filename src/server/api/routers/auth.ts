import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { Guest, guests, parties } from "@/server/db/schema";
import { sql } from "drizzle-orm";

const trimString = (u: unknown) => (typeof u === "string" ? u.trim() : u);

export const authRouter = createTRPCRouter({
  signIn: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email().optional(),
        password: z.string(),
      }),
    )
    .mutation(
      async ({
        ctx: { db },
        input: { firstName, lastName, email, password },
      }) => {
        // TODO check password

        try {
          const { rows: foundGuests } = await db.execute(
            email
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
              : sql`
          select * from ${guests} 
          where 
            lower(${guests.firstName}) = lower(${firstName.trim()})
          and 
            lower(${guests.lastName}) = lower(${lastName.trim()})
          `,
          );

          console.log("finished query");
          console.log(foundGuests);

          if (foundGuests.length === 1) {
            const user = foundGuests[0] as Guest;
            console.log("returning user");
            return user;
          } else if (foundGuests.length > 1) {
            // Ask for email
            return null;
          } else {
            return null;
          }
        } catch (e) {
          // TODO handle error
          console.log("here is auth error!", e);
          // Return bad errro
          return null;
        }
      },
    ),
});
