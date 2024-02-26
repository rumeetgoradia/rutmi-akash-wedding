"use client";

import { ADDRESSES } from "@/components/address/constants";
import AddressDisplay from "@/components/address/AddressDisplay";
import { animation } from "@/lib/animation";
import { cn } from "@/lib/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Flower from "public/flower.png";
import MapImage from "public/accommodations/Doubletree GMAP.jpeg";

const AccommodationsPageContent: React.FC = () => {
  const address = ADDRESSES.hotel;

  const paragraphClassName =
    "font-noto text-center font-light leading-[1.8] [text-wrap:balance]";

  return (
    <div className="flex w-full flex-col gap-8">
      <motion.div
        className="flex w-full items-center justify-center"
        {...animation(0)}
      >
        <Image src={Flower} alt="flower" className="h-20 w-auto" priority />
      </motion.div>
      <div className="flex w-full flex-col gap-8 md:flex-row">
        <motion.div
          className="flex w-full flex-col gap-4 [text-wrap:balance]"
          {...animation(1)}
        >
          <p className={cn(paragraphClassName)}>
            For those of you who wish to stay overnight in the vicinity of our
            wedding venue, we have arranged a room block at the nearby
            DoubleTree by Hilton Fairfield Hotel & Suites, active May 24 to May
            26.
          </p>
          <p className={cn(paragraphClassName)}>
            To book with our room block, you may call the hotel at{" "}
            <Link
              href="tel:8443554326"
              title="Call DoubleTree by Hilton, Fairfield"
              className="text-primary underline-offset-4 hover:underline"
            >
              (844) 335-2364
            </Link>{" "}
            and mention "Goradia & Patel Wedding" or click{" "}
            <Link
              href="https://www.hilton.com/en/attend-my-event/akashandrutmi-wedding/"
              title="DoubleTree by Hilton, Fairfield"
              className="text-primary underline-offset-4 hover:underline "
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </Link>{" "}
            to book on their website with our special rate automatically
            applied.
          </p>
          <p className={cn(paragraphClassName)}>
            If you are interested in staying at the hotel, please be sure to
            book your room by May 5!
          </p>
        </motion.div>
      </div>
      <motion.div
        className="flex w-full flex-col items-center justify-center gap-4"
        {...animation(2)}
      >
        <Link
          href={address.googleMaps}
          title={address.title}
          className="group cursor-pointer"
        >
          <div className="relative aspect-square h-auto w-full min-w-[300px] cursor-pointer overflow-hidden">
            <Image
              src={MapImage}
              placeholder="blur"
              alt={address.title}
              fill
              style={{ objectPosition: "center center", objectFit: "cover" }}
              className="z-0 grayscale transition-[transform,filter] group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-primary/20 transition-colors group-hover:bg-transparent" />
          </div>
        </Link>
        <AddressDisplay {...address} />
      </motion.div>
    </div>
  );
};

export default AccommodationsPageContent;
