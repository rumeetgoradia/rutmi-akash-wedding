"use client";

import { notoSerif, meddon } from "@/app/fonts";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import Image, { type StaticImageData } from "next/image";

import { type Person } from ".";
import { PersonWithTagline } from "@/components/people/index";

export const PersonTaglineDisplay: React.FC<PersonWithTagline> = ({
  name,
  role,
  image,
  tagline,
}) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="group relative aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          className="transition-[filter] group-hover:blur-sm"
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
        />
        <div className="absolute left-0 top-0 flex h-full w-full select-none flex-col items-center justify-center bg-foreground/70 p-6 text-background opacity-0 transition-opacity group-hover:opacity-100">
          <h3
            className={
              "font-noto text-md text-center font-light uppercase leading-[1.3] tracking-widest [text-wrap:balance] sm:text-2xl md:text-3xl"
            }
          >
            {tagline}
          </h3>
        </div>
      </div>
      <div className={"font-noto mt-2 text-center md:text-lg"}>{name}</div>
      <div className={"font-figtree text-center font-light max-md:text-sm"}>
        {role}
      </div>
    </div>
  );
};
