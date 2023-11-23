"use client";

import { useGuestStore } from "@/store/guest";
import NavBar from "./NavBar";
import NavSheet from "./NavSheet";

export default function Navigation() {
  const { guest } = useGuestStore();

  if (!guest) {
    return null;
  }

  return (
    <>
      <div className="md:hidden">
        <NavSheet />
      </div>
      <div className="w-full max-md:hidden">
        <NavBar />
      </div>
    </>
  );
}
