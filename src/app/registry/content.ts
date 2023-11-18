import { StaticImageData } from "next/image";
import Honeymoon from "public/registry/honeymoon.jpeg";
import House from "public/registry/house.jpeg";

export type Fund = {
  image: StaticImageData;
  url: string;
  title: string;
};

export const FUNDS: Fund[] = [
  {
    title: "Honeymoon Fund",
    url: "https://account.venmo.com/pay?recipients=rutmigoradia",
    image: Honeymoon,
  },
  {
    title: "House Fund",
    url: "https://account.venmo.com/pay?recipients=akashhh15",
    image: House,
  },
];
