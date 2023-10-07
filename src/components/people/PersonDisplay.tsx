"use client";

import { notoSerif } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";

export type Person = {
  name: string;
  role: string;
  image: StaticImageData;
};

export const PersonDisplay: React.FC<Person> = ({
  name,
  role,
  image
}) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          style={{ objectFit: "cover", objectPosition: "50% 0" }}
          placeholder="blur"
        />
      </div>
      <div className={cn("mt-2 text-center md:text-lg", notoSerif.className)}>
        {name}
      </div>
      <div className={"text-center font-light max-md:text-sm"}>{role}</div>
    </div>
  );
};
