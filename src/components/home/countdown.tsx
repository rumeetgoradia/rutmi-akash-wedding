"use client";

import { figtree } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
        ? `${timeLeft.days} Days ${timeLeft.hours} Hrs ${
            timeLeft.minutes
          } Mins${timeLeft.past ? " Ago" : ""}`
        : "..."}
    </p>
  );
};

export default Countdown;
