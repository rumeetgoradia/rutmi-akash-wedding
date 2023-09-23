"use client";

import { meddon } from "@/app/fonts";
import { cn } from "@/lib/utils";
import TopBackground from "@/../public/background/top-removebg-preview.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative z-[11] min-h-[291px] w-full overflow-hidden pt-24 sm:min-h-[250px] sm:pt-28 md:min-h-0 md:bg-background md:pt-20">
      <div className="absolute left-1/2 top-0 z-[10] h-[300px] w-full -translate-x-1/2 md:hidden">
        <Image
          src={TopBackground}
          alt="Top background"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1
        className={cn(
          meddon.className,
          "w-full text-center text-5xl leading-[1.4] text-secondary md:text-6xl md:text-foreground",
          "relative z-[12] px-8",
        )}
      >
        Rutmi & Akash
      </h1>
    </div>
  );
};

export default Header;
