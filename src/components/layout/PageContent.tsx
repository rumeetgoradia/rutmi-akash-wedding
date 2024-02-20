"use client";

import SignIn from "@/components/layout/SignIn";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/styles";
import { useGuestStore, useHydration } from "@/store/guest";
import Image, { StaticImageData } from "next/image";

const PageContent: React.FC<{
  hero: StaticImageData;
  heroClassName?: string;
  title?: string;
  children: React.ReactNode;
}> = ({ hero, title, children }) => {
  const { guest } = useGuestStore();
  const hydrated = useHydration();

  return (
    <div className="w-full">
      <div className="group relative aspect-video w-full overflow-hidden">
        <Image
          src={hero}
          alt="Rutmi & Akash"
          placeholder="blur"
          className={cn(
            title && "transition-[transform] group-hover:scale-105",
          )}
          priority
          fill
          style={{ objectFit: "cover" }}
        />
        {title && (
          <div className="absolute left-0 top-0 flex h-full w-full select-none items-center justify-center bg-foreground/70 p-6 text-background transition-opacity group-hover:opacity-0 md:opacity-100">
            <h2 className="font-meddon text-3xl !leading-[1.3] [text-wrap:balance] sm:text-5xl">
              {title}
            </h2>
          </div>
        )}
      </div>
      <div className="mx-auto flex w-full max-w-screen-md flex-col items-center gap-8 bg-background pb-12 pt-20 max-md:px-8 md:pt-16">
        {guest ? children : hydrated ? <SignIn /> : <Spinner />}
      </div>
    </div>
  );
};

export { PageContent as Content };