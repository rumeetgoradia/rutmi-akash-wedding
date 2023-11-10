"use client";

import Image, { StaticImageData } from "next/image";
import type { Settings } from "react-slick";
import Slider from "react-slick";
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
    <Slider {...settings} className="flex w-full items-center justify-center">
      {/* @ts-ignore */}
      {images.map((image, index) => {
        return (
          <Image
            src={image}
            alt={getAlt(index) + " Slideshow"}
            placeholder="blur"
            sizes="80vw"
            key={image.src}
          />
        );
      })}
    </Slider>
  );
};

export default MomentsSlideshow;
