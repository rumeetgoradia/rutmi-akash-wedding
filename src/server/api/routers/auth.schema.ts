import { z } from "zod";

export const SignInInputSchema = z
  .object({
    firstName: z.string().min(1, "Please enter your first name."),
    lastName: z.string().min(1, "Please enter your last name."),
    specifierType: z.enum(["email", "phone"]).optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z
      .string()
      .min(1, "Please enter the site password provided by Rutmi and Akash."),
  })
  .refine(
    (data) => {
      if (data.specifierType === "email") {
        return !!data.email;
      }

      return true;
    },
    {
      message:
        "Please enter the primary email address associated with your party.",
      path: ["email"],
    },
  )
  .refine(
    (data) => {
      if (data.specifierType === "phone") {
        return !!data.phone;
      }

      return true;
    },
    {
      message:
        "Please enter the primary phone number associated with your party.",
      path: ["phone"],
    },
  );
