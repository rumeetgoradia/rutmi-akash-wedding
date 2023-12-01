import { z } from "zod";

export const SignInInputSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  id: z.coerce.number().optional(),
  password: z.string().min(1, "Please enter the site password."),
});
