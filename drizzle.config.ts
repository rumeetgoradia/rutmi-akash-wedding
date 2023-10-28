import type { Config } from "drizzle-kit";
import { env } from "@/env.mjs";
import "dotenv/config";

export default {
  schema: "./src/db/schema.ts",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL!,
  },
} satisfies Config;
