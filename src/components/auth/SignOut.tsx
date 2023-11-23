"use client";

import { useGuestStore } from "@/store/guest";

const SignOut = () => {
  const { guest, signOut } = useGuestStore();

  if (!guest) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-1/2 z-[100] w-full max-w-screen-sm -translate-x-1/2 p-8">
      <div className="rounded-sm bg-white shadow-sm">
        Not {guest.firstName}?{" "}
        <span className="cursor-pointer" onClick={() => signOut()}>
          Log in again.
        </span>
      </div>
    </div>
  );
};

export default SignOut;
