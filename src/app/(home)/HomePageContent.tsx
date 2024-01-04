"use client";

import Countdown from "@/components/Countdown";
import { animation } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Flower from "public/flower.png";

const HomePageContent = () => {
  const WEDDING_DATE = new Date("2024-05-25T09:00:00.000-04:00");

  return (
    <>
      <motion.div
        className="mb-8 flex w-full items-center justify-center"
        {...animation(0)}
      >
        <Image src={Flower} alt="flower" className="h-20 w-auto" priority />
      </motion.div>
      <motion.div
        className="flex w-full flex-col items-center gap-4 lg:gap-6 "
        {...animation(1)}
      >
        <h2 className="font-meddon text-4xl leading-[1.5] [text-wrap:balance] ">
          Saturday, May 25, 2024
        </h2>
        <Countdown date={WEDDING_DATE} />
      </motion.div>
      <motion.div
        className="font-noto w-full text-center font-light leading-[1.8] [text-wrap:balance] md:pt-12"
        {...animation(2)}
      >
        <p className="mb-4">
          We can&apos;t wait to share our special day with you!
        </p>
        <p>
          Please navigate our website to learn more about our story and upcoming
          nuptials.
        </p>
      </motion.div>
    </>
  );
};

export default HomePageContent;
