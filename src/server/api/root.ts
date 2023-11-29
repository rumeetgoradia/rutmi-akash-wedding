import { eventsRouter } from "@/server/api/routers/events";
import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "./routers/auth";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  events: eventsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
