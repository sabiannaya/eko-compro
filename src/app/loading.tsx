import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full bg-slate-100 flex flex-col items-center relative overflow-hidden">
      {/* Central Breathing Logo Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-md">
        <Image
          src="/Logo.png"
          alt="Loading Logo"
          width={200}
          height={200}
          className="animate-pulse drop-shadow-md"
          priority
        />
      </div>

      {/* Hero Skeleton */}
      <div className="w-full h-[50rem] bg-slate-200 animate-pulse relative">
        <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center px-5 space-y-6">
          <div className="h-12 w-3/4 bg-slate-300 rounded-lg" />
          <div className="h-6 w-1/2 bg-slate-300 rounded-lg" />
          <div className="h-10 w-40 bg-slate-300 rounded-full" />
        </div>
      </div>

      {/* Content Cards Skeleton */}
      <div className="max-w-6xl w-full mx-auto px-6 py-12 space-y-12">
        <div className="space-y-4 text-center">
          <div className="h-8 w-48 bg-slate-200 rounded-md mx-auto animate-pulse" />
          <div className="h-4 w-96 bg-slate-200 rounded-md mx-auto animate-pulse" />
        </div>

        {/* Card Row Skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm space-y-4 animate-pulse"
            >
              <div className="w-full h-48 bg-slate-200 rounded-lg" />
              <div className="h-6 w-3/4 bg-slate-200 rounded" />
              <div className="h-4 w-1/2 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
