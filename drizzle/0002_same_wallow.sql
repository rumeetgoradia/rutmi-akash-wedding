ALTER TABLE "party" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "guest" DROP COLUMN IF EXISTS "email";