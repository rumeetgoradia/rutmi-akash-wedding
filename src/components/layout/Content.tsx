import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

const Content: React.FC<{
  hero: StaticImageData;
  title?: string;
  children: React.ReactNode;
}> = ({ hero, title, children }) => {
  return (
    <div className="w-full">
      <div className="group relative aspect-video w-full overflow-hidden">
        <Image
          src={hero}
          alt="Rutmi & Akash"
          placeholder="blur"
          className={cn(title && "transition-[filter] md:group-hover:blur-sm")}
          priority
          fill
          style={{ objectFit: "cover" }}
        />
        {title && (
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-foreground/70 p-6 text-background transition-opacity group-hover:opacity-100 md:opacity-80">
            <h2 className="font-meddon text-4xl !leading-[1.3] lg:text-6xl">
              {title}
            </h2>
          </div>
        )}
      </div>
      <div className="mx-auto flex w-full max-w-screen-md flex-col items-center gap-8 bg-background py-12 max-md:px-8 md:pt-16">
        {children}
      </div>
    </div>
  );
};

export { Content };
