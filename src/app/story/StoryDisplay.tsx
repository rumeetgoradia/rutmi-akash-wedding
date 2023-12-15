"use client";

import STORY_CONTENT from "@/app/story/content";
import { animation } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";

const StoryDisplay = () => {
  return (
    <div className="flex w-full flex-col gap-12">
      {STORY_CONTENT.map(({ title, image, description }, index) => (
        <motion.div
          className="flex w-full flex-col gap-6"
          key={`our-story-${title}`}
          {...animation(index)}
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
        </motion.div>
      ))}
    </div>
  );
};

export default StoryDisplay;
