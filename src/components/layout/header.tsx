"use client";

import { meddon } from "@/app/fonts";
import { cn } from "@/lib/utils";
import TopBackground from "@/../public/background/top.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative z-[11] w-full overflow-hidden pt-24 sm:pt-28 lg:pt-20">
      <div className="absolute left-1/2 top-0 z-[10] h-[250px] w-full -translate-x-1/2 sm:h-[300px] lg:hidden">
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
          "w-full text-center text-5xl leading-[1.4] text-secondary lg:text-6xl lg:text-foreground",
          "relative z-[12]",
        )}
      >
        Rutmi & Akash
      </h1>
    </div>
  );
};

export default Header;
