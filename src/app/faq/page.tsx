import { Metadata, NextPage } from "next";
import FamilyGrid from "@/app/family/FamilyGrid";
import { Content } from "@/components/layout/PageContent";
import LandingImage from "public/faq/Landing.jpeg";
import FAQPageContent from "@/app/faq/FAQPageContent";

const TITLE = "FAQ";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

const FAQPage: NextPage = () => {
  return (
    <Content hero={LandingImage} title="FAQ">
      <FAQPageContent />
    </Content>
  );
};

export default FAQPage;
