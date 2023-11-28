DO $$ BEGIN
 CREATE TYPE "event" AS ENUM('housewarming', 'pre-wedding', 'chandlo-matli', 'pre-wedding-cont', 'mehndi', 'garba-sangeet', 'haldi', 'welcome-dinner', 'wedding', 'reception', 'post-wedding');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "events_parties" (
	"party_id" text NOT NULL,
	"event" "event" NOT NULL,
	CONSTRAINT events_parties_party_id_event_pk PRIMARY KEY("party_id","event")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "guest" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"title" text,
	"suffix" text,
	"is_admin" boolean DEFAULT false,
	"party_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "party" (
	"id" text PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"email" text,
	"phone" integer
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "first_name_idx" ON "guest" ("first_name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "last_name_idx" ON "guest" ("last_name");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "events_parties" ADD CONSTRAINT "events_parties_party_id_party_id_fk" FOREIGN KEY ("party_id") REFERENCES "party"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "guest" ADD CONSTRAINT "guest_party_id_party_id_fk" FOREIGN KEY ("party_id") REFERENCES "party"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
