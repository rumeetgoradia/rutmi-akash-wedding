import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { client as sanityClient } from "@/lib/sanity/client";

export async function createContext(opts?: FetchCreateContextFnOptions) {
  return {
    sanityClient,
    headers: opts && Object.fromEntries(opts.req.headers),
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
