import { Metadata } from "next";
import { WeddingPartyPage } from "./WeddingPartyPage";

const TITLE = "The Wedding Party";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function WeddingParty() {
  return <WeddingPartyPage title={TITLE} />;
}
