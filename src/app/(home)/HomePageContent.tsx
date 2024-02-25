"use client";

import { animation } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Flower from "public/flower.png";
import { figtree } from "@/app/fonts";
import { cn } from "@/lib/styles";
import { useEffect, useState } from "react";

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

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  past: boolean;
};

const Countdown = ({ date }: { date: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  function getTimeLeft(date: Date): TimeLeft {
    const msDiff = date.valueOf() - new Date().valueOf();
    const past = msDiff < 0;
    const seconds = Math.floor(Math.abs(msDiff) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      days,
      past,
      minutes: minutes % 60,
      hours: hours % 24,
    };
  }

  return (
    <p className={cn(figtree.className, "text-sm uppercase tracking-widest")}>
      {timeLeft
        ? `${timeLeft.days} Day${timeLeft.days === 1 ? "" : "s"} ${timeLeft.hours} Hr${timeLeft.hours === 1 ? "" : "s"} ${
            timeLeft.minutes
          } Min${timeLeft.minutes === 1 ? "" : "s"}${timeLeft.past ? " Ago" : ""}`
        : "..."}
    </p>
  );
};
