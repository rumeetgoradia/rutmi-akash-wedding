import "dotenv/config";
import type { Config } from "drizzle-kit";
import { env } from "./src/env.mjs";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
