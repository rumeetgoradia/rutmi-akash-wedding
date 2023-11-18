import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LandingImage from "public/home/landing.jpeg";
import { FUNDS } from "./content";

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
        <p className="font-noto mb-2 text-center font-light leading-[1.8]">
          Please note: No boxed gifts.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {FUNDS.map(({ title, image, url }) => (
            <Link
              href={url}
              className="group relative z-20 aspect-square w-full overflow-hidden"
              title={title}
              key={`${title}-fund`}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="transition-[filter] group-hover:blur-sm"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute left-0 top-0 z-[30] flex h-full w-full items-center justify-center bg-foreground/60 p-4 transition-opacity group-hover:bg-foreground/80">
                <h3 className="font-noto w-full text-center text-xl font-light uppercase tracking-wide text-background transition-[letter-spacing] group-hover:tracking-widest sm:text-2xl">
                  {title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Content>
  );
}
