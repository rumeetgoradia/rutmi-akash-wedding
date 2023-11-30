import Countdown from "@/components/home/countdown";
import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";

export const metadata: Metadata = {
  title: "Rutmi & Akash",
};

export default function Home() {
  const WEDDING_DATE = new Date("2024-05-25T09:00:00.000-04:00");

  return (
    <Content hero={LandingImage}>
      <h2 className="font-meddon text-3xl md:text-4xl">Pompton Plains, NJ</h2>
      <div className="flex w-full flex-col items-center gap-4 lg:gap-6">
        <h2 className="font-meddon text-3xl md:text-4xl">
          Saturday, May 25, 2024
        </h2>
        <Countdown date={WEDDING_DATE} />
      </div>
      <p className="font-noto text-center font-light leading-[1.8] [text-wrap:balance] lg:pt-12">
        We can&apos;t wait to share our special day with you! Please navigate
        our website to learn more about our story and upcoming nuptials.
      </p>
    </Content>
  );
}
