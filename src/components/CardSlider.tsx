"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

interface CardSliderData {
  data: {
    title?: string;
    description?: string;
    image: string;
  }[];
  imageHeight?: number;
  imageWidth?: number;
}

const CardSlider = ({
  data = [],
  imageHeight = 300,
  imageWidth = 200,
}: CardSliderData) => {
  const cards = data.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-sm 
    transition-transform duration-300 hover:scale-105 active:scale-105">
        <Image
          src={item.image}
          alt={item.title || "Card Image"}
          width={imageWidth || 200}
          height={imageHeight || 300}
          className="rounded-lg mb-4"
        />
        <div className="h-32 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center line-clamp-2">
            {item.title || "Default Title"}
          </h3>
          <p className="text-gray-600 text-sm text-center line-clamp-3">
            {item.description || "Default description for the card."}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -25,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="cardSlider relative"
      >
        {cards}
        {/* Gradient overlays to hide text edges */}
        <div className="absolute left-0 top-0 w-4 sm:w-32 h-full bg-gradient-to-r from-slate-100 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-4 sm:w-32 h-full bg-gradient-to-l from-slate-100 to-transparent pointer-events-none z-10"></div>
      </Swiper>
    </>
  );
};

export default CardSlider;
