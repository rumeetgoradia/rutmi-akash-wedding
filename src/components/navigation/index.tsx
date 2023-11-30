"use client";

import { useGuestStore } from "@/store/guest";
import NavBar from "./NavBar";
import NavSheet from "./NavSheet";

export default function Navigation() {
  const { guest } = useGuestStore();

  return (
    <>
      <div className="md:hidden">{!!guest && <NavSheet />}</div>
      <div className="w-full max-md:hidden">
        <NavBar disabled={!guest} />
      </div>
    </>
  );
}
