import { Activity, ProgramData, StaffData, HeroContent } from "@/utils/TypeContext"; // Impor tipe data dari types.ts

export const heroContent: HeroContent = {
  title: "MR. EKO Guidance Learning",
  shine: "SHINE: Cerdas – Berhati – Individu dengan – Etika Mulia",
  subtitle: "Pikiran Cemerlang dengan Nilai Mendalam",
  description: {
    id: "Guidance Learning Mr. Eko merupakan lembaga bimbingan belajar yang telah berdiri sejak tahun 2017, dengan komitmen untuk menjadi mitra belajar terbaik bagi siswa dalam mencapai prestasi akademik dan pembentukan karakter.",
    en: "Guidance Learning Mr. Eko is a tutoring institution established in 2017, committed to being the best learning partner for students in achieving academic excellence and character development.",
  },
};

export const programData: ProgramData[] = [
  {
    id: "prog-1",
    title: {
      en: "Intensive Learning Program",
      id: "Program Belajar Intensif",
    },
    description: {
      en: "A comprehensive program designed to prepare students for national and international academic competitions through focused training sessions.",
      id: "Program komprehensif yang dirancang untuk mempersiapkan siswa menghadapi kompetisi akademik nasional dan internasional melalui sesi pelatihan yang terfokus.",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-2",
    title: {
      en: "Regular Learning Program",
      id: "Program Belajar Reguler",
    },
    description: {
      en: "A structured learning program that emphasizes teamwork, problem-solving, and character development through regular sessions.",
      id: "Program pembelajaran terstruktur yang menekankan kerja sama tim, pemecahan masalah, dan pengembangan karakter melalui sesi reguler.",
    },
    thumbnail: "/Logo.png",
  },
];

export const staffData: StaffData[] = [
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
      en: "Tutor - Mathematics",
      id: "Tutor - Matematika",
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
      en: "Tutor - Physics & Chemistry",
      id: "Tutor - Fisika & Kimia",
    },
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-6",
    title: {
      en: "Rizky Muhammad Mufti Firdaus Sulaksono",
      id: "Rizky Muhammad Mufti Firdaus Sulaksono",
    },
    description: {
      en: "Tutor - Biology & Mathematics",
      id: "Tutor - Biologi & Matematika",
    },
    thumbnail: "/Logo.png",
  },
];

export const teachingMethods = [
  {
    id: "tm-1",
    icon: "/Logo.png",
    title: "Private & Group Classes",
    description:
      "Flexible learning options with both private and group sessions tailored to individual needs.",
  },
  {
    id: "tm-2",
    icon: "/Logo.png",
    title: "Contextual Learning",
    description:
      "Connecting academic concepts to real-world applications for enhanced understanding.",
  },
  {
    id: "tm-3",
    icon: "/Logo.png",
    title: "Cooperative & Scientific Learning",
    description:
      "Collaborative problem-solving and inquiry-based learning methodologies.",
  },
  {
    id: "tm-4",
    icon: "/Logo.png",
    title: "Project-Based Learning",
    description:
      "Hands-on projects that develop practical skills and creative thinking.",
  },
  {
    id: "tm-5",
    icon: "/Logo.png",
    title: "Intensive Practice",
    description:
      "Structured repetition and practice sessions to reinforce key concepts.",
  },
  {
    id: "tm-6",
    icon: "/Logo.png",
    title: "Critical Thinking",
    description:
      "Focus on concept understanding and analytical problem-solving skills.",
  },
  {
    id: "tm-7",
    icon: "/Logo.png",
    title: "Hybrid Learning",
    description:
      "Seamless integration of online and offline learning experiences.",
  },
];

export const facilitiesData = [
  {
    id: "fac-1",
    title: "Elementary School",
    facilities: [
      {
        id: "fac-1-sub-1",
        content:
          "Comprehensive study guides and modules for Science, Mathematics, Indonesian Language, and Thematic learning",
        image: "/Logo.png",
      },
      {
        id: "fac-1-sub-2",
        content:
          "Extensive practice test collections for School Exams (US) and National Assessment (AN) with special preparation for 6th grade",
        image: "/Logo.png",
      },
    ],
  },
  {
    id: "fac-2",
    title: "Junior High School",
    facilities: [
      {
        id: "fac-2-sub-1",
        content:
          "Detailed study modules for Science, Mathematics, Indonesian Language, and English",
        image: "/Logo.png",
      },
      {
        id: "fac-2-sub-2",
        content:
          "Complete practice test books for School Exams and Academic Ability Tests, plus pocket formula guides for 9th grade students",
        image: "/Logo.png",
      },
      {
        id: "fac-2-sub-3",
        content:
          "Accelerated learning program (3 years condensed into 2 years)",
        image: "/Logo.png",
      },
    ],
  },
  {
    id: "fac-3",
    title: "Senior High School",
    facilities: [
      {
        id: "fac-3-sub-1",
        content:
          "Advanced study guides for Science subjects (Biology, Chemistry, Physics) and Mathematics (Core and Specialization tracks)",
        image: "/Logo.png",
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
