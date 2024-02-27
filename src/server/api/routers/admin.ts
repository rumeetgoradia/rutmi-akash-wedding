import MassEmail, { MassEmailProps } from "@/emails/mass";
import { MassEmailSchema } from "@/server/api/routers/admin.schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { parties } from "@/server/db/schema";
import {
  EMAIL_ADDRESS,
  FRIENDLY_EMAIL_ADDRESS,
} from "@/server/email/constants";
import { z } from "zod";
import { split } from "postcss/lib/list";

export const adminRouter = createTRPCRouter({
  massEmail: publicProcedure
    .input(
      MassEmailSchema.transform(({ body, ...val }, ctx) => {
        const splitBody = body
          .split("\n")
          .map((b) => (b ? b.trim() : ""))
          .filter((b) => b.length > 0);
        if (splitBody.length === 0) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please enter the body of your mass email.",
          });
        }

        return { ...val, body: splitBody };
      }),
    )
    .mutation(
      async ({
        ctx: { emailClient, db },
        input: { body, title, preview, subject, test, testEmail },
      }) => {
        let bcc;
        if (test && testEmail) {
          bcc = testEmail;
        } else {
          const wrappedEmails = await db
            .select({ email: parties.email })
            .from(parties);
          bcc = [];
          wrappedEmails.forEach((e) => e.email !== null && bcc.push(e.email));
        }

        const emailResult = await emailClient.emails.send({
          from: FRIENDLY_EMAIL_ADDRESS,
          to: EMAIL_ADDRESS,
          bcc,
          subject,
          react: MassEmail({ body, title, preview }),
        });

        return emailResult;
      },
    ),
});
