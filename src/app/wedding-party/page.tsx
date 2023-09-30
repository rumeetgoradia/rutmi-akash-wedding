import { PersonDisplay } from "@/components/people/PersonDisplay";
import Image from "next/image";
import LandingImage from "public/home/home.jpeg";
import { WEDDING_PARTY } from "./content";

export default function WeddingParty() {
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
        <h2 className="header">The Wedding Party</h2>
        <div className="grid w-full grid-cols-2 gap-4 md:gap-6">
          {WEDDING_PARTY.map((weddingPartyMember) => (
            <PersonDisplay
              {...weddingPartyMember}
              key={`wedding-party-${weddingPartyMember.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
