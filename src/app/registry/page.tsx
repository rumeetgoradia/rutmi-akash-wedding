import RegistryPageContent from "@/app/registry/RegistryPageContent";
import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import LandingImage from "public/registry/Landing.jpeg";

const TITLE = "Registry";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Registry() {
  return (
    <Content title={TITLE} hero={LandingImage}>
      <RegistryPageContent />
    </Content>
  );
}
