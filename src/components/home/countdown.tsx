"use client";

import { figtree } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Countdown = ({ date }: { date: Date }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    past: boolean;
  }>();

  useEffect(() => {
    const interval = setInterval(() => {
      const msDiff = date.valueOf() - new Date().valueOf();
      const past = msDiff < 0;
      const seconds = Math.floor(Math.abs(msDiff) / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      setTimeLeft({ past, days, hours: hours % 24, minutes: minutes % 60 });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

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
