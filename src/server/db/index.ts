import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "@/env.mjs";
import * as schema from "./schema";

neonConfig.fetchConnectionCache = true;

const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql);
