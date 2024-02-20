import HomePageContent from "@/app/(home)/HomePageContent";
import { Content } from "@/components/layout/PageContent";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";

export const metadata: Metadata = {
  title: "Rutmi & Akash",
};

export default function Home() {
  return (
    <Content hero={LandingImage}>
      <HomePageContent />
    </Content>
  );
}
