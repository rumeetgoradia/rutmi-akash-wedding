import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import { IMAGES } from "./content";
import { Content } from "@/components/layout/Content";
import Image from "next/image";

const TITLE = "Our Moments";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Moments() {
  return (
    <Content hero={LandingImage} title={TITLE}>
      <div className="w-full columns-1 gap-4 sm:columns-2 md:gap-6 [&>.masonry-img:not(:first-child)]:mt-4 sm:[&>.masonry-img:not(:first-child)]:mt-6">
        {IMAGES.map((image, index) => {
          return (
            <div className="masonry-img w-full" key={image.src}>
              <Image
                src={image}
                alt={`Our Moments - ${index + 1}`}
                placeholder="blur"
                sizes="300px"
              />
            </div>
          );
        })}
      </div>
    </Content>
  );
}
