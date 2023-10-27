import { PersonDisplay } from "@/components/people/PersonDisplay";
import Image from "next/image";
import LandingImage from "public/family/Landing.jpeg";
import { FAMILY } from "./content";
import { Content } from "@/components/layout/Content";

export default function Family() {
	return (
		<Content hero={LandingImage} title="The Family">
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
