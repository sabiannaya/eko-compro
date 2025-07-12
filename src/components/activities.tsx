"use client";
import Image from "next/image";
import { CalendarIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import CardSlider from "./CardSlider";

type Activity = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  schedule: string;
  tags: string[];
};

interface ActivitiesSectionProps {
  activities: Activity[];
}

export default function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  return (
    <section className="px-5 flex flex-col gap-8 py-12 bg-gradient-to-b from-slate-50 to-slate-100">
      {/* ... (other sections remain the same) ... */}

      {/* Mobile Carousel - Updated for Swiper */}
      <div className="md:hidden px-2">
        <CardSlider 
          data={activities.map(activity => ({
            title: activity.title,
            description: activity.description,
            image: activity.image
          }))}
          imageHeight={200}
          imageWidth={300}
          slidesDesktop={1} // For mobile, we only want 1 slide
        />
      </div>

      {/* ... (rest of your component) ... */}
    </section>
  );
}