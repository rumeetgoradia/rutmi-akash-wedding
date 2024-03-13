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

const alreadySent = [
  "antonioasanchez691@gmail.com",
  "jschwarzbaum@gmail.com",
  "savanshah.0@gmail.com",
  "esheils@sbhny.org",
  "kjsousou@gmail.com",
  "dspencer@sbhny.org",
  "ptai@sbhny.org",
  "jaeet319@gmail.com",
  "hterala26@gmail.com",
  "tjtherattil@gmail.com",
  "ashley.voroba@gmail.com",
  "amb.wajid@gmail.com",
  "hwermuth@sbhny.org",
  "cvwynter@gmail.com",
  "aambrosio@sbhny.org",
  "animaanwar@gmail.com",
  "disha.aya@gmail.com",
  "kanikagupta82294@gmail.com",
  "jer.b.robison@gmail.com",
  "monarahimi23@gmail.com",
  "rumeet.goradia@gmail.com",
  "rumeet.goradia@gmail.com",
];

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

        const builtEmails = recipients
          .filter((r) => !alreadySent.includes(r.toLowerCase()))
          .map((r) => ({
            from: FRIENDLY_EMAIL_ADDRESS,
            to: r,
            cc: FRIENDLY_EMAIL_ADDRESS,
            subject,
            react: MassEmail({ body, title, preview }),
          }));

        const chunks = chunk(builtEmails, 100);

        let result: {
          data?: unknown;
          error?: { name: string; message: string };
        } = {};

        for (const chunk of chunks) {
          let emailResult = await emailClient.batch.send(chunk);
          if (emailResult.error) {
            result = { error: emailResult.error };
            break;
          } else if (!result) {
            result = { data: emailResult.data };
          }
        }

        return result;
      },
    ),
});

const chunk = <T>(objects: T[], chunkSize: number) => {
  const chunks: T[][] = [];
  for (let i = 0; i < objects.length; i += chunkSize) {
    const chunk = objects.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
};
