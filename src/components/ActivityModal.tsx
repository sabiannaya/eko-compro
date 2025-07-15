"use client";

import { Activity} from "@/utils/TypeContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Definisi interface untuk props modal
interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: Activity | null;
  currentLanguage?: string;
}

const ActivityModal = ({
  isOpen,
  onClose,
  activity,
  currentLanguage = "id",
}: ActivityModalProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isOpen || !activity) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className="relative bg-white rounded-lg shadow-xl w-full sm:max-w-[70vw] max-h-[80vh] overflow-hidden z-10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors z-20"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Image Section - Fixed height, always visible */}
        {activity.images && activity.images.length > 0 && (
          <div className="relative w-full h-80 sm:h-[50vh] flex-shrink-0 overflow-hidden rounded-t-lg">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              effect={"fade"}
              modules={[Navigation, Pagination, EffectFade]}
              className="w-full h-full"
            >
              {activity.images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={imgSrc}
                    alt={`${activity.title[currentLanguage]} image ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium z-10">
              {activity.category}
            </span>
          </div>
        )}

        {/* Fallback image */}
        {!activity.images ||
          (activity.images.length === 0 && activity.thumbnail && (
            <div className="relative w-full h-80 sm:h-[40vh] flex-shrink-0 overflow-hidden rounded-t-lg">
              <Image
                src={activity.thumbnail}
                alt={activity.title[currentLanguage]}
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium">
                {activity.category}
              </span>
            </div>
          ))}

        {/* Content Section - Scrollable */}
        <div className="flex-1 overflow-y-scroll p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {activity.title[currentLanguage]}
          </h3>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5"
              />
            </svg>
            <span className="text-sm">{activity.schedule}</span>
          </div>

          {/* Description with Read More functionality */}
          <div className="mb-6">
            <p
              className={`text-gray-700 text-base text-justify leading-relaxed ${
                !isExpanded ? "line-clamp-2" : ""
              }`}
            >
              {activity.description[currentLanguage]}
            </p>

            {/* Check if description is long enough to need truncation */}
            {(activity.description[currentLanguage]?.split(" ").length ?? 0) >
              20 && (
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors duration-200 cursor-pointer"
              >
                {isExpanded
                  ? currentLanguage === "id"
                    ? "Baca sedikit..."
                    : "Read less..."
                  : currentLanguage === "id"
                  ? "Baca selengkapnya..."
                  : "Read more..."}
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {activity.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
