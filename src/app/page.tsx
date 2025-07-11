import Image from "next/image";
import CardSlider from "@/components/CardSlider";
import TestimonialsFade from "@/components/TestimonialsFade";
import MarqueeText from "@/components/MarqueeText";
import MarqueeImageLeft from "@/components/MarqueeImageLeft";
import Footer from "@/components/Footer";
import {
  programData,
  staffData,
  testimonials,
  teachingMethods,
  facilitiesData,
} from "@/data/dummy";

// Simulate loading for demonstration
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function HomePage() {
  await delay(2500);

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
                    Guidance Learning Mr. Eko merupakan lembaga bimbingan
                    belajar yang telah berdiri sejak tahun 2017, dengan komitmen
                    untuk menjadi mitra belajar terbaik bagi siswa dalam
                    mencapai prestasi akademik dan pembentukan karakter.
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
              Guidance Learning Mr. Eko merupakan lembaga bimbingan belajar yang
              telah berdiri sejak tahun 2017, dengan komitmen untuk menjadi
              mitra belajar terbaik bagi siswa dalam mencapai prestasi akademik
              dan pembentukan karakter.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-16 py-16">
        {/* Programs Section */}
        <section className="px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of programs designed to enhance learning
              and character development.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <CardSlider data={programData} />
          </div>
        </section>

        {/* Teaching Methods Section */}
        <section className="px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How We Teach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven teaching methodologies designed to maximize student
              learning and engagement.
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
                        src={method.icon}
                        alt={method.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Staff Section */}
        <section className="px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated team of experienced educators and mentors.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <CardSlider data={staffData} imageHeight={200} imageWidth={150} />
          </div>
        </section>

        {/* Facilities Section */}
        <section className="px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Learning Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive facilities and resources for every educational
              level.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-12">
            {facilitiesData.map((level, index) => (
              <div
                key={index}
                className={`${
                  index < facilitiesData.length - 1
                    ? "border-b border-gray-200 pb-8"
                    : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      {level.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="space-y-4">
                      {level.facilities.map((facility, facilityIndex) => (
                        <li
                          key={facilityIndex}
                          className="flex flex-row items-center gap-3"
                        >
                          <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                              src={facility.image}
                              alt={`Facility ${facilityIndex + 1}`}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {facility.content}
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
        <section className="px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from our students and their learning journey with
              us.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialsFade testimonials={testimonials} />
          </div>
        </section>

        {/* Marquee Sections */}
        <section className="overflow-hidden">
          <MarqueeText
            text={[
              "SHINE",
              "Smarter Hearted Individuals with Noble Ethics",
              "Brighter Minds with Deeper Values",
            ]}
            interval={5000}
            speed={50}
          />
        </section>

        <section className="overflow-hidden">
          <MarqueeImageLeft
            images={["/Logo.png", "/globe.svg", "/Logo.png", "/globe.svg"]}
            speed={18}
            imageHeight={96}
            imageWidth={128}
          />
        </section>
      </div>

      <Footer />
    </div>
  );
}
