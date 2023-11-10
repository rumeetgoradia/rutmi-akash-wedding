"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import MomentsSlideshow from "./MomentsSlideShow";

const MomentsGrid: React.FC<{ images: StaticImageData[] }> = ({ images }) => {
  const [orderedImages, setOrderedImages] = useState<StaticImageData[]>(images);
  const [open, setOpen] = useState<boolean>(false);

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
                    "fixed left-1/2 top-1/2 z-[10000] -translate-x-1/2 -translate-y-1/2 overflow-hidden p-4 outline-none",
                  )}
                >
                  <div>
                    <MomentsSlideshow images={orderedImages} getAlt={getAlt} />
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        );
      })}
    </div>
  );
};

export default MomentsGrid;
