"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import { start } from "repl";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MomentsSlideshow: React.FC<{
  images: StaticImageData[];
  getAlt: (index: number) => string;
}> = ({ images, getAlt }) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    swipe: false,
    swipeToSlide: false,
    fade: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <Slider {...settings} className="max-w-[300px] md:max-w-screen-md">
      {/* @ts-ignore */}
      {images.map((image, index) => {
        return (
          <Image
            src={image}
            alt={getAlt(index) + " Slideshow"}
            placeholder="blur"
            key={image.src}
            className="h-auto max-h-[80vh] w-auto max-w-[80vw]"
          />
        );
      })}
    </Slider>
  );
};

export default MomentsSlideshow;
