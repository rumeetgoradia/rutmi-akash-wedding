"use client";

import { notoSerif } from "@/app/fonts";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import Image, { type StaticImageData } from "next/image";

import { type Person } from ".";

export const PersonDisplay: React.FC<Person> = ({ name, role, image }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
        />
      </div>
      <div className={"font-noto mt-2 text-center md:text-lg"}>{name}</div>
      <div className={"font-figtree text-center font-light max-md:text-sm"}>
        {role}
      </div>
    </div>
  );
};
