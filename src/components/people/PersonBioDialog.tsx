"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { type PersonWithBio } from ".";
import { Cross2Icon } from "@radix-ui/react-icons";
import { PersonDisplay } from "./PersonDisplay";
import { cn } from "@/lib/utils";
import { figtree, meddon, notoSerif } from "@/app/fonts";
import Image from "next/image";

export const PersonBioDialog: React.FC<PersonWithBio> = ({
  name,
  bio,
  image,
  role,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="w-full cursor-pointer">
          <PersonDisplay name={name} image={image} role={role} />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed left-0 top-0 z-[9999] h-[100vh] w-[100vw] bg-foreground/50" />
        <Dialog.Content className="DialogContent fixed left-1/2 top-1/2 z-[10000] max-h-[80vh] w-[90vw] max-w-screen-sm -translate-x-1/2 -translate-y-1/2 overflow-auto shadow-md shadow-black/50 sm:w-[400px]">
          <div className="relative flex w-full flex-col gap-4 bg-background p-6">
            <div className="flex w-full flex-col items-center">
              <div className="relative aspect-square w-full">
                <Image
                  src={image}
                  alt={`${name} - ${role}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  placeholder="blur"
                />
              </div>
              <div
                className={cn(
                  "font-noto mt-2 text-center text-xl",
                  notoSerif.className,
                )}
              >
                {name}
              </div>
              <div
                className={cn(
                  "font-figtree text-md text-center font-light",
                  figtree.className,
                )}
              >
                {role}
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              {bio.map((bioPar) => (
                <p
                  key={`our-story-${name}-${bioPar}`}
                  className={cn(
                    "sm:text-md font-figtree text-sm leading-[1.4]",
                    figtree.className,
                  )}
                >
                  {bioPar}
                </p>
              ))}
            </div>
            <Dialog.Close asChild>
              <button
                className="IconButton absolute right-8 top-8 rounded-full bg-black/50 p-2 text-background"
                aria-label="Close"
              >
                <Cross2Icon className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
