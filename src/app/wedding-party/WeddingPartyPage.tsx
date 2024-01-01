"use client";

import { Content } from "@/components/layout/Content";
import LandingImage_Bride from "public/wedding-party/Landing_Bride.jpeg";
import LandingImage_Groom from "public/wedding-party/Landing_Groom.jpeg";
import WeddingPartyTabs from "./WeddingPartyTabs";
import { BRIDE_WEDDING_PARTY, GROOM_WEDDING_PARTY, Side } from "./content";
import { useState } from "react";

export const WeddingPartyPage: React.FC<{ title: string }> = ({ title }) => {
  const [currentSide, setCurrentSide] = useState<Side>("bride");

  return (
    <Content
      hero={currentSide === "bride" ? LandingImage_Bride : LandingImage_Groom}
      title={title}
    >
      <WeddingPartyTabs
        brideWeddingParty={BRIDE_WEDDING_PARTY}
        groomWeddingParty={GROOM_WEDDING_PARTY}
        currentSide={currentSide}
        setCurrentSide={setCurrentSide}
      />
    </Content>
  );
};
