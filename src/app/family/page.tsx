import { PersonDisplay } from "@/components/people/PersonDisplay";
import Image from "next/image";
import LandingImage from "public/family/Landing.jpeg";
import { FAMILY } from "./content";
import { Content } from "@/components/layout/Content";
import { Metadata } from "next";

const TITLE = "The Family";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Family() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <div className="grid w-full grid-cols-2 gap-4 md:gap-6">
        {FAMILY.map((familyMember) => (
          <PersonDisplay
            {...familyMember}
            key={`family-member-${familyMember.name}`}
          />
        ))}
      </div>
    </Content>
  );
}
