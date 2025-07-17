import {
  Activity,
  ProgramInterface,
  StaffInterface,
  teachingMethodsInterface,
  facilitiesInterface,
  
} from "@/utils/TypeContext"; // Impor tipe Interface dari types.ts


export const programData: ProgramInterface[] = [
  {
    id: "prog-1",
    title: {
      en: "Merdeka Curriculum",
      id: "Kurikulum Merdeka",
    },
    description: {
      en: "Deep Learning Approach",
      id: "Pendekatan Pembelajaran Deep Learning",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-2",
    title: {
      en: "International Curriculum",
      id: "Kurikulum Internasional",
    },
    description: {
      en: "A structured learning program that emphasizes teamwork, problem-solving, and character development through International sessions.",
      id: "Program pembelajaran terstruktur yang menekankan kerja sama tim, pemecahan masalah, dan pengembangan karakter melalui sesi Internasional.",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-3",
    title: {
      en: "Intensive Program",
      id: "Program Intensif",
    },
    description: {
      en: "A comprehensive learning program designed to prepare students for various assessments, including UH Assessment, ASAT, Religious Exams, US, and UN/TKA.",
      id: "Program pembelajaran untuk menghadapi UH Assesment, ASAT, Ujian Keagamaan, US, UN/TKA",
    },
    thumbnail: "/Logo.png",
  },
    {
    id: "prog-4",
    title: {
      en: "Regular Tryouts",
      id: "Tryout Rutin",
    },
    description: {
      en: "This program is designed to help you measure and improve your abilities regularly, ensuring you stay on track towards success.",
      id: "Program ini dirancang khusus untuk membantumu mengukur dan meningkatkan kemampuan secara berkala, memastikan kamu selalu berada di jalur yang tepat menuju kesuksesan.",
    },
    thumbnail: "/Logo.png", 
  },
    {
    id: "prog-5",
    title: {
      en: "Admissions Preparation Program for Junior/Senior High School",
      id: "Bimbingan Seleksi Masuk SMP/SMA",
    },
    description: {
      en: "This program is designed to help students succeed in the competitive entrance exams for top junior and senior high schools, offering comprehensive and adaptive preparation.",
      id: "Program bimbingan ini dirancang untuk membantu siswa sukses lolos seleksi masuk SMP dan SMA favorit. Menyadari ketatnya persaingan, program ini menawarkan persiapan yang komprehensif dan adaptif.",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-6",
    title: {
      en: "Accelerated Learning Program (Junior High School Level)",
      id: "Program percepatan materi/Akselerasi (Tingkat SMP)",
    },
    description: {
      en: "This program is designed for high-potential junior high school students who want to optimize their academic abilities and absorb material more quickly. The focus is on strong concept mastery and critical thinking development, not just speed.",
      id: "Program Percepatan Materi/Akselerasi ini didesain untuk siswa SMP berpotensi tinggi yang ingin mengoptimalkan kemampuan akademiknya dan menyerap materi lebih cepat. Fokusnya adalah penguasaan konsep yang kuat dan pengembangan berpikir kritis, bukan hanya kecepatan.",
    },
    thumbnail: "/Logo.png",
  },
];

export const staffData: StaffInterface[] = [
  // Terapkan tipe StaffData
  {
    id: "staff-1",
    title: {
      en: "Eko Sulaksono, S.Pd.",
      id: "Eko Sulaksono, S.Pd.",
    },
    description: {
      en: "Founder & Head Tutor",
      id: "Pendiri & Kepala Tutor",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-2",
    title: {
      en: "Dra. Mery Mariam",
      id: "Dra. Mery Mariam",
    },
    description: {
      en: "Co-Founder & Senior Tutor",
      id: "Co-Founder & Tutor Senior",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-3",
    title: {
      en: "Haura Labibah Salsabil Sulaksono, S.Kep., M.Biotek",
      id: "Haura Labibah Salsabil Sulaksono, S.Kep., M.Biotek",
    },
    description: {
      en: "Senior Tutor - Science",
      id: "Tutor Senior - Sains",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-4",
    title: {
      en: "Jinan Kautsar Syifa Sulaksono, S.K.M",
      id: "Jinan Kautsar Syifa Sulaksono, S.K.M",
    },
    description: {
      en: "Tutor - Mathematics & Biology",
      id: "Tutor - Matematika & Biologi",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-5",
    title: {
      en: "Muhammad Fauzi Zaydan Rizqullah Sulaksono",
      id: "Muhammad Fauzi Zaydan Rizqullah Sulaksono",
    },
    description: {
      en: "Finance",
      id: "Staff Keuangan",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-6",
    title: {
      en: "Muhammad Mufti Firdaus Sulaksono",
      id: "Muhammad Mufti Firdaus Sulaksono",
    },
    description: {
      en: "Administration",
      id: "Tata Usaha",
    },
    thumbnail: "/Logo.png",
  },
];

export const teachingMethods: teachingMethodsInterface[] = [
  {
    id: "tm-1",
    thumbnail: "/Logo.png",
    title: {
      en: "Private & Group Classes",
      id: "Kelas Privat & Kelompok",
    },
    description: {
      en: "Flexible learning options with both private and group sessions tailored to individual needs.",
      id: "Pilihan belajar fleksibel dengan sesi privat dan kelompok yang disesuaikan dengan kebutuhan individu.",
    },
  },
  {
    id: "tm-2",
    thumbnail: "/Logo.png",
    title: {
      en: "Contextual Learning",
      id: "Pembelajaran Kontekstual",
    },
    description: {
      en: "Connecting academic concepts to real-world applications for enhanced understanding.",
      id: "Menghubungkan konsep akademik dengan aplikasi dunia nyata untuk pemahaman yang lebih baik.",
    },
  },
  {
    id: "tm-3",
    thumbnail: "/Logo.png",
    title: {
      en: "Cooperative & Scientific Learning",
      id: "Pembelajaran Kooperatif & Saintifik",
    },
    description: {
      en: "Collaborative problem-solving and inquiry-based learning methodologies.",
      id: "Metodologi pembelajaran berbasis kolaborasi pemecahan masalah dan penyelidikan.",
    },
  },
  {
    id: "tm-4",
    thumbnail: "/Logo.png",
    title: {
      en: "Project-Based Learning",
      id: "Pembelajaran Berbasis Proyek",
    },
    description: {
      en: "Hands-on projects that develop practical skills and creative thinking.",
      id: "Proyek praktis yang mengembangkan keterampilan praktis dan pemikiran kreatif.",
    },
  },
  {
    id: "tm-5",
    thumbnail: "/Logo.png",
    title: {
      en: "Intensive Practice",
      id: "Latihan Intensif",
    },
    description: {
      en: "Structured repetition and practice sessions to reinforce key concepts.",
      id: "Sesi pengulangan dan latihan terstruktur untuk memperkuat konsep kunci.",
    },
  },
  {
    id: "tm-6",
    thumbnail: "/Logo.png",
    title: {
      en: "Critical Thinking",
      id: "Pemikiran Kritis",
    },
    description: {
      en: "Focus on concept understanding and analytical problem-solving skills.",
      id: "Fokus pada pemahaman konsep dan keterampilan pemecahan masalah analitis.",
    },
  },
  {
    id: "tm-7",
    thumbnail: "/Logo.png",
    title: {
      en: "Hybrid Learning",
      id: "Pembelajaran Hibrid",
    },
    description: {
      en: "Seamless integration of online and offline learning experiences.",
      id: "Integrasi seamless dari pengalaman belajar online dan offline.",
    },
  },
];

export const facilitiesData: facilitiesInterface[] = [
  {
    id: "fac-1",
    title: {
      en: "Elementary School",
      id: "Sekolah Dasar",
    },
    facilities: [
      {
        id: "fac-1-sub-1",
        title: {
          en: "Comprehensive Study Guides",
          id: "Panduan Belajar Komprehensif",
        },
        description: {
          en: "Comprehensive study guides and modules for Science, Mathematics, Indonesian Language, and Thematic learning",
          id: "Panduan dan modul belajar komprehensif untuk IPA, Matematika, Bahasa Indonesia, dan pembelajaran Tematik",
        },
        thumbnail: "/Logo.png",
      },
      {
        id: "fac-1-sub-2",
        title: {
          en: "Practice Test Collections",
          id: "Kumpulan Soal Latihan",
        },
        description: {
          en: "Extensive practice test collections for School Exams (US) and National Assessment (AN) with special preparation for 6th grade",
          id: "Kumpulan soal latihan untuk Ujian Sekolah (US) dan Asesmen Nasional (AN) dengan persiapan khusus kelas 6",
        },
        thumbnail: "/Logo.png",
      },
    ],
  },
  {
    id: "fac-2",
    title: {
      en: "Junior High School",
      id: "Sekolah Menengah Pertama",
    },
    facilities: [
      {
        id: "fac-2-sub-1",
        title: {
          en: "Detailed Study Modules",
          id: "Modul Belajar Detail",
        },
        description: {
          en: "Detailed study modules for Science, Mathematics, Indonesian Language, and English",
          id: "Modul belajar detail untuk IPA, Matematika, Bahasa Indonesia, dan Bahasa Inggris",
        },
        thumbnail: "/Logo.png",
      },
      {
        id: "fac-2-sub-2",
        title: {
          en: "Practice Test Books & Formula Guides",
          id: "Buku Soal Latihan & Panduan Rumus",
        },
        description: {
          en: "Complete practice test books for School Exams and Academic Ability Tests, plus pocket formula guides for 9th grade students",
          id: "Buku soal latihan lengkap untuk ujian sekolah dan tes kemampuan akademik, serta panduan rumus saku untuk siswa kelas 9",
        },
        thumbnail: "/Logo.png",
      },
      {
        id: "fac-2-sub-3",
        title: {
          en: "Accelerated Learning Program",
          id: "Program Belajar Akselerasi",
        },
        description: {
          en: "Accelerated learning program (3 years condensed into 2 years)",
          id: "Program belajar akselerasi (3 tahun dipadatkan menjadi 2 tahun)",
        },
        thumbnail: "/Logo.png",
      },
    ],
  },
  {
    id: "fac-3",
    title: {
      en: "Senior High School",
      id: "Sekolah Menengah Atas",
    },
    facilities: [
      {
        id: "fac-3-sub-1",
        title: {
          en: "Advanced Study Guides",
          id: "Panduan Belajar Lanjutan",
        },
        description: {
          en: "Advanced study guides for Science subjects (Biology, Chemistry, Physics) and Mathematics (Core and Specialization tracks)",
          id: "Panduan belajar lanjutan untuk mata pelajaran IPA (Biologi, Kimia, Fisika) dan Matematika (peminatan dan wajib)",
        },
        thumbnail: "/Logo.png",
      },
    ],
  },
];

export const testimonials = [
  {
    id: "test-1",
    name: "Azka",
    role: "Student",
    image: "/Azka.jpg",
    text: "Seru, metode belajar di GL tidak membosankan, banyak temannya.",
  },

  {
    id: "test-2",
    name: "Haura",
    role: "Student",
    image: "/Haura.jpg",
    text: "Awal masuk jujur ngerasa takut, terutama kalau offline, tapi lama kelamaan biasa aja sih karena ada banyak temen jugaa di GL, terus jadi selangkah lebih tau dan ngerti. Kayak mtk jadi lebih gampang karena uda belajar di GL, jadi pas di sekolah kerasa gampang pas belajar/mau ulangan, intinya kebantu banget sih, di GL tuh. Kadang suka mumet karena TO nya banyak, apalagi kalau ditumpuk, huhuu nyesel deh. Tapi overall, aku seneng banget sih, bisa jadi bagian dari GL, apalagi kalo belajar sama Kak Haura. Makasih yaa buat semua yang udah ngajarin di GL.",
  },

  {
    id: "test-3",
    name: "Malika",
    role: "Student",
    image: "/Malika.jpg",
    text: "Belajar di GL seru, asik, dan oke, banyak temannya, dan tutor-tutornya ramah. ",
  },

  {
    id: "test-4",
    name: "Khansa",
    role: "Alumni",
    image: "/Khansa.jpg",
    text: "Belajar di GL menyenangkan, cepat menghafal materinya, pokoknya seru, semangat terus GL!",
  },
  {
    id: "test-5",
    name: "Luna",
    role: "Student",
    image: "/Luna.jpg",
    text: "Seru banget, pelajarannya gampang dimengerti. Makasih ya buat Pak Eko, Bu Mery, Kak Haura, dan Kak Syifa udah mau ngajarin aku dan teman-teman aku, semoga staff-staff GL sehat selalu dan terus semangat mengajar anak-anak GL.",
  },
  {
    id: "test-6",
    name: "Videl",
    role: "Student",
    image: "/Videl_Cropped.png",
    text: "Seneng dan seru belajar di GL, awal awal tegang belajar di sana karena belum kenal lebih deket dengan para tutor di GL tapi setelah lama belajar di sana jadi seruu belajar jadi kerasa bentar banget karena serius tapi asik. Jadi belajar kerasanya seneng, mood bawaannyaa pokonya asik bangett di GL.. Makasih ya para tutor GL udah mau sabar dan mau di tanya tanyaa terus. Makasih juga gapernah bosen untuk ngingetin di catet yaa, di ulangin lagi yaa, makasih yaaa",
  },
  {
    id: "test-7",
    name: "Alif",
    role: "Student",
    image: "/freepik1.jpg",
    text: "Awal ikut GL seru dan ngebantu banget. Karena TO nya rutin setiap bulan, kadang kalau kelewat jadi numpuk sampai akhirnya ngerasa kawatir takut ketinggalan dan masih banyak kurangnya. Makasi staf-staf GL, udah banyak ngebantu dan buat aku berkembang. ",
  },
  {
    id: "test-8",
    name: "Yasmin",
    role: "Student",
    image: "/freepik2.jpg",
    text: "Menyenangkan bisa belajar dan mendapatkan banyak ilmu di GL.",
  },

  {
    id: "test-9",
    name: "Ghaida",
    role: "Teacher",
    image: "/freepik3.jpg",
    text: "Sangat menyenangkan les di GL, belajar lebih cepat ngerti. Terlihat nyantai tp serius.. belajar kalau belum ngerti itu di ajarin sampai ngerti.. jadi matematika yang tadinya paling gak suka jadi suka banget. kalau ada ulangan jadi tenang. ",
  },

  {
    id: "test-10",
    name: "Najwa",
    role: "Student",
    image: "/freepik1.jpg",
    text: "Semenjak masuk GL, belajar tentang materi yang lagi dipelajari jadi lebih paham dan jelas.",
  },
  {
    id: "test-11",
    name: "Alea ",
    role: "Student",
    image: "/freepik2.jpg",
    text: "GL itu seru, tutor-tutornya baik, dan asik. Belajar jadi lebih mudah dimengerti. ",
  },
];

export const activitiesData: Activity[] = [
  {
    id: "act-1",
    title: {
      en: "Intensive Learning Activities",
      id: "Kegiatan Belajar Intensif",
    },
    description: {
      en: "Intensive learning activities focused on academic competitions, problem-solving, and character development.",
      id: "Kegiatan belajar intensif yang berfokus pada kompetisi akademik, pemecahan masalah, dan pengembangan karakter.",
    },
    thumbnail: "/activities1.jpg",
    images: ["/activities1.jpg"],
    category: "intensif",
    schedule: "Setiap Sabtu, 9AM-12PM",
    tags: ["Luring"],
  },
  {
    id: "act-2",
    title: {
      en: "Online Learning Activities",
      id: "Kegiatan Belajar Daring",
    },
    description: {
      en: "Online programs focused on teamwork, problem-solving, and character development.",
      id: "Program daring yang berfokus pada kerja sama tim, pemecahan masalah, dan pengembangan karakter.",
    },
    thumbnail: "/activitieszoom1.jpg",
    images: [
      "/activitieszoom1.jpg",
      "/activitieszoom2.jpg",
      "/activitieszoom3.jpg",
      "/activitieszoom4.jpg",
    ],
    category: "Intensif zoom",
    schedule: "Tergantung jadwal",
    tags: ["daring"],
  },
];

export type { Activity };
