// components/ActivitiesSection.tsx
"use client";
import { Activity } from "@/data/dummy";
import CardSlider from "./CardSlider";

interface ActivitiesSectionProps {
  activities: Activity[];
  onCardClick?: (activity: Activity) => void;
  currentLanguage?: string;
}

export default function ActivitiesSection({
  activities,
  currentLanguage = "id",
}: ActivitiesSectionProps) {
  return (
    <section className="px-5 flex flex-col gap-8 py-12 bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Mobile Carousel - Updated for Swiper */}
      <div className="md:hidden px-2">
        <CardSlider data={activities} currentLanguage={currentLanguage} />
      </div>
    </section>
  );
}
