import HomePageContent from "@/app/(home)/HomePageContent";
import { Content } from "@/components/layout/PageContent";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import LandingImage from "public/home/landing.jpeg";

export const metadata: Metadata = {
  title: "404",
};

export default function _404Page() {
  return (
    <Content hero={LandingImage}>
      <div className="flex w-full max-w-screen-sm flex-col items-center justify-center gap-6">
        <h1 className="font-noto text-center text-2xl">
          There's nothing here!
        </h1>
        <Link href="/" className="w-full max-w-sm">
          <Button variant="cta">Back to Safety</Button>
        </Link>
      </div>
    </Content>
  );
}
