import { EMAIL_ADDRESS } from "@/server/email/constants";
import { split } from "postcss/lib/list";
import { z } from "zod";

export const TEST_EMAILS = [
  EMAIL_ADDRESS.toLowerCase(),
  "rumeet.goradia@gmail.com",
] as const;

export const MassEmailSchema = z
  .object({
    subject: z.string({
      required_error: "Please enter a subject for your mass email.",
    }),
    preview: z.string({
      required_error: "Please enter a preview for your mass email.",
    }),
    body: z.string({
      required_error: "Please enter the body of your mass email.",
    }),
    title: z.string({
      required_error: "Please enter a title for your mass email.",
    }),
    test: z.coerce.boolean().optional(),
    testEmail: z.enum(TEST_EMAILS).optional(),
  })
  .superRefine(({ test, testEmail }, ctx) => {
    if (test && (!testEmail || !TEST_EMAILS.includes(testEmail))) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "If you are sending a test email, please select a valid test email address.",
      });
    }
  });

export type MassEmailSchema = z.infer<typeof MassEmailSchema>;
