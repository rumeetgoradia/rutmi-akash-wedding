import { Content } from "@/components/layout/Content";
import { PersonDisplay } from "@/components/people/PersonDisplay";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import { WEDDING_PARTY } from "./content";

const TITLE = "The Wedding Party";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function WeddingParty() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <div className="grid w-full grid-cols-2 gap-4 md:gap-6">
        {WEDDING_PARTY.map((weddingPartyMember) => (
          <PersonDisplay
            {...weddingPartyMember}
            key={`wedding-party-${weddingPartyMember.name}`}
          />
        ))}
      </div>
    </Content>
  );
}
