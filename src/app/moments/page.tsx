import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import { IMAGES } from "./content";
import { Content } from "@/components/layout/Content";
import Image from "next/image";
import MomentsGrid from "@/components/moments/MomentsGrid";
import MomentsSlideshow from "@/components/moments/MomentsSlideShow";

const TITLE = "Our Moments";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Moments() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <MomentsGrid images={IMAGES} />
    </Content>
  );
}
