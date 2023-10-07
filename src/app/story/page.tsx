import Image from "next/image";
import { Metadata } from "next";
import STORY_CONTENT from "./content";
import { cn } from "@/lib/utils";
import { notoSerif } from "../fonts";

export const metadata: Metadata = {
  title: "Our Story — Rutmi & Akash",
  description:
    "Celebrating the union of Rutmi Goradia and Akash Patel — May 25, 2024.",
};

export default function Story() {
  return (
    <div className="flex w-full flex-col gap-12 max-md:pt-12">
      {STORY_CONTENT.map(({ title, image, description }, index) => (
        <div className="flex w-full flex-col gap-6" key={`our-story-${title}`}>
          <h2 className="header">{title}</h2>
          <Image
            src={image}
            alt={title}
            placeholder="blur"
            className="w-full"
          />
          <div className="flex w-full flex-col gap-3">
            {description.map((desc) => (
              <p
                className={cn(notoSerif.className, "md:text-md text-sm")}
                key={`our-story-${title}-${desc}`}
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
  );
}
