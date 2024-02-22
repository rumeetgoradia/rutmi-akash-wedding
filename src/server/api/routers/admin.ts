import BaseEmail, { BaseEmailProps } from "@/emails/base";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { parties } from "@/server/db/schema";
import { EMAIL_ADDRESS } from "@/server/email/constants";
import { z } from "zod";

export const adminRouter = createTRPCRouter({
  massEmail: publicProcedure
    .input(z.custom<BaseEmailProps & { subject: string }>())
    .mutation(
      async ({
        ctx: { emailClient, db },
        input: { body, heading, preview, subject },
      }) => {
        const wrappedEmails = await db
          .select({ email: parties.email })
          .from(parties);

        let emails: string[] = [];
        wrappedEmails.forEach((e) => e.email !== null && emails.push(e.email));

        await emailClient.emails.send({
          from: `Rutmi & Akash <${EMAIL_ADDRESS}>`,
          to: [],
          bcc: emails,
          subject,
          react: BaseEmail({ body, heading, preview }),
        });
      },
    ),
});
