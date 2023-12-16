"use client";

import Image from "next/image";

import { type Person } from ".";

export const PersonDisplay: React.FC<Person> = ({ name, role, image }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          className="transition-transform hover:scale-105"
        />
      </div>
      <div className={"font-noto mt-2 text-center md:text-lg"}>{name}</div>
      <div className={"font-figtree text-center font-light max-md:text-sm"}>
        {role}
      </div>
    </div>
  );
};
