"use client";

import { Achievement } from "@/utils/TypeContext";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface AchievementsSliderProps {
  data: Achievement[];
  currentLanguage?: string;
}

export default function AchievementsSlider({
  data,
  currentLanguage = "id",
}: AchievementsSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = data.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating || index === current) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 320);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % total, "next");
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total, "prev");
  }, [current, total, goTo]);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setTimeout(next, 4000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isHovered, next]);

  const achievement = data[current];

  return (
    <div
      className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Grid: photo left | content right */}
      <div className="grid grid-cols-1 sm:grid-cols-2">

        {/* ── Left: Photo panel ── */}
        <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden p-4 sm:p-6 bg-slate-50/50">
          {data.map((item, index) => {
            const isActive = index === current;
            return (
              <div
                key={item.id || index}
                className={`absolute inset-4 sm:inset-6 rounded-xl overflow-hidden transition-all duration-300 ease-out ${isActive
                  ? "opacity-100 scale-100 pointer-events-auto z-10"
                  : "opacity-0 scale-95 pointer-events-none z-0"
                  }`}
              >
                <Image
                  src={item.image}
                  alt={item.title[currentLanguage] || item.title.id}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index === 0}
                />
                {/* edge vignette */}
                <div className="absolute inset-0 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* ── Right: Text + controls ── */}
        <div className="flex flex-col justify-between gap-4 p-6 sm:p-8 bg-white">
          {/* Top: label + title + desc */}
          <div
            key={`text-${current}`}
            className="flex flex-col gap-3"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? direction === "next"
                  ? "translateX(10px)"
                  : "translateX(-10px)"
                : "translateX(0)",
              transition: "opacity 0.32s ease, transform 0.32s ease",
            }}
          >
            <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              {currentLanguage === "id" ? "Dokumentasi" : "Milestone"}
            </span>
            <h3 className="text-xl font-bold text-slate-900 leading-snug sm:text-2xl">
              {achievement.title[currentLanguage]}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              {achievement.description[currentLanguage]}
            </p>
          </div>

          {/* Bottom: chevrons + dots */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex cursor-pointer items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all duration-200 active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "next" : "prev")}
                  aria-label={`Slide ${i + 1}`}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${i === current
                    ? "w-6 h-2 bg-slate-800"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next"
              className="flex cursor-pointer items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all duration-200 active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
