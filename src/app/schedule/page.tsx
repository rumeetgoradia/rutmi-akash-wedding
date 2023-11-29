import { Content } from "@/components/layout/Content";
import { EventsList } from "@/components/schedule/EventsList";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";

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
