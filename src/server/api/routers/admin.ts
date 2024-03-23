import { Event, EventId } from "@/app/schedule/content";
import MassEmail, { MassEmailProps } from "@/emails/mass";
import { MassEmailSchema } from "@/server/api/routers/admin.schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {
  Guest,
  allowedEventsForParties,
  guests,
  parties,
  rsvps,
} from "@/server/db/schema";
import {
  EMAIL_ADDRESS,
  FRIENDLY_EMAIL_ADDRESS,
  TO_EMAIL_ADDRESS,
} from "@/server/email/constants";
import { eq } from "drizzle-orm";

export const adminRouter = createTRPCRouter({
  massEmail: publicProcedure
    .input(MassEmailSchema)
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

        const builtEmails = recipients.map((r) => ({
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
