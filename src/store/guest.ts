import { Guest } from "@/server/db/schema";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type GuestStore = {
  guest: Guest | null;
  signIn: (guest: Guest) => void;
  signOut: () => void;
};

export const useGuestStore = create<GuestStore>()(
  persist(
    (set, get) => ({
      guest: null,
      signIn: (guest) => set({ guest }),
      signOut: () => set({ guest: null }),
    }),
    {
      name: "guest-storage",
      partialize: (state) =>
        state.guest ? { guest: { id: state.guest.id } } : { guest: null },
    },
  ),
);
