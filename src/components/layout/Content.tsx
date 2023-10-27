import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

const Content: React.FC<{
	hero: StaticImageData;
	title?: string;
	children: React.ReactNode;
}> = ({ hero, title, children }) => {
	return (
		<div className="w-full">
			<div className="w-full relative group overflow-hidden">
				<Image
					src={hero}
					alt="Rutmi & Akash"
					placeholder="blur"
					className={cn(
						"w-full",
						title && "md:group-hover:blur-sm transition-[filter]"
					)}
					priority
				/>
				{title && (
					<div className="top-0 left-0 absolute w-full h-full md:opacity-80 group-hover:opacity-100 bg-foreground/70 flex justify-center items-center p-6 text-background transition-opacity">
						<h2 className="font-meddon text-4xl lg:text-6xl !leading-[1.3]">
							{title}
						</h2>
					</div>
				)}
			</div>
			<div className="mx-auto flex w-full max-w-screen-md flex-col items-center gap-8 bg-background py-12 md:pt-16 max-md:px-8">
				{children}
			</div>
		</div>
	);
};

export { Content };
