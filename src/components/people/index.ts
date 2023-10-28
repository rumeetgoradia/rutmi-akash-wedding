import { StaticImageData } from "next/image";

export type Person = {
  name: string;
  role: string;
  image: StaticImageData;
};

export type PersonWithBio = Person & {
  bio: string[];
};
