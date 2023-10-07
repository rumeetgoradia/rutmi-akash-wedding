import { PersonDisplay } from "@/components/people/PersonDisplay";
import Image from "next/image";
import LandingImage from "public/home/home.jpeg";
import { WEDDING_PARTY } from "./content";
import { Content } from "@/components/layout/Content";

export default function WeddingParty() {
	return (
		<Content hero={LandingImage}>
			<h2 className="header">The Wedding Party</h2>
			<div className="grid w-full grid-cols-2 gap-4 md:gap-6">
				{WEDDING_PARTY.map((weddingPartyMember) => (
					<PersonDisplay
						{...weddingPartyMember}
						key={`wedding-party-${weddingPartyMember.name}`}
					/>
				))}
			</div>
		</Content>
	);
}
