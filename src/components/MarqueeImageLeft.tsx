"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface MarqueeImageProps {
  images: string[];
  speed?: number;
  imageWidth?: number;
  imageHeight?: number;
  spacing?: number;
  alt?: string;
}

const MarqueeImage = ({
  images = ["https://via.placeholder.com/200x100"],
  speed = 50,
  imageWidth = 200,
  imageHeight = 100,
  spacing = 32,
  alt = "Marquee image",
}: MarqueeImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Create seamless infinite images by repeating the entire image array
  const createInfiniteImages = () => {
    if (!containerWidth) return [...images, ...images, ...images];

    // Calculate total width of all images including spacing
    const totalImagesWidth = images.length * (imageWidth + spacing);

    // Calculate repetitions needed: container width + 150% for smooth animation
    const totalNeededWidth = containerWidth * 2.5;
    const repetitions = Math.ceil(totalNeededWidth / totalImagesWidth) + 2;

    const result = [];
    for (let i = 0; i < repetitions; i++) {
      result.push(...images);
    }
    return result;
  };

  const infiniteImages = createInfiniteImages();

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={containerRef}
        className="relative flex items-center"
        style={{ height: imageHeight + 32 }} // Add some padding
      >
        <div
          className="flex items-center"
          style={{
            animation: `marquee ${speed}s linear infinite`,
            transform: "translateX(0)",
          }}
        >
          {infiniteImages.map((imageSrc, index) => (
            <Image
              key={index}
              src={imageSrc}
              alt={`${alt} ${index + 1}`}
              width={imageWidth}
              height={imageHeight}
              className="flex-shrink-0 object-cover rounded-lg"
              style={{
                marginRight: spacing,
              }}
            />
          ))}
        </div>

        {/* Gradient overlays to hide image edges */}
        <div
          className={`absolute left-0 top-0 w-48 bg-gradient-to-r from-slate-100 to-transparent pointer-events-none z-10`}
          style={{ height: `${imageHeight + 32}px` }}
        ></div>
        <div
          className="absolute right-0 top-0 w-48 bg-gradient-to-l from-slate-100 to-transparent pointer-events-none z-10"
          style={{ height: imageHeight + 32, minHeight: imageHeight + 32 }}
        ></div>
      </div>
    </div>
  );
};

export default MarqueeImage;
