import Countdown from "@/components/home/countdown";
import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import Image from "next/image";
import Flower from "public/flower.png";
import LandingImage from "public/home/landing.jpeg";

export const metadata: Metadata = {
  title: "Rutmi & Akash",
};

export default function Home() {
  const WEDDING_DATE = new Date("2024-05-25T09:00:00.000-04:00");

  return (
    <Content hero={LandingImage}>
      <div className="mb-8 flex w-full items-center justify-center">
        <Image src={Flower} alt="flower" className="h-20 w-auto" priority />
      </div>
      <div className="flex w-full flex-col items-center gap-4 lg:gap-6 ">
        <h2 className="font-meddon text-4xl [text-wrap:balance] ">
          Saturday, May 25, 2024
        </h2>
        <Countdown date={WEDDING_DATE} />
      </div>
      <div className="font-noto w-full text-center font-light leading-[1.8] [text-wrap:balance] md:pt-12">
        <p className="mb-4">
          We can&apos;t wait to share our special day with you!
        </p>
        <p>
          Please navigate our website to learn more about our story and upcoming
          nuptials.
        </p>
      </div>
    </Content>
  );
}
