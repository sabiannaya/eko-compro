"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

interface ImageWithSkeletonProps extends ImageProps {
  containerClassName?: string;
  skeletonClassName?: string;
}

export default function ImageWithSkeleton({
  containerClassName,
  skeletonClassName = "",
  className = "",
  onLoad,
  alt,
  fill,
  width,
  height,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  if (fill) {
    return (
      <div
        className={
          containerClassName ?? "relative w-full h-full overflow-hidden"
        }
      >
        {/* Skeleton fades out once image is ready */}
        {!isLoaded && (
          <div
            className={`absolute inset-0 z-10 animate-pulse bg-slate-200 ${skeletonClassName}`}
          />
        )}
        {/* Image renders normally — no opacity applied */}
        <Image
          {...props}
          fill
          alt={alt || ""}
          className={className}
          onLoad={handleLoad}
        />
      </div>
    );
  }

  // Fixed size mode — skeleton is shown as a positioned overlay, image renders below at full opacity
  return (
    <div
      className={
        containerClassName ?? "relative block overflow-hidden"
      }
      style={{ width, height }}
    >
      {/* Skeleton overlay — removed from DOM (not just hidden) once image loads */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 z-10 animate-pulse bg-slate-200 ${skeletonClassName}`}
        />
      )}
      {/* Image always at full opacity — no transitions applied to it */}
      <Image
        {...props}
        width={width}
        height={height}
        alt={alt || ""}
        className={`block ${className}`}
        onLoad={handleLoad}
      />
    </div>
  );
}
