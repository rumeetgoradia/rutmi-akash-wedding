import { Guest } from "@/server/db/schema";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type GuestStore = {
  guest?: Guest;
  signIn: (guest: Guest) => void;
  signOut: () => void;
};

export const useGuestStore = create<GuestStore>()(
  persist(
    (set, get) => ({
      guest: undefined,
      signIn: (guest) => set({ guest }),
      signOut: () => set({ guest: undefined }),
    }),
    {
      name: "guest-storage",
    },
  ),
);
