import { Content } from "@/components/layout/PageContent";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import MomentsGrid from "./MomentsGrid";
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
