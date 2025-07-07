import React from "react";
import MarqueeText from "@/components/MarqueeText";
import CardSlider from "@/components/CardSlider";
import Accordion from "@/components/Accordion";
import MarqueeImageLeft from "@/components/MarqueeImageLeft";
import TestimonialsFade from "@/components/TestimonialsFade";
import Footer from "@/components/Footer";

export default function HomePage() {
  const programData = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      image: "/Logo.png",
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      image: "/Logo.png",
    },
    {
      title: "Card 3",
      description: "Description for Card 3",
      image: "/Logo.png",
    },
    {
      title: "Card 4",
      description: "Description for Card 3",
      image: "/Logo.png",
    },
    {
      title: "Card 5",
      description: "Description for Card 3",
      image: "/Logo.png",
    },
    {
      title: "Card 6",
      description: "Description for Card 3",
      image: "/Logo.png",
    },
    {
      title: "Card 7",
      description: "Description for Card 3",
      image: "/Logo.png",
    },
  ];

  const staffData = [
    {
      title: "Eko Sulaksono, S.Pd.",
      description: "Founder & Head Tutor",
      image: "/Logo.png",
    },
    {
      title: "Dra. Mery Mariam",
      description: "Co-Founder & Senior Tutor",
      image: "/Logo.png",
    },
    {
      title: "Haura Labibah Salsabil Sulaksono, S.Kep., M.Biotek",
      description: "Tutor",
      image: "/Logo.png",
    },
    {
      title: "Jinan Kautsar Syifa Sulaksono, S.K.M",
      description: "Tutor",
      image: "/Logo.png",
    },
    {
      title: "Muhammad Fauzi Zaydan Rizqullah Sulaksono",
      description: "Tutor",
      image: "/Logo.png",
    },
    {
      title: "Rizky Muhammad Mufti Firdaus Sulaksono",
      description: "Tutor",
      image: "/Logo.png",
    },
  ];

  const testimonials = [
    {
      name: "Videl",
      role: "Student",
      image: "/images2.jpg",
      text: "Seneng dan seru belajar di GL, awal awal tegang belajar di sana karena belum kenal lebih deket dengan para tutor di GL tapi setelah lama belajar di sana jadi seruu belajar jadi kerasa bentar banget karena serius tapi asik. Jadi belajar kerasanya seneng, mood bawaannyaa pokonya asik bangett di GL.. Makasih ya para tutor GL udah mau sabar dan mau di tanya tanyaa terus. Makasih juga gapernah bosen untuk ngingetin di catet yaa, di ulangin lagi yaa, makasih yaaa",
    },
    {
      name: "Haura",
      role: "Student",
      image: "/images.jpeg",
      text: "Awal masuk jujur ngerasa takut, terutama kalau offline, tapi lama kelamaan biasa aja sih karena ada banyak temen jugaa di GL, terus jadi selangkah lebih tau dan ngerti. Kayak mtk jadi lebih gampang karena uda belajar di GL, jadi pas di sekolah kerasa gampang pas belajar/mau ulangan, intinya kebantu banget sih, di GL tuh. Kadang suka mumet karena TO nya banyak, apalagi kalau ditumpuk, huhuu nyesel deh. Tapi overall, aku seneng banget sih, bisa jadi bagian dari GL, apalagi kalo belajar sama Kak Haura. Makasih yaa buat semua yang udah ngajarin di GL.",
    },
    {
      name: "Ghaida",
      role: "Teacher",
      image: "/images2.jpg",
      text: "Sangat menyenangkan les di GL, belajar lebih cepat ngerti. Terlihat nyantai tp serius.. belajar kalau belum ngerti itu di ajarin sampai ngerti.. jadi matematika yang tadinya paling gak suka jadi suka banget. kalau ada ulangan jadi tenang. ",
    },
    {
      name: "Selma",
      role: "Alumni",
      image: "/images.jpeg",
      text: "Pertama kali aku di GL aku jadi mood belajar, belajar jadi seru, nilai nya juga meningkat. Pokonya belajar jadi asik, tutor-tutornya seru, asik, dan baikk. Makasih ka Haura, ka Syifa, bu Merry, pa Eko udah sabar ajarin aku, makasih  juga ka mau cerita pengalaman kaka yang bikin aku termotivasi, makasih ya kaa",
    },
    {
      name: "Asyraf",
      role: "Student",
      image: "/images2.jpg",
      text: "Bagus, materinya juga jadi lebih cepat paham karena di review terus sama materinya juga lebih cepat dari yang sekolah.",
    },
    {
      name: "Alif",
      role: "Student",
      image: "/images.jpeg",
      text: "Awal ikut GL seru dan ngebantu banget. Karena TO nya rutin setiap bulan, kadang kalau kelewat jadi numpuk sampai akhirnya ngerasa kawatir takut ketinggalan dan masih banyak kurangnya. Makasi staf-staf GL, udah banyak ngebantu dan buat aku berkembang. ",
    },
    {
      name: "Azka",
      role: "Student",
      image: "/images2.jpg",
      text: "Seru, metode belajar di GL tidak membosankan, banyak temannya.",
    },
    {
      name: "Yasmin",
      role: "Student",
      image: "/images.jpeg",
      text: "Menyenangkan bisa belajar dan mendapatkan banyak ilmu di GL.",
    },
    {
      name: "Malika",
      role: "Student",
      image: "/images2.jpg",
      text: "Belajar di GL seru, asik, dan oke, banyak temannya, dan tutor-tutornya ramah. ",
    },
    {
      name: "Najwa",
      role: "Student",
      image: "/images.jpeg",
      text: "Semenjak masuk GL, belajar tentang materi yang lagi dipelajari jadi lebih paham dan jelas.",
    },
    {
      name: "Alea ",
      role: "Student",
      image: "/images2.jpg",
      text: "GL itu seru, tutor-tutornya baik, dan asik. Belajar jadi lebih mudah dimengerti. ",
    },
  ];
  return (
    <div className="bg-slate-100">
      <section>
        <div className="flex items-center justify-center  relative w-full h-[20rem] sm:h-[50rem] mt-5">
          <div className="relative w-full h-[20rem] sm:h-[50rem] bg-[url('/Banner.png')] bg-cover bg-center">
            {/* Overlay */}
            <div className="hidden sm:block sm:absolute inset-0 bg-black/60" />

            <div className="hidden sm:relative h-full sm:flex flex-col items-center justify-center text-white z-10">
              <div className="w-fit">
                <h1 className="text-3xl 2xl:text-5xl font-bold mb-4">
                  MR. EKO Guidance Learning
                </h1>
              </div>
              <div className="w-fit flex flex-col items-center justify-center text-center pt-5 border-t-2 border-white">
                <h2 className="text-xl sm:text-xl 2xl:text-2xl font-semibold mb-3">
                  SHINE:{" "}
                  <span>
                    Smarter – Hearted – Individuals with – Noble – Ethics
                  </span>
                </h2>
                <h3 className="text-base sm:text-lg font-medium mb-5">
                  Brighter Minds with Deeper Values
                </h3>
                <p className="leading-relaxed font-light max-w-xl text-center">
                  Guidance Learning Mr. Eko merupakan lembaga bimbingan belajar
                  yang telah berdiri sejak tahun 2017, dengan komitmen untuk
                  menjadi mitra belajar terbaik bagi siswa dalam mencapai
                  prestasi akademik dan pembentukan karakter.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 px-5 block sm:hidden">
          <div className="flex flex-col items-center text-start py-5">
            <h3 className="text-2xl font-bold text-gray-800">
              BRIGHTER MINDS WITH DEEPER VALUES
            </h3>
            <p className="text-gray-700 font-semibold leading-relaxed text-justify">
              Guidance Learning Mr. Eko merupakan lembaga bimbingan belajar yang
              telah berdiri sejak tahun 2017, dengan komitmen untuk menjadi
              mitra belajar terbaik bagi siswa dalam mencapai prestasi akademik
              dan pembentukan karakter.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-center  pt-6">
        <span className="sm:w-1/3 flex flex-col items-center justify-center text-center pt-6 gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Our Programs
          </h2>
          <p className="text-gray-700">
            Explore our diverse range of programs designed to enhance learning
            and character development.
          </p>
        </span>
        <span className="w-2/3 our-programs">
          <CardSlider data={programData} />
        </span>
      </section>

      <div className="w-full flex flex-col items-center justify-center  pt-6">
        <span className="sm:w-1/3 flex flex-col items-center justify-center text-center pt-6 gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Our Staffs
          </h2>
          <p className="text-gray-700">
            Explore our diverse range of programs designed to enhance learning
            and character development.
          </p>
        </span>
        <span className="w-2/3 our-staffs">
          <CardSlider data={staffData} imageHeight={160} imageWidth={80} />
        </span>
      </div>

      <section className="w-full flex flex-col items-center justify-center pt-6">
        <div className="w-full sm:w-2/3">
          <TestimonialsFade testimonials={testimonials} />
        </div>
      </section>

      <div className="w-full flex flex-col items-center justify-center  pt-6">
        <div className="w-full sm:w-2/3 px-3">
          <h2 className="text-xl text-center sm:text-2xl font-semibold text-gray-800">
            Frequent Asked Questions
          </h2>
          <Accordion
            title="Why Choose Us?"
            content="We provide personalized learning experiences, expert instructors, and a supportive environment to help students excel academically and develop strong character."
          />
          <Accordion
            title="Our Mission"
            content="To empower students with knowledge and values that will guide them towards a successful and meaningful life."
          />
        </div>
      </div>

      <div className="">
        <MarqueeText
          text={["SHINE", "Smarter Hearted Individuals with Noble Ethics"]}
          interval={5000}
          speed={25}
        />
      </div>

      <div>
        <MarqueeImageLeft
          images={["/Logo.png", "/globe.svg"]}
          speed={18}
          imageHeight={96}
          imageWidth={128}
        />
      </div>

      <Footer />
    </div>
  );
}
