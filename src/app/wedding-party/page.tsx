import { Content } from "@/components/layout/Content";
import WeddingPartyTabs from "@/components/wedding-party/WeddingPartyTabs";
import { Metadata } from "next";
import LandingImage from "public/wedding-party/Landing.jpeg";
import { BRIDE_WEDDING_PARTY, GROOM_WEDDING_PARTY } from "./content";

const TITLE = "The Wedding Party";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function WeddingParty() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <WeddingPartyTabs
        brideWeddingParty={BRIDE_WEDDING_PARTY}
        groomWeddingParty={GROOM_WEDDING_PARTY}
      />
    </Content>
  );
}
