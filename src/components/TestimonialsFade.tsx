"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface TestimonialsFadeProps {
  testimonials: {
    name: string;
    role: string;
    image: string;
    text: string;
  }[];
}

const TestimonialsFade = ({ testimonials = [] }: TestimonialsFadeProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <Swiper
          spaceBetween={0}
          effect="fade"
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          className="testimonialsFade"
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          loop={true}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={testimonial.name + idx}>
              <div className="relative bg-white">
                {/* Mobile Layout (< lg) */}
                <div className="flex flex-col lg:hidden h-[40rem] p-2">
                  {/* Image Section */}
                    <div className="relative h-80 w-full bg-gradient-to-br from-yellow-50 to-yellow-100 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-48 h-48 rounded-md overflow-hidden shadow-2xl ring-4 ring-yellow-200">
                      <Image
                        fill
                        src={testimonial.image}
                        alt={`${testimonial.name}'s photo`}
                        className="w-full h-full object-scale-down"
                      />
                      </div>
                    </div>
                    </div>

                  {/* Content Section */}
                  <div className="flex-1 px-5 pb-5 text-center flex flex-col justify-between bg-white">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="h-44 flex items-center justify-center">
                        <blockquote className="text-gray-700 text-base leading-relaxed italic overflow-y-auto max-h-full px-2 kecil">
                          &quot;{testimonial.text}&quot;
                        </blockquote>
                      </div>
                    </div>
                    <div className="border-t pt-4 flex-shrink-0 bg-white">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (>= lg) */}
                <div className="hidden lg:flex h-[32rem] bg-white">
                  {/* Image Section */}
                  <div className="relative w-2/5 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center p-8 flex-shrink-0">
                    <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white transform hover:scale-105 transition-transform duration-300">
                      <Image
                        fill
                        src={testimonial.image}
                        alt={`${testimonial.name}'s photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-12 flex flex-col justify-between bg-white">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="h-72 flex items-center justify-center w-full pb-1">
                        <blockquote className="text-gray-700 text-xl leading-relaxed italic overflow-y-auto max-h-full gede">
                          &quot;{testimonial.text}&quot;
                        </blockquote>
                      </div>
                    </div>
                    <div className="border-t pt-6 flex-shrink-0 bg-white">
                      <h4 className="font-semibold text-gray-900 text-xl">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 mt-2">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsFade;
