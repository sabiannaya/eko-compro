"use client";
import { useState, useEffect, useRef } from "react";

interface MarqueeTextProps {
  text: string[];
  interval?: number;
  speed?: number;
  separator?: string;
}

const MarqueeText = ({ 
  text = ["Sample Text"], 
  interval = 4000, 
  speed = 50,
  separator = " • "
}: MarqueeTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Create seamless infinite text by calculating proper repetitions
  const createInfiniteText = (textContent: string) => {
    if (!containerWidth) return Array(20).fill(textContent).join(separator);
    
    // Create a temporary element to measure text width
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.fontSize = '3.75rem'; // text-6xl equivalent
    tempDiv.style.fontWeight = 'bold';
    tempDiv.style.fontFamily = '"Nunito", sans-serif';
    tempDiv.style.whiteSpace = 'nowrap';
    tempDiv.textContent = textContent + separator;
    document.body.appendChild(tempDiv);
    
    const singleTextWidth = tempDiv.offsetWidth;
    document.body.removeChild(tempDiv);
    
    // Calculate repetitions needed: container width + 150% for smooth animation
    const totalNeededWidth = containerWidth * 2.5;
    const repetitions = Math.ceil(totalNeededWidth / singleTextWidth) + 5;
    
    return Array(repetitions).fill(textContent).join(separator);
  };

  const currentText = text[currentIndex] || "Default Text";
  const infiniteText = createInfiniteText(currentText);

  useEffect(() => {
    if (text.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % text.length);
        setIsTransitioning(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [text.length, interval]);

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={containerRef}
        className="relative h-24 flex items-center"
      >
        <div
          ref={textRef}
          className={`
            whitespace-nowrap text-3xl sm:text-6xl font-bold text-gray-500
            transition-all duration-300 ease-in-out
            ${isTransitioning ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}
          `}
          style={{
            animation: `marquee ${speed}s linear infinite`,
            transform: 'translateX(0)',
          }}
        >
          {infiniteText}
        </div>
        
        {/* Gradient overlays to hide text edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>     
    </div>
  );
};

export default MarqueeText;