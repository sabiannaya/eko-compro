// components/ActivitiesSection.tsx
"use client";
import CardSlider from "./CardSlider";
import { Activity } from "@/data/dummy"; // Ensure this import is correct

interface ActivitiesSectionProps {
  activities: Activity[];
  onCardClick?: (activity: Activity) => void; // This prop receives the click event
}

export default function ActivitiesSection({ activities, onCardClick }: ActivitiesSectionProps) {
  return (
    <section className="px-5 flex flex-col gap-8 py-12 bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Mobile Carousel - Updated for Swiper */}
      <div className="md:hidden px-2">
        <CardSlider
          data={activities.map(activity => ({
            id: activity.id,
            title: activity.title,
            description: activity.description,
            thumbnail: activity.thumbnail,
            images: activity.images,
            schedule: activity.schedule,
            category: activity.category,
            tags: activity.tags
          }))}
          imageHeight={200}
          imageWidth={300}
          slidesDesktop={1}
          // Pass the onCardClick handler down.
          // The type inference should work here now that CardData is flexible.
          onCardClick={onCardClick}
        />
      </div>
    </section>
  );
}