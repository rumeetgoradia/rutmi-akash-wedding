import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  boolean,
  index,
  pgEnum,
  unique,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";
import { relations } from "drizzle-orm";

export const guests = pgTable(
  "guest",
  {
    id: text("id").notNull().primaryKey(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    email: text("email"),
    isAdmin: boolean("is_admin").default(false),
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

export const guestRelations = relations(guests, ({ one }) => ({
  parties: one(parties, {
    fields: [guests.partyId],
    references: [parties.id],
  }),
}));

export const eventEnum = pgEnum("event", [
  "pre-wedding",
  "chandlo-matli",
  "pre-wedding-cont",
  "mehndi",
  "garba-sangeet",
  "haldi",
  "welcome-dinner",
  "wedding",
  "reception",
  "post-wedding",
]);

export const parties = pgTable("party", {
  id: text("id").notNull().primaryKey(),
  label: text("label").notNull(),
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
    pk: primaryKey(aefp.partyId, aefp.event),
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

// Auth stuff

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => guests.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  }),
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => guests.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  }),
);
