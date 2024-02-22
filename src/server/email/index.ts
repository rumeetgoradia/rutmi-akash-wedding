import { Resend } from "resend";

import { env } from "@/env.mjs";

export const emailClient = new Resend(env.RESEND_API_KEY);
