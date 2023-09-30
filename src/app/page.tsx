import Image from "next/image";
import LandingImage from "@/../public/home/home.jpeg";
import { cn } from "@/lib/utils";
import { meddon, notoSerif } from "@/app/fonts";
import Countdown from "@/components/home/countdown";

export default function Home() {
  const WEDDING_DATE = new Date("2024-05-25T09:00:00.000-04:00");

  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          src={LandingImage}
          alt="Rutmi & Akash"
          placeholder="blur"
          className="w-full"
        />
      </div>
      <div className="mx-auto flex w-full max-w-screen-sm flex-col items-center gap-8 bg-background py-12">
        <h2 className={cn(meddon.className, "header")}>Pompton Plains, NJ</h2>
        <div className="flex w-full flex-col items-center gap-4 lg:gap-6">
          <h2 className={cn(meddon.className, "header")}>
            Saturday, May 25, 2024
          </h2>
          <Countdown date={WEDDING_DATE} />
        </div>
        <p
          className={cn(
            notoSerif.className,
            "text-center font-light leading-[1.8] tracking-wider lg:pt-12",
          )}
        >
          We can&apos;t wait to share our special day with you! Please navigate
          our website to learn more about our story and upcoming nuptials.
        </p>
      </div>
    </div>
  );
}
