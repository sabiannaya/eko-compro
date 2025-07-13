// components/ActivityModal.tsx
"use client";

import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, EffectFade } from "swiper/modules"; // Import necessary Swiper modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Optional: if you use EffectFade


// Definisi interface untuk props modal
interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: {
    id: string;
    title: string;
    description: string;
    // --- THIS IS IMPORTANT ---
    // Ensure this matches your Activity type from dummy.tsx
    // It should be 'images' (plural) string array if that's what dummy.tsx has
    // If your dummy.tsx Activity type still has 'image?' (singular), adjust here too.
    // Based on our last discussion, it should be 'images: string[]'
    images: string[]; // <-- Make sure this is 'images' (plural) if that's what's coming from dummy.tsx
    thumbnail: string;
    schedule: string;
    category: string;
    tags: string[];
  } | null;
}

const ActivityModal = ({ isOpen, onClose, activity }: ActivityModalProps) => {
  if (!isOpen || !activity) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors z-10"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* --- Gambar Gallery Menggunakan Swiper --- */}
        {/* Render Swiper only if there are images available */}
        {activity.images && activity.images.length > 0 && (
          <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden rounded-t-lg">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true} // Enable navigation arrows
              pagination={{ clickable: true }} // Enable pagination dots
              effect={"fade"} // Optional: add a fade effect
              modules={[Navigation, Pagination, EffectFade]} // Include modules
              className="w-full h-full" // Swiper takes full height/width of its container
            >
              {activity.images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={imgSrc}
                    alt={`${activity.title} image ${index + 1}`}
                    fill // Use fill for responsive images in SwiperSlide
                    style={{ objectFit: 'cover' }} // Cover the area
                    className="rounded-t-lg" // Rounded top corners
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Overlay for text, etc. can go here if you want it on top of the carousel */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium z-10"> {/* Added z-10 */}
               {activity.category}
             </span>
          </div>
        )}
        {/* Fallback if no 'images' array exists (though your data implies it always will) */}
        {!activity.images || activity.images.length === 0 && activity.thumbnail && (
            <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden rounded-t-lg">
                <Image
                    src={activity.thumbnail}
                    alt={activity.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium">
                   {activity.category}
                 </span>
            </div>
        )}


        {/* Konten Detail */}
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {activity.title}
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
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            {activity.description}
          </p>

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