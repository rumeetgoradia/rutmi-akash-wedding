DO $$ BEGIN
 CREATE TYPE "event" AS ENUM('pre-wedding', 'chandlo-matli', 'pre-wedding-cont', 'mehndi', 'garba-sangeet', 'haldi', 'welcome-dinner', 'wedding', 'reception', 'post-wedding');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT account_provider_providerAccountId PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "events_parties" (
	"party_id" text NOT NULL,
	"event" "event" NOT NULL,
	CONSTRAINT events_parties_party_id_event PRIMARY KEY("party_id","event")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "guest" (
	"id" text PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text,
	"is_admin" boolean DEFAULT false,
	"party_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "party" (
	"id" text PRIMARY KEY NOT NULL,
	"label" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT verificationToken_identifier_token PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "first_name_idx" ON "guest" ("first_name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "last_name_idx" ON "guest" ("last_name");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_guest_id_fk" FOREIGN KEY ("userId") REFERENCES "guest"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
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
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_guest_id_fk" FOREIGN KEY ("userId") REFERENCES "guest"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
