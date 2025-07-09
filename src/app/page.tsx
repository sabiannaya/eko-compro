import React from "react";
import Image from "next/image";
import CardSlider from "@/components/CardSlider";
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
      image: "/murid.jpg",
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
      text: "Pertama kali aku di GL aku jadi mood belajar, belajar jadi seru, nilai nya juga meningkat. Pokonya belajar jadi asik, tutor-tutornya seru, asik, dan baikk. Makasih ka Haura, ka Syifa, bu Merry, pa Eko udah sabar ajarin aku, makasihjuga ka mau cerita pengalaman kaka yang bikin aku termotivasi, makasih ya kaa",
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

  const teachingMethods = [
    {
      icon: "/Logo.png",
      title: "Privat dan Klasikal",
      description:
        "Metode pembelajaran yang dilakukan secara privat dan klasikal.",
    },
    {
      icon: "/Logo.png",
      title: "Contextual Teaching and Learning",
      description:
        "Mengaitkan materi dengan konteks kehidupan nyata siswa untuk meningkatkan pemahaman.",
    },
    {
      icon: "/Logo.png",
      title: "Cooperative Learning, Problem Solving, Scientific, dan Inquiry",
      description:
        "Menggunakan metode pembelajaran kooperatif, pemecahan masalah, ilmiah, dan inkuiri untuk meningkatkan keterlibatan siswa.",
    },
    {
      icon: "/Logo.png",
      title: "Project Based Learning",
      description:
        "Menerapkan pembelajaran berbasis proyek untuk mengembangkan keterampilan praktis siswa.",
    },
    {
      icon: "/Logo.png",
      title: "Drill",
      description:
        "Melakukan latihan berulang untuk memperkuat pemahaman konsep.",
    },
    {
      icon: "/Logo.png",
      title: "Pemahaman Konsep dan Menganalisa Masalah",
      description:
        "Fokus pada pemahaman konsep dan kemampuan menganalisis masalah untuk meningkatkan keterampilan berpikir kritis siswa.",
    },
    {
      icon: "/Logo.png",
      title: "Kelas Online dan Offline",
      description:
        "Menyediakan kelas online dan offline untuk fleksibilitas pembelajaran.",
    },
  ];

  const SDFacilitiesData = [
    {
      content:
        "Buku panduan/modul IPA, Matematika, Bahasa Indonesia, dan Tematik",
      image: "/Logo.png",
    },
    {
      content:
        "Kumpulan latihan soal Ujian Sekolah (US) dan Ujian Negara (UN)/Tes Kemampuan Akademik (TKA) (tambahan untuk kelas 6 SD)",
      image: "/Logo.png",
    },
  ];

  const SMPFacilitiesData = [
    {
      content:
        "Buku panduan/modul IPA, Matematika, Bahasa Indonesia, Bahasa Inggris",
      image: "/Logo.png",
    },
    {
      content:
        "Buku kumpulan latihan soal Ujian Sekolah (US) dan Ujian Negara (UN)/Tes Kemampuan Akademik (TKA), rumus pocket book (tambahan untuk kelas 9 SMP)",
      image: "/Logo.png",
    },
    {
      content: "Program percepatan materi (3 tahun -> menjadi 2 tahun)  ",
      image: "/Logo.png",
    },
  ];

  const SMAFacilitiesData = [
    {
      content:
        "Buku panduan/modul IPA (Biologi, Kimia, Fisika), dan Matematika (Wajib dan Peminatan)",
      image: "/Logo.png",
    },
  ];
  return (
    <div className="bg-slate-100 flex flex-col gap-8 2xl:gap-10">
      <section>
        <div className="flex items-center justify-centerrelative w-full h-[20rem] sm:h-[50rem] mt-5">
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

      <section className="w-full flex flex-col gap-5 items-center justify-center">
        <span className="sm:w-1/3 flex flex-col items-center justify-center text-centergap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Our Programs
          </h2>
          <p className="text-gray-700 text-center">
            Explore our diverse range of programs designed to enhance learning
            and character development.
          </p>
        </span>
        <div className="w-full bg-slate-300">
          <span className="w-2/3 our-programs p-5">
            <CardSlider data={programData} />
          </span>
        </div>
      </section>

      <section className="w-full px-5 flex flex-col gap-5">
        <span>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
            How We Teach
          </h2>
        </span>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teachingMethods.map((method, index) => {
              // Calculate if this is the last item and if it's alone in the last row
              const isLast = index === teachingMethods.length - 1;
              const isAloneInLastRow =
                isLast && teachingMethods.length % 3 === 1;

              return (
                <li
                  key={index}
                  className={`flex flex-col items-center bg-white shadow-md rounded-lg p-5 h-full min-h-[220px] ${
                    isAloneInLastRow ? "col-span-full" : ""
                  }`}
                >
                  <div className="relative w-20 h-20 mb-3">
                    <Image
                      fill
                      src={method.icon}
                      alt={method.title}
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold text-center">{method.title}</p>
                  <p className="text-center text-sm text-gray-700">
                    {method.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-center gap-5">
        <span className="sm:w-1/3 flex flex-col items-center justify-center text-center gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Our Staffs
          </h2>
          <p className="text-gray-700 text-center">
            Explore our diverse range of programs designed to enhance learning
            and character development.
          </p>
        </span>
        <span className="w-2/3 our-staffs">
          <CardSlider data={staffData} imageHeight={160} imageWidth={80} />
        </span>
      </section>

      <section className="w-full flex flex-col gap-5">
        <h2 className="text-xl text-center sm:text-2xl font-semibold text-gray-800">
          Fasilitas
        </h2>
        <div className="w-full p-5 bg-white flex flex-col">
          <section className="grid grid-cols-1 sm:grid-cols-3 py-5 border-b-2 border-gray-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Sekolah Dasar
            </h3>
            <ul className="flex flex-col gap-3 w-full sm:col-span-2">
              {SDFacilitiesData.map((facility, index) => (
                <li
                  key={index}
                  className="grid grid-cols-11 items-center justify-start"
                >
                  <div className="relative col-span-2 sm:col-span-1 w-12 h-12 sm:w-16 sm:h-16">
                    <Image
                      src={facility.image}
                      alt={`Facility ${index + 1}`}
                      fill
                      className="object-cover "
                    />
                  </div>
                  <p className="text-gray-700 col-span-9 sm:col-span-10">
                    {facility.content}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-3 py-5 border-b-2 border-gray-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Sekolah Menengah Pertama
            </h3>
            <ul className="flex flex-col gap-3 w-full sm:col-span-2">
              {SMPFacilitiesData.map((facility, index) => (
                <li
                  key={index}
                  className="grid grid-cols-11 items-center justify-start"
                >
                  <div className="relative col-span-2 sm:col-span-1 w-12 h-12 sm:w-16 sm:h-16">
                    <Image
                      src={facility.image}
                      alt={`Facility ${index + 1}`}
                      fill
                      className="object-cover "
                    />
                  </div>
                  <p className="text-gray-700 col-span-9 sm:col-span-10">
                    {facility.content}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-3 py-5">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Sekolah Menengah Atas
            </h3>
            <ul className="flex flex-col gap-3 w-full sm:col-span-2">
              {SMAFacilitiesData.map((facility, index) => (
                <li
                  key={index}
                  className="grid grid-cols-11 items-center justify-start"
                >
                  <div className="relative col-span-2 sm:col-span-1 w-12 h-12 sm:w-16 sm:h-16">
                    <Image
                      src={facility.image}
                      alt={`Facility ${index + 1}`}
                      fill
                      className="object-cover "
                    />
                  </div>
                  <p className="text-gray-700 col-span-9 sm:col-span-10">
                    {facility.content}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-center ">
        <div className="w-full sm:w-2/3">
          <h2 className="text-xl text-center sm:text-2xl font-semibold text-gray-800">
            Testimoni
          </h2>
          <TestimonialsFade testimonials={testimonials} />
        </div>
      </section>

      {/* <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full sm:w-2/3 px-3">
          <h2 className="text-xl text-center sm:text-2xl font-semibold text-gray-800">
            Frequent Asked Questions
          </h2>
          {FaqData.map((faq, index) => (
            <Accordion key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </section> */}

      {/* <section className="">
        <MarqueeText
          text={["SHINE", "Smarter Hearted Individuals with Noble Ethics"]}
          interval={5000}
          speed={25}
        />
      </section>

      <section>
        <MarqueeImageLeft
          images={["/Logo.png", "/globe.svg"]}
          speed={18}
          imageHeight={96}
          imageWidth={128}
        />
      </section> */}

      <Footer />
    </div>
  );
}
