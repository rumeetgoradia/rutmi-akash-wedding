"use server";

import { env } from "@/env.mjs";

export const checkParty = async (party: string) => {
  return env.ADMIN_PARTIES.includes(party);
};

export const checkPassword = async (password: string) => {
  return env.ADMIN_PASSWORD === password;
};
