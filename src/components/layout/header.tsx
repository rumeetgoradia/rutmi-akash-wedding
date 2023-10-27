"use client";

import { meddon } from "@/app/fonts";
import { cn } from "@/lib/utils";
import TopBackground from "@/../public/background/top-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="relative z-[11] min-h-[291px] w-full overflow-hidden pt-24 sm:min-h-[250px] sm:pt-28 md:min-h-0 md:bg-background md:pt-20">
			<div className="absolute left-1/2 top-0 z-[10] h-[300px] w-full -translate-x-1/2 md:hidden">
				<Image
					src={TopBackground}
					alt="Top background"
					fill
					sizes="100vw"
					priority
					style={{ objectFit: "cover" }}
				/>
			</div>
			<Link passHref href="/" title="Home">
				<div className="font-meddon w-full  md:text-foreground relative z-[12] px-8">
					<h1
						className={"max-md:hidden text-6xl text-foreground leading-[1.4]"}
					>
						Rutmi & Akash
					</h1>
					<h1 className="md:hidden text-5xl text-secondary text-center">
						<span>Rutmi</span>
						<br />
						<span className="text-2xl absolute top-[80px] -translate-y-1/2">
							&
						</span>
						<br />
						<span>Akash</span>
					</h1>
				</div>
			</Link>
		</div>
	);
};

export default Header;
