import { ZodError, ZodIssueCode, z } from "zod";
import { EVENT_IDS } from "@/app/schedule/content";
import { Optional } from "utility-types";
import { rsvps } from "@/server/db/schema";

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
});
