import Image from "next/image";
import LandingImage from "public/home/home.jpeg";
import { cn } from "@/lib/utils";
import { meddon, notoSerif } from "@/app/fonts";
import Countdown from "@/components/home/countdown";
import { Content } from "@/components/layout/Content";

export default function Home() {
	const WEDDING_DATE = new Date("2024-05-25T09:00:00.000-04:00");

	return (
		<Content hero={LandingImage}>
			<h2 className={"header"}>Pompton Plains, NJ</h2>
			<div className="flex w-full flex-col items-center gap-4 lg:gap-6">
				<h2 className={"header"}>Saturday, May 25, 2024</h2>
				<Countdown date={WEDDING_DATE} />
			</div>
			<p
				className={cn(
					notoSerif.className,
					"text-center font-light leading-[1.8] lg:pt-12"
				)}
			>
				We can&apos;t wait to share our special day with you! Please navigate
				our website to learn more about our story and upcoming nuptials.
			</p>
		</Content>
	);
}
