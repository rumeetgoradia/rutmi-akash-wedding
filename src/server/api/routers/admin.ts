import MassEmail, { MassEmailProps } from "@/emails/mass";
import { MassEmailSchema } from "@/server/api/routers/admin.schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { parties } from "@/server/db/schema";
import {
  EMAIL_ADDRESS,
  FRIENDLY_EMAIL_ADDRESS,
  TO_EMAIL_ADDRESS,
} from "@/server/email/constants";
import { z } from "zod";
import { split } from "postcss/lib/list";

export const adminRouter = createTRPCRouter({
  massEmail: publicProcedure
    .input(
      MassEmailSchema,
      // .transform(({ body, ...val }, ctx) => {
      //   const splitBody = body
      //     .split("\n")
      //     .map((b) => (b ? b.trim() : ""))
      //     .filter((b) => b.length > 0);
      //   if (splitBody.length === 0) {
      //     ctx.addIssue({
      //       code: z.ZodIssueCode.custom,
      //       message: "Please enter the body of your mass email.",
      //     });
      //   }

      //   return { ...val, body: splitBody };
      // }),
    )
    .mutation(
      async ({
        ctx: { emailClient, db },
        input: { body, title, preview, subject, test, testEmail },
      }) => {
        let recipients: string[] = [];
        if (test && testEmail) {
          recipients.push(testEmail);
        } else {
          const wrappedEmails = await db
            .select({ email: parties.email })
            .from(parties);
          recipients = [];
          wrappedEmails.forEach(
            (e) => e.email !== null && recipients.push(e.email),
          );
        }

        const chunks = chunkRecipients(recipients);
        const builtEmails = [];
        for (const chunk of chunks) {
          builtEmails.push({
            from: FRIENDLY_EMAIL_ADDRESS,
            to: test ? chunk : TO_EMAIL_ADDRESS,
            bcc: test ? [] : chunk,
            subject,
            react: MassEmail({ body, title, preview }),
          });
        }

        const emailResults = await emailClient.batch.send(builtEmails);
        return emailResults;
      },
    ),
});

const chunkRecipients = (recipients: string[]) => {
  const chunkSize = 50;
  const chunks: string[][] = [];
  for (let i = 0; i < recipients.length; i += chunkSize) {
    const chunk = recipients.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
};
