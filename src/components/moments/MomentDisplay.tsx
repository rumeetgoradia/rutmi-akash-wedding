"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image, { StaticImageData } from "next/image";

const MomentDisplay: React.FC<{ img: StaticImageData; alt: string }> = ({
  img,
  alt,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Image
          src={img}
          alt={alt}
          placeholder="blur"
          sizes="300px"
          className="sm:cursor-pointer"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed left-0 top-0 z-[9999] hidden h-[100vh] w-[100vw] bg-foreground/50 sm:block" />
        <Dialog.Content className="DialogContent fixed left-1/2 top-1/2 z-[10000] hidden max-h-[90vh] w-[90vw] max-w-screen-md -translate-x-1/2 -translate-y-1/2 overflow-auto p-6 outline-none  sm:block">
          <Image src={img} alt={alt} placeholder="blur" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MomentDisplay;
