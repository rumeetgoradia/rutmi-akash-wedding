CREATE TABLE IF NOT EXISTS "rsvp" (
	"guest_id" serial NOT NULL,
	"event" "event" NOT NULL,
	"attending" boolean,
	CONSTRAINT rsvp_guest_id_event_pk PRIMARY KEY("guest_id","event")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rsvp" ADD CONSTRAINT "rsvp_guest_id_guest_id_fk" FOREIGN KEY ("guest_id") REFERENCES "guest"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
