import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";

const TITLE = "Registry";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Registry() {
  return (
    <Content title={TITLE} hero={LandingImage}>
      <div className="flex w-full flex-col gap-4 sm:gap-6">
        <p className="font-noto text-center font-light leading-[1.8]">
          Your presence is enough of a gift for us! However, for those of you
          who would like to give some more, we are accepting cash/check gifts or
          donations to one of our two life funds below. We appreciate anything
          you give!
        </p>
        <p className="font-noto text-center font-light leading-[1.8]">
          Please note: No boxed gifts.
        </p>
      </div>
    </Content>
  );
}
