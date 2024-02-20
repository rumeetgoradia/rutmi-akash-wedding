import { Content } from "@/components/layout/PageContent";
import { Metadata } from "next";
import LandingImage from "public/story/Landing.jpeg";
import StoryDisplay from "./StoryDisplay";

const TITLE = "Our Story";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Story() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <StoryDisplay />
    </Content>
  );
}
