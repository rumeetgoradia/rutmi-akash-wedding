import { allowedEventsForParties, guests, parties } from "@/server/db/schema";
import { GUESTS } from "@/server/db/seed_data";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const main = async () => {
  const client = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle(client);
  const guestsToPush: (typeof guests.$inferInsert)[] = [];
  const partiesToPush: (typeof parties.$inferInsert)[] = [];
  const allowedEventsForPartiesToPush: (typeof allowedEventsForParties.$inferInsert)[] =
    [];

  Object.entries(GUESTS).forEach(([partyId, party]) => {
    partiesToPush.push({
      id: partyId,
      label: partyId,
      email: party.email,
      phone: party.phone,
    });

    party.guests.forEach(({ firstName, lastName, suffix, title }) => {
      guestsToPush.push({
        firstName,
        lastName,
        suffix,
        title,
        partyId,
      });
    });

    party.events.forEach((event) =>
      allowedEventsForPartiesToPush.push({
        event,
        partyId,
      }),
    );
  });

  console.log("Seed start");
  await db.delete(guests);
  await db.delete(allowedEventsForParties);
  await db.delete(parties);
  await db.insert(parties).values(partiesToPush);
  await db.insert(guests).values(guestsToPush);
  await db
    .insert(allowedEventsForParties)
    .values(allowedEventsForPartiesToPush);
  console.log("Seed done");
};

main();
