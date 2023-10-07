import Image, { StaticImageData } from "next/image";

const Content: React.FC<{
	children: React.ReactNode;
	hero: StaticImageData;
}> = ({ hero, children }) => {
	return (
		<div className="w-full">
			<div className="w-full">
				<Image
					src={hero}
					alt="Rutmi & Akash"
					placeholder="blur"
					className="w-full"
					priority
				/>
			</div>
			<div className="mx-auto flex w-full max-w-screen-md flex-col items-center gap-8 bg-background py-12 md:pt-16 max-md:px-8">
				{children}
			</div>
		</div>
	);
};

export { Content };
