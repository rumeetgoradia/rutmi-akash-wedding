import { PersonDisplay } from "@/components/people/PersonDisplay";
import Image from "next/image";
import LandingImage from "public/home/home.jpeg";
import { FAMILY } from "./content";

export default function Family() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          src={LandingImage}
          alt="Rutmi & Akash"
          placeholder="blur"
          className="w-full"
        />
      </div>
      <div className="mx-auto flex w-full max-w-screen-sm flex-col items-center gap-8 bg-background py-12">
        <h2 className="header">The Family</h2>
        <div className="grid w-full grid-cols-2 gap-4 md:gap-6">
          {FAMILY.map((familyMember) => (
            <PersonDisplay
              {...familyMember}
              key={`family-member-${familyMember.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
