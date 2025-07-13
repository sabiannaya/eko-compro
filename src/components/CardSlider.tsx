"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { EffectCoverflow } from "swiper/modules";

interface CardData {
  id: string;
  name?: string;
  title: string;
  description: string;
  image: string;
  position?: string;
  schedule?: string;
  category?: string;
  tags?: string[];
}



interface CardSliderData  <T extends CardData = CardData> {
  data: T[];
  imageHeight?: number;
  imageWidth?: number;
  slidesDesktop?: number;
  onCardClick?: (item: T) => void;
}

const CardSlider = <T extends CardData> ({
  data = [],
  imageHeight = 300,
  imageWidth = 200,
  slidesDesktop = 3,
  onCardClick,
}: CardSliderData<T>) => {
  const cards = data.map((item, index) => (
    <SwiperSlide key={item.id || index} className="overflow-visible">
      <div className="overflow-visible p-4">
        <div
          className="flex flex-col gap-5 p-5 items-center justify-center bg-white rounded-lg shadow-sm
          transition-all duration-300 hover:scale-105 hover:z-10 active:scale-105
          origin-center relative group cursor-pointer"
          onClick={() => onCardClick && onCardClick(item)}
        >
          <Image
            src={item.image}
            alt={item.title || item.name || "Card Image"}
            width={imageWidth}
            height={imageHeight}
            className="rounded-lg object-cover"
          />

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center line-clamp-2">
              {item.title || item.name || "Default Title"}
            </h3>
            <p className="text-gray-600 text-sm text-center line-clamp-3">
              {item.description ||
                item.position ||
                "Default description for the card."}
            </p>
            {item.schedule && (
              <p className="text-sm text-gray-500 mt-1">{item.schedule}</p>
            )}
            {item.category && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs mt-2">
                {item.category}
              </span>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map((tag: string, tagIdx: number) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="overflow-visible ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: slidesDesktop || 3,
            spaceBetween: 20,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="cardSlider "
        autoHeight={true}
      >
        {cards}
        <div className="absolute left-0 top-0 w-4 sm:w-24 h-full bg-gradient-to-r from-slate-100 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-4 sm:w-24 h-full bg-gradient-to-l from-slate-100 to-transparent pointer-events-none z-10"></div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
