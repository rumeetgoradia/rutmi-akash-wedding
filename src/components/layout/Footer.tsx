"use client";

import { notoSerif } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import { EMAIL_ADDRESS } from "@/app/constants";

const Footer = () => {
  return (
    <div
      className={cn(
        notoSerif.className,
        "flex w-full items-center justify-center p-8 text-primary",
      )}
    >
      <Link
        href={`mailto::${EMAIL_ADDRESS}`}
        className="flex items-center justify-between gap-2"
      >
        <div className="flex items-center justify-center rounded-full bg-primary p-2 ">
          <Mail className="h-4 w-4 text-background" />
        </div>
        <p className={cn(notoSerif.className, "text-xs text-primary")}>
          {EMAIL_ADDRESS}
        </p>
      </Link>
    </div>
  );
};

export default Footer;
