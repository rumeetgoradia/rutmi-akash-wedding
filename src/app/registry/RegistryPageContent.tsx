"use client";

import { animation } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Flower from "public/flower.png";
import { FUNDS } from "./content";

const RegistryPageContent = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <motion.div
        className="flex w-full items-center justify-center"
        {...animation(0)}
      >
        <Image src={Flower} alt="flower" className="h-20 w-auto" priority />
      </motion.div>
      <motion.div
        className="flex w-full flex-col gap-4 [text-wrap:balance]"
        {...animation(1)}
      >
        <p className="font-figtree text-center font-light leading-[1.8]">
          Your presence is enough of a gift for us! However, for those of you
          who would like to give some more, we are accepting cash/check gifts or
          donations to one of our two life funds below. We appreciate anything
          you give!
        </p>
        <p className="font-figtree mb-2 text-center font-light leading-[1.8]">
          Please note: <strong className="uppercase">No boxed gifts.</strong>
        </p>
      </motion.div>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {FUNDS.map(({ title, image, url }, index) => (
          <Link
            href={url}
            className="group relative z-20 aspect-square w-full overflow-hidden"
            title={title}
          >
            <motion.div
              className="aspect-square w-full"
              key={`${title}-fund`}
              {...animation(index + 1 + 1)}
            >
              <Image
                src={image}
                alt={title}
                fill
                placeholder="blur"
                className="transition-[filter] group-hover:blur-sm"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute left-0 top-0 z-[30] flex h-full w-full items-center justify-center bg-foreground/60 p-4 transition-opacity group-hover:bg-foreground/80">
                <h3 className="font-noto w-full text-center text-[min(6vw,25px)] font-light uppercase tracking-wide text-background transition-[letter-spacing] group-hover:tracking-widest ">
                  {title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegistryPageContent;
