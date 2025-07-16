"use client";

import CardSlider from "@/components/CardSlider";
import TestimonialsFade from "@/components/TestimonialsFade";
import Image from "next/image";
import ActivityModal from "@/components/ActivityModal";
import Footer from "@/components/Footer";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Activity } from "@/utils/TypeContext";
import { useLanguage } from "@/utils/LanguageContext";

import {
  activitiesData,
  facilitiesData,
  programData,
  teachingMethods,
  testimonials,
  staffData,
} from "@/data/dummy";

import {
  heroContent,
  programs as programSection,
  methods as methodsSection,
  facilities as facilitiesSection,
  staffs as staffSection,
  testimonials as testimonialsSection,
  activities as activitiesSection,
} from "@/data/sections";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const openModal = (activity: Activity) => {
    setSelectedActivity(activity);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedActivity(null);
  };

  return (
    <div className="bg-slate-100">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full h-[20rem] sm:h-[50rem] mt-5">
          <div className="relative w-full h-full bg-[url('/Banner.png')] bg-cover bg-center">
            <div className="hidden sm:block absolute inset-0 bg-black/60" />
            <div className="hidden sm:flex h-full flex-col items-center justify-center text-white z-10 relative">
              <div className="text-center max-w-4xl px-5">
                <h1 className="text-3xl 2xl:text-5xl font-bold mb-6">
                  MR. EKO Guidance Learning
                </h1>
                <div className="pt-6 border-t-2 border-white">
                  <h2 className="text-xl 2xl:text-2xl font-semibold mb-3">
                    SHINE:{" "}
                    <span>
                      Smarter – Hearted – Individuals with – Noble – Ethics
                    </span>
                  </h2>
                  <h3 className="text-lg font-medium mb-5">
                    Brighter Minds with Deeper Values
                  </h3>
                  <p className="leading-relaxed font-light max-w-2xl mx-auto">
                    {heroContent.description[currentLanguage]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Content */}
        <div className="block sm:hidden px-5 py-8 bg-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              BRIGHTER MINDS WITH DEEPER VALUES
            </h1>
            <p className="text-gray-700 leading-relaxed">
              {heroContent.description[currentLanguage]}
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-8 sm:gap-16">
        {/* Programs Section */}
        <section className="pt-16 flex flex-col gap-2 sm:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {programSection.title[currentLanguage]}
            </h2>
            <p className="text-gray-600 mx-auto">
              {programSection.description[currentLanguage]}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <CardSlider data={programData} currentLanguage={currentLanguage} />
          </div>
        </section>

        {/* Teaching Methods Section */}
        <section className="px-5 flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {methodsSection.title[currentLanguage]}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {methodsSection.description[currentLanguage]}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingMethods.map((method, index) => {
              const isLast = index === teachingMethods.length - 1;
              const isAloneInLastRow =
                isLast && teachingMethods.length % 3 === 1;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                    isAloneInLastRow
                      ? "lg:col-span-full lg:max-w-md lg:mx-auto"
                      : ""
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 mb-4">
                      <Image
                        src={method.thumbnail}
                        alt={method.title[currentLanguage]}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">
                      {method.title[currentLanguage]}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {method.description[currentLanguage]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Staff Section */}
        <section className="px-5 flex flex-col gap-2">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {staffSection.title[currentLanguage]}
            </h2>
            <p className="text-gray-600 mx-auto">
              {staffSection.description[currentLanguage]}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <CardSlider
              data={staffData}
              currentLanguage={currentLanguage}
              imageHeight={200}
              imageWidth={150}
              slidesDesktop={3}
            />
          </div>
        </section>

        {/* Facilities Section */}
        <section className="px-5 flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {facilitiesSection.title[currentLanguage]}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {facilitiesSection.description[currentLanguage]}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg px-5">
            {facilitiesData.map((level, index) => (
              <div
                key={index}
                className={`p-5 ${
                  index < facilitiesData.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 ">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {level.title[currentLanguage]}
                    </h3>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="">
                      {level.facilities.map((facility, facilityIndex) => (
                        <li
                          key={facilityIndex}
                          className="flex flex-row items-center gap-3"
                        >
                          <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                              src={facility.thumbnail}
                              alt={`Facility ${facilityIndex + 1}`}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {facility.description[currentLanguage]}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full px-5 flex flex-col items-center justify-center gap-2">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {testimonialsSection.title[currentLanguage]}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {testimonialsSection.description[currentLanguage]}
            </p>
          </div>
          <div className="w-full sm:w-2/3 mx-auto">
            <TestimonialsFade testimonials={testimonials} />
          </div>
        </section>

        {/* Activities Section */}
        <section className="px-5 flex flex-col gap-8 pb-8 bg-gradient-to-b ">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-3 relative inline-block">
              {activitiesSection.title[currentLanguage]}

              <span className="absolute bottom-0 left-0 w-full h-1 transform scale-x-75 -translate-y-1"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {activitiesSection.description[currentLanguage]}
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white
                            hover:bg-blue-50 cursor-pointer"
                onClick={() => openModal(activity)}
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={activity.images[0]}
                    alt={activity.title[currentLanguage]}
                    fill
                    className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium">
                    {activity.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CalendarIcon className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-500">
                      {activity.schedule}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {activity.title[currentLanguage]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer currentLanguage={currentLanguage} />
      <ActivityModal
        isOpen={showModal}
        onClose={closeModal}
        activity={selectedActivity}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}
