import { eventsRouter } from "./routers/events";
import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "./routers/auth";
import { adminRouter } from "./routers/admin";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  events: eventsRouter,
  admin: adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
