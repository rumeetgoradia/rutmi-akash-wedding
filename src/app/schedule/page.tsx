import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import LandingImage from "public/schedule/Landing.png";
import { EventsList } from "./EventsList";

const TITLE = "Schedule of Events";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Schedule() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <EventsList />
    </Content>
  );
}
