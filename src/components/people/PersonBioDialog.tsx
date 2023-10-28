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
        <Dialog.Content className="DialogContent fixed left-1/2 top-1/2 z-[10000] flex w-[90vw] max-w-screen-sm -translate-x-1/2 -translate-y-1/2 flex-col gap-6 bg-background p-6 shadow-md shadow-black/50">
          <div className="group relative aspect-square w-full md:aspect-auto md:h-[30vh] md:max-h-[310px]">
            <Image
              src={image}
              alt={`${name} - ${role}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              placeholder="blur"
            />
            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-foreground/90 p-6 text-background transition-opacity">
              <h3
                className={cn(
                  "text-center text-2xl !leading-[1.2] md:text-3xl ",
                  meddon.className,
                )}
              >
                {name}
              </h3>
              <h4
                className={cn(
                  "text-md mt-2 font-light uppercase tracking-widest md:text-lg",
                  notoSerif.className,
                )}
              >
                {role}
              </h4>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3">
            {bio.map((bioPar) => (
              <p
                key={`our-story-${name}-${bioPar}`}
                className={cn(
                  "md:text-md text-sm leading-[1.4]",
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
          {/* <Dialog.Title
            className={cn("DialogTitle", notoSerif.className, "font-light")}
          >
            <>
              <h3 className="text-3xl">{name}</h3>
              <h4 className="text-xl text-foreground/50 ">{role}</h4>
            </>
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
