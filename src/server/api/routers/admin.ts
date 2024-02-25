import BaseEmail, { BaseEmailProps } from "@/emails/base";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { parties } from "@/server/db/schema";
import {
  EMAIL_ADDRESS,
  FRIENDLY_EMAIL_ADDRESS,
} from "@/server/email/constants";
import { z } from "zod";

export const adminRouter = createTRPCRouter({
  massEmail: publicProcedure
    .input(z.custom<BaseEmailProps & { subject: string }>())
    .mutation(
      async ({
        ctx: { emailClient, db },
        input: { body, heading, preview, subject },
      }) => {
        // const wrappedEmails = await db
        //   .select({ email: parties.email })
        //   .from(parties);

        // let emails: string[] = [];
        // wrappedEmails.forEach((e) => e.email !== null && emails.push(e.email));

        console.log("input", { body, heading, preview, subject });

        const emailResult = await emailClient.emails.send({
          from: FRIENDLY_EMAIL_ADDRESS,
          to: FRIENDLY_EMAIL_ADDRESS,
          bcc: "rumeet.goradia@gmail.com", // TODO emails
          subject,
          react: BaseEmail({ body, heading, preview }),
        });

        console.log("emailres", emailResult);
        return emailResult;
      },
    ),
});
