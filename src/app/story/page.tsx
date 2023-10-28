import Image from "next/image";
import { Metadata } from "next";
import STORY_CONTENT from "./content";
import { cn } from "@/lib/utils";
import { notoSerif } from "@/app/fonts";
import LandingImage from "public/home/landing.jpeg";
import { Content } from "@/components/layout/Content";

const TITLE = "Our Story";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Story() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <div className="flex w-full flex-col gap-12">
        {STORY_CONTENT.map(({ title, image, description }, index) => (
          <div
            className="flex w-full flex-col gap-6"
            key={`our-story-${title}`}
          >
            <h2 className="font-meddon text-3xl md:text-4xl">{title}</h2>
            <div className="relative h-[460px] w-full">
              <Image
                src={image}
                alt={title}
                fill
                placeholder="blur"
                objectFit="cover"
                objectPosition="contain"
              />
            </div>
            <div className="flex w-full flex-col gap-3">
              {description.map((desc) => (
                <p
                  key={`our-story-${title}-${desc}`}
                  className="font-noto md:text-md text-sm font-light leading-[1.8]"
                >
                  {desc}
                </p>
              ))}
            </div>
            {index < STORY_CONTENT.length - 1 && (
              <div className="mt-3 flex w-full items-center justify-center">
                <hr className=" h-[1px] w-12 border-0 border-b-[1px] border-foreground/30" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Content>
  );
}
