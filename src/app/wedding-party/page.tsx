import { Content } from "@/components/layout/Content";
import { PersonDisplay } from "@/components/people/PersonDisplay";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import { BRIDE_WEDDING_PARTY, GROOM_WEDDING_PARTY } from "./content";
import { PersonBioDialog } from "@/components/people/PersonBioDialog";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import WeddingPartyTabs from "@/components/wedding-party/WeddingPartyTabs";

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
