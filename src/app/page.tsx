import Image from "next/image";
import CardSlider from "@/components/CardSlider";
import TestimonialsFade from "@/components/TestimonialsFade";
import MarqueeText from "@/components/MarqueeText";
import MarqueeImageLeft from "@/components/MarqueeImageLeft";
import Activities from "@/components/activities";
import Footer from "@/components/Footer";
import { CalendarIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  programData,
  staffData,
  testimonials,
  teachingMethods,
  facilitiesData,
  activitiesData,
} from "@/data/dummy";

// Simulate loading for demonstration
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function HomePage() {
  // await delay(2500);

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

      <div className="flex flex-col gap-8 sm:gap-16">
        {/* Programs Section */}
        <section className="pt-16 flex flex-col gap-2 sm:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Programs</h2>
            <p className="text-gray-600 mx-auto">
              Explore our diverse range of programs designed to enhance learning
              and character development.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <CardSlider data={programData} />
          </div>
        </section>

        {/* Teaching Methods Section */}
        <section className="px-5 flex flex-col gap-6">
          <div className="text-center">
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
        <section className="px-5 flex flex-col gap-2">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600 mx-auto">
              Meet our dedicated team of experienced educators and mentors.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <CardSlider
              data={staffData}
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
              Learning Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive facilities and resources for every educational
              level.
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
                      {level.title}
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
        <section className="w-full px-5 flex flex-col items-center justify-center gap-2">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from our students and their learning journey with
              us.
            </p>
          </div>
          <div className="w-full sm:w-2/3 mx-auto">
            <TestimonialsFade testimonials={testimonials} />
          </div>
        </section>

 <section className="px-5 flex flex-col gap-8 py-12 bg-gradient-to-b from-slate-50 to-slate-100">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-3 relative inline-block">
      Our Activities
      <span className="absolute bottom-0 left-0 w-full h-1 transform scale-x-75 -translate-y-1"></span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
      Engaging activities designed to enhance learning, teamwork, and character
      development.
    </p>
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
    {activitiesData.map((activity) => (
      <div
        key={activity.id}
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white
                   hover:bg-blue-50"
      >
        {/* Perbesar Foto: Mengubah tinggi container gambar */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden"> {/* Tinggi gambar diperbesar */}
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105" // rounded-t-2xl agar sesuai dengan rounded-2xl parent
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div> 

        {/* Kecilkan Kotak Putih Deskripsi (sekarang untuk title & info) */}
        <div className="p-4 sm:p-5 flex flex-col gap-1"> {/* Padding dikurangi, gap dikurangi */}
          <div className="flex items-center gap-2 mb-1"> {/* mb dikurangi */}
            <CalendarIcon className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-500">{activity.schedule}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors"> {/* Menghilangkan mb-3 */}
            {activity.title}
          </h3>

          {/* Deskripsi sudah dihilangkan */}
        </div>
      </div>
    ))}
  </div>

  {/* Mobile Carousel */}
  <div className="md:hidden px-2">
    <CardSlider
      data={activitiesData.map(a => ({
        title: a.title,
        image: a.image
      }))}
      // imageHeight dan imageWidth tidak perlu diset di sini karena sudah diatur di CardSlider
      // slidesDesktop={1} // Ini tidak diperlukan jika CardSlider sudah memiliki logic responsive sendiri
    />
  </div>

  {/* CTA Button */}
  {/* <div className="text-center mt-6">
    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
      View All Activities
      <ArrowRightIcon className="w-5 h-5 inline ml-2" />
    </button>
  </div> */}
</section>

        {/* Marquee Sections */}
        {/* <section className="overflow-hidden">
          <MarqueeText
            text={[
              "SHINE",
              "Smarter Hearted Individuals with Noble Ethics",
              "Brighter Minds with Deeper Values",
            ]}
            interval={5000}
            speed={36}
          />
        </section> */}

        <section className="overflow-hidden">
          <MarqueeImageLeft
            images={["/Logo.png", "/globe.svg", "/Logo.png", "/globe.svg"]}
            speed={36}
            imageHeight={96}
            imageWidth={128}
          />
        </section>
      </div>

      <Footer />
    </div>
  );
}
