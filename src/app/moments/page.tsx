import { Content } from "@/components/layout/Content";
import MomentsGrid from "@/components/moments/MomentsGrid";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import { IMAGES } from "./content";

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
