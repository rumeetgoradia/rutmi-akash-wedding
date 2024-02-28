import { emailClient } from "@/server/email";
import { EVENT_IDS } from "@/app/schedule/content";
import { rsvps } from "@/server/db/schema";
import { z } from "zod";

export const RsvpInputSchema = z.object({
  rsvpInput: z.array(
    z.object({
      guestId: z.number(),
      attending: z.union([
        z
          .string({ required_error: "Please submit the RSVP for this guest." })
          .toLowerCase()
          .transform((x) => x === "true")
          .pipe(z.boolean()),
        z.boolean(),
      ]) as z.ZodType<boolean>,
      event: z.enum(EVENT_IDS),
    }),
  ) satisfies z.ZodType<(typeof rsvps.$inferInsert)[]>,
  email: z.boolean().default(false).optional(),
  partyId: z.string(),
});

export type EmailResult =
  | { emails: string[]; error?: never }
  | {
      emails?: never;
      error: "SERVER_ERROR" | "EMAIL_CLIENT_ERROR" | "NO_EMAIL";
    };
