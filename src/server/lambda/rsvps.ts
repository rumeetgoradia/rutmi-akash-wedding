"use server";

import { env } from "@/env.mjs";
import { redirect } from "next/navigation";

export const refreshRsvps = async () => {
  const { ok } = await fetch(env.REFRESH_RSVPS_LAMBDA, { cache: "no-store" });
  return { ok };
};

export const getRsvpsSheet = () => {
  return {
    url: `https://docs.google.com/spreadsheets/d/${env.GOOGLE_SHEETS_KEY}`,
  };
};
