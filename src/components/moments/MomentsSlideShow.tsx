"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MomentsSlideshow: React.FC<{
  images: StaticImageData[];
  getAlt: (index: number) => string;
}> = ({ images, getAlt }) => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        sliderRef.current?.slickPrev();
      } else if (e.key === "ArrowRight") {
        sliderRef.current?.slickNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    swipe: true,
    swipeToSlide: false,
    fade: true,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <div className="relative z-[1000000] w-full">
      <button
        onClick={() => {
          sliderRef.current?.slickPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-0 top-1/2 z-[1000001] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground p-2 text-sm text-background max-sm:hidden"
      >
        <ArrowLeft />
      </button>
      <Slider
        {...settings}
        ref={sliderRef}
        className="flex w-full items-center justify-center"
      >
        {images.map((image, index) => {
          return (
            <Image
              src={image}
              alt={getAlt(index) + " Slideshow"}
              placeholder="blur"
              sizes="60vw"
              key={image.src}
            />
          );
        })}
      </Slider>
      <button
        onClick={() => {
          sliderRef.current?.slickNext();
        }}
        aria-label="Next photo"
        className="absolute right-0 top-1/2 z-[1000001] -translate-y-1/2 translate-x-1/2 rounded-full bg-foreground p-2 text-sm text-background max-sm:hidden"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default MomentsSlideshow;
