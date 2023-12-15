import FamilyGrid from "@/app/family/FamilyGrid";
import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import LandingImage from "public/family/Landing.jpeg";

const TITLE = "The Family";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Family() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <FamilyGrid />
    </Content>
  );
}
