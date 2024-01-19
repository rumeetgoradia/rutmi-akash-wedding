import AccommodationsPageContent from "./AccommodationsPageContent";
import { Content } from "@/components/layout/Content";
import { env } from "@/env.mjs";
import { Metadata } from "next";
import LandingImage from "public/accommodations/Landing.jpeg";

const TITLE = "Travel Accommodations";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Story() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <AccommodationsPageContent />
    </Content>
  );
}
