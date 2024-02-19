"use client";

import { EMAIL_ADDRESS } from "@/app/constants";
import { scrollToTop } from "@/lib/styles";
import { useGuestStore } from "@/store/guest";
import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const { guest, signOut } = useGuestStore();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-background p-8">
      <div className="text-primary">
        <Link
          href={`mailto::${EMAIL_ADDRESS}`}
          className="flex items-center justify-between gap-2"
        >
          <div className="flex items-center justify-center rounded-full bg-primary p-2">
            <Mail className="h-4 w-4 text-background" />
          </div>
          <p className="font-noto text-sm text-primary">{EMAIL_ADDRESS}</p>
        </Link>
      </div>
      {guest ? (
        <div className="font-figtree select-none text-sm opacity-50 transition-opacity hover:opacity-100">
          Not {guest.firstName} {guest.lastName}?{" "}
          <span
            className="cursor-pointer text-primary hover:underline"
            onClick={() => {
              signOut();
              scrollToTop();
            }}
            title="Log in again."
          >
            Log in again.
          </span>
        </div>
      ) : (
        <div className="h-[20px] w-full" />
      )}
    </div>
  );
};

export default Footer;
