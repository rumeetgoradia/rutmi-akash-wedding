import type { Config } from "drizzle-kit";
import { env } from "@/env.mjs";
import "dotenv/config";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
