import { Guest } from "@/server/db/schema";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type GuestStore = {
  guest?: Guest;
  validatedAdmin?: boolean;
  signIn: (guest: Guest) => void;
  setAdmin: () => void;
  signOut: () => void;
};

export const useGuestStore = create<GuestStore>()(
  persist(
    (set, get) => ({
      guest: undefined,
      signIn: (guest) => set({ guest }),
      signOut: () => set({ guest: undefined, validatedAdmin: undefined }),
      setAdmin: () => set({ validatedAdmin: true }),
    }),
    {
      name: "guest-storage",
    },
  ),
);

export const useHydration = () => {
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    // Note: This is just in case you want to take into account manual rehydration.
    // You can remove the following line if you don't need it.
    const unsubHydrate = useGuestStore.persist.onHydrate(() =>
      setHydrated(false),
    );

    const unsubFinishHydration = useGuestStore.persist.onFinishHydration(() =>
      setHydrated(true),
    );

    setHydrated(useGuestStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};
