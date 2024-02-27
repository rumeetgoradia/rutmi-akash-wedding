import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const guests = pgTable(
  "guest",
  {
    id: serial("id").primaryKey(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    title: text("title"),
    suffix: text("suffix"),
    displayOrder: integer("display_order").notNull(),
    partyId: text("party_id")
      .notNull()
      .references(() => parties.id),
  },
  (guest) => {
    return {
      firstNameIdx: index("first_name_idx").on(guest.firstName),
      lastNameIdx: index("last_name_idx").on(guest.lastName),
    };
  },
);
export type Guest = typeof guests.$inferSelect;

export const guestRelations = relations(guests, ({ one, many }) => ({
  parties: one(parties, {
    fields: [guests.partyId],
    references: [parties.id],
  }),
  rsvps: many(rsvps),
}));

export const eventEnum = pgEnum("event", [
  "bride-pre-wedding",
  "chandlo-matli",
  "mandap-murat-mosalu",
  "aanu-varnu",
  "groom-pre-wedding",
  "vastu-pujan",
  "housewarming",
  "mehndi",
  "garba-sangeet",
  "haldi",
  "welcome-dinner",
  "wedding",
  "reception",
  "post-wedding",
]);

export type Party = typeof parties.$inferSelect;

export const parties = pgTable("party", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
  email: text("email"),
  phone: text("phone"),
});

export const partyRelations = relations(parties, ({ many }) => ({
  guests: many(guests),
  events: many(allowedEventsForParties),
}));

export const allowedEventsForParties = pgTable(
  "events_parties",
  {
    partyId: text("party_id")
      .notNull()
      .references(() => parties.id),
    event: eventEnum("event").notNull(),
  },
  (aefp) => ({
    pk: primaryKey({ columns: [aefp.partyId, aefp.event] }),
  }),
);

export const allowedEventsForPartiesRelations = relations(
  allowedEventsForParties,
  ({ one }) => ({
    party: one(parties, {
      fields: [allowedEventsForParties.partyId],
      references: [parties.id],
    }),
  }),
);

export const rsvps = pgTable(
  "rsvp",
  {
    guestId: integer("guest_id")
      .notNull()
      .references(() => guests.id),
    event: eventEnum("event").notNull(),
    attending: boolean("attending").notNull(),
  },
  (rsvp) => ({
    pk: primaryKey({ columns: [rsvp.guestId, rsvp.event] }),
  }),
);

export const rsvpRelations = relations(rsvps, ({ one }) => ({
  guest: one(guests, {
    fields: [rsvps.guestId],
    references: [guests.id],
  }),
}));
