import { Figtree, Meddon, Noto_Serif } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});
export const meddon = Meddon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-meddon",
});
export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-notoSerif",
});
