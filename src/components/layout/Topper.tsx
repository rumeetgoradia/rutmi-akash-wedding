"use client";

import TopBackground from "@/../public/background/top-removebg-preview.png";
import { cn } from "@/lib/utils";
import { useGuestStore } from "@/store/guest";
import Image from "next/image";
import Link from "next/link";

const Topper = () => {
  const { guest } = useGuestStore();

  return (
    <div className="relative z-[11] min-h-[291px] w-full overflow-hidden pt-24 sm:min-h-[340px] sm:pt-28 md:min-h-0 md:bg-background md:pt-20">
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
      <Link
        passHref
        href="/"
        title="Home"
        className={cn(!guest && "pointer-events-none cursor-default")}
      >
        <div className="font-meddon relative  z-[12] w-full px-8 md:text-foreground">
          <h1
            className={"text-6xl leading-[1.4] text-foreground max-md:hidden"}
          >
            Rutmi & Akash
          </h1>
          <h1 className="text-center text-5xl text-secondary sm:text-6xl md:hidden">
            <span>Rutmi</span>
            <br />
            <span className="absolute top-[80px] -translate-y-1/2 text-2xl sm:-translate-y-0 sm:text-3xl">
              &
            </span>
            <br />
            <span>Akash</span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Topper;
