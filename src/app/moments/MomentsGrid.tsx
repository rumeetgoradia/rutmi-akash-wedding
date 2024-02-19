"use client";

import { animation } from "@/lib/animation";
import { cn } from "@/lib/styles";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Masonry from "react-smart-masonry";
import MomentsSlideshow from "./MomentsSlideShow";

const breakpoints = { base: 0, sm: 640 };

const MomentsGrid: React.FC<{ images: StaticImageData[] }> = ({ images }) => {
  const [orderedImages, setOrderedImages] = useState<StaticImageData[]>(images);

  // Useless for now
  const [timesOpened, setTimesOpened] = useState<number>(0);

  const getAlt = (index: number) => {
    return `Our Moments - ${index + 1}`;
  };

  return (
    <Masonry
      breakpoints={breakpoints}
      columns={{ base: 1, sm: 2 }}
      gap={{ base: 16, sm: 24 }}
    >
      {images.map((image, index) => {
        return (
          <div className="w-full" key={image.src}>
            <Dialog.Root
              onOpenChange={(open) => {
                if (open) {
                  setOrderedImages([
                    ...images.slice(index),
                    ...images.slice(0, index),
                  ]);
                } else {
                  setTimesOpened((prev) => prev + 1);
                }
              }}
            >
              <Dialog.Trigger asChild>
                <motion.div {...animation(index)}>
                  <Image
                    src={image}
                    alt={getAlt(index)}
                    placeholder="blur"
                    sizes="300px"
                    className="cursor-pointer"
                  />
                </motion.div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay fixed left-0 top-0 z-[9999] h-[100vh] w-[100vw] bg-foreground/80 backdrop-blur-sm" />
                <Dialog.Content
                  onOpenAutoFocus={(event) => event.preventDefault()}
                  className={cn(
                    "DialogContent",
                    "fixed left-1/2 top-1/2 z-[10000] flex w-full max-w-[calc(100vw_-_3rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center outline-none md:max-w-screen-md",
                  )}
                >
                  <MomentsSlideshow images={orderedImages} getAlt={getAlt} />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        );
      })}
    </Masonry>
  );
};

export default MomentsGrid;
