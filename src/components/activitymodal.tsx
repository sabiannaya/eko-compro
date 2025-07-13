
"use client";

import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline"; 



// Definisi interface untuk props modal
interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: {
    id: string;
    title: string;
    description: string;
    image: string;
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

        {/* Gambar */}
        <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden">
          <Image
            src={activity.image}
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