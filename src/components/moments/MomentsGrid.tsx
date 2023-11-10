"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import MomentsSlideshow from "./MomentsSlideShow";
import { Cross2Icon } from "@radix-ui/react-icons";

const MomentsGrid: React.FC<{ images: StaticImageData[] }> = ({ images }) => {
  const [orderedImages, setOrderedImages] = useState<StaticImageData[]>(images);

  const getAlt = (index: number) => {
    return `Our Moments - ${index + 1}`;
  };

  return (
    <div className="w-full columns-1 gap-4 sm:columns-2 md:gap-6 [&>.masonry-img:not(:first-child)]:mt-4 sm:[&>.masonry-img:not(:first-child)]:mt-6">
      {images.map((image, index) => {
        return (
          <div className="masonry-img w-full" key={image.src}>
            <Dialog.Root
              onOpenChange={(open) => {
                if (open) {
                  setOrderedImages([
                    ...images.slice(index),
                    ...images.slice(0, index),
                  ]);
                }
              }}
            >
              <Dialog.Trigger asChild>
                <Image
                  src={image}
                  alt={getAlt(index)}
                  placeholder="blur"
                  sizes="300px"
                  className="cursor-pointer"
                />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay fixed left-0 top-0 z-[9999] h-[100vh] w-[100vw] bg-foreground/50 " />
                <Dialog.Content
                  className={cn(
                    "DialogContent",
                    "fixed left-1/2 top-1/2 z-[10000] flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden p-4 outline-none md:max-w-screen-md",
                  )}
                >
                  <MomentsSlideshow images={orderedImages} getAlt={getAlt} />
                </Dialog.Content>
                {/* <Dialog.Close asChild>
                  <button
                    className="IconButton absolute right-8 top-8 z-[100002] cursor-pointer rounded-full bg-black/50 p-2 text-background outline-none"
                    aria-label="Close"
                  >
                    <Cross2Icon className="h-4 w-4" />
                  </button>
                </Dialog.Close> */}
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        );
      })}
    </div>
  );
};

export default MomentsGrid;
