// src/db/seed.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "@/env.mjs";

const main = async () => {
  // const client = new Pool({
  //         connectionString: process.env.DATABASE_URL,
  // });
  // const db = drizzle(client);
  // const data: (typeof users.$inferInsert)[] = [];
  // for (let i = 0; i < 20; i++) {
  //         data.push({
  //                 username: faker.internet.userName(),
  //                 email: faker.internet.email(),
  //         });
  // }
  // console.log("Seed start");
  // await db.insert(users).values(data);
  // console.log("Seed done");
};

main();
