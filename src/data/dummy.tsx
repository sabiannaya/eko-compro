export interface ProgramData {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // Sekarang menggunakan 'thumbnail'
}

export interface StaffData {
  id: string;
  title: string; // Menggunakan 'title' untuk nama staf
  description: string; // Menggunakan 'description' untuk posisi staf
  thumbnail: string; // Sekarang menggunakan 'thumbnail'
}

// --- INI ADALAH DEFINISI TIPE ACTIVITY YANG BENAR ---
// Perhatikan 'thumbnail' (string) dan 'images' (array of strings)
export type Activity = {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // Gambar utama untuk card atau tampilan ringkasan
  images: string[]; // Array dari semua gambar yang terkait dengan aktivitas ini
  category: string;
  schedule: string;
  tags: string[];
};



export const programData: ProgramData[] = [ // Terapkan tipe ProgramData
  {
    id: "prog-1",
    title: "Elementary Program",
    description: "Comprehensive learning foundation for elementary students",
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-2",
    title: "Junior High Program",
    description: "Academic excellence preparation for junior high students",
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-3",
    title: "Senior High Program",
    description: "University entrance exam preparation and academic support",
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-4",
    title: "Intensive Course",
    description: "Focused learning sessions for exam preparation",
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-5",
    title: "Private Tutoring",
    description: "One-on-one personalized learning experience",
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-6",
    title: "Online Classes",
    description: "Flexible online learning with expert guidance",
    thumbnail: "/Logo.png",
  },
  {
    id: "prog-7",
    title: "Character Building",
    description: "Developing both academic skills and moral values",
    thumbnail: "/Logo.png",
  },
];

export const staffData: StaffData[] = [ // Terapkan tipe StaffData
  {
    id: "staff-1",
    title: "Eko Sulaksono, S.Pd.",
    description: "Founder & Head Tutor",
    thumbnail: "/murid2.jpeg",
  },
  {
    id: "staff-2",
    title: "Dra. Mery Mariam",
    description: "Co-Founder & Senior Tutor",
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-3",
    title: "Haura Labibah Salsabil Sulaksono, S.Kep., M.Biotek",
    description: "Senior Tutor - Science",
    thumbnail: "/murid2.jpeg",
  },
  {
    id: "staff-4",
    title: "Jinan Kautsar Syifa Sulaksono, S.K.M",
    description: "Tutor - Mathematics",
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-5",
    title: "Muhammad Fauzi Zaydan Rizqullah Sulaksono",
    description: "Tutor - Physics & Chemistry",
    thumbnail: "/Logo.png",
  },
  {
    id: "staff-6",
    title: "Rizky Muhammad Mufti Firdaus Sulaksono",
    description: "Tutor - Biology & Mathematics",
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
    name: "Videl",
    role: "Student",
    image: "/murid2.jpeg",
    text: "Seneng dan seru belajar di GL, awal awal tegang belajar di sana karena belum kenal lebih deket dengan para tutor di GL tapi setelah lama belajar di sana jadi seruu belajar jadi kerasa bentar banget karena serius tapi asik. Jadi belajar kerasanya seneng, mood bawaannyaa pokonya asik bangett di GL.. Makasih ya para tutor GL udah mau sabar dan mau di tanya tanyaa terus. Makasih juga gapernah bosen untuk ngingetin di catet yaa, di ulangin lagi yaa, makasih yaaa",
  },
  {
    id: "test-2",
    name: "Haura",
    role: "Student",
    image: "/images.jpeg",
    text: "Awal masuk jujur ngerasa takut, terutama kalau offline, tapi lama kelamaan biasa aja sih karena ada banyak temen jugaa di GL, terus jadi selangkah lebih tau dan ngerti. Kayak mtk jadi lebih gampang karena uda belajar di GL, jadi pas di sekolah kerasa gampang pas belajar/mau ulangan, intinya kebantu banget sih, di GL tuh. Kadang suka mumet karena TO nya banyak, apalagi kalau ditumpuk, huhuu nyesel deh. Tapi overall, aku seneng banget sih, bisa jadi bagian dari GL, apalagi kalo belajar sama Kak Haura. Makasih yaa buat semua yang udah ngajarin di GL.",
  },
  {
    id: "test-3",
    name: "Ghaida",
    role: "Teacher",
    image: "/images2.jpg",
    text: "Sangat menyenangkan les di GL, belajar lebih cepat ngerti. Terlihat nyantai tp serius.. belajar kalau belum ngerti itu di ajarin sampai ngerti.. jadi matematika yang tadinya paling gak suka jadi suka banget. kalau ada ulangan jadi tenang. ",
  },
  {
    id: "test-4",
    name: "Selma",
    role: "Alumni",
    image: "/images.jpeg",
    text: "Pertama kali aku di GL aku jadi mood belajar, belajar jadi seru, nilai nya juga meningkat. Pokonya belajar jadi asik, tutor-tutornya seru, asik, dan baikk. Makasih ka Haura, ka Syifa, bu Merry, pa Eko udah sabar ajarin aku, makasihjuga ka mau cerita pengalaman kaka yang bikin aku termotivasi, makasih ya kaa",
  },
  {
    id: "test-5",
    name: "Asyraf",
    role: "Student",
    image: "/images2.jpg",
    text: "Bagus, materinya juga jadi lebih cepat paham karena di review terus sama materinya juga lebih cepat dari yang sekolah.",
  },
  {
    id: "test-6",
    name: "Alif",
    role: "Student",
    image: "/images.jpeg",
    text: "Awal ikut GL seru dan ngebantu banget. Karena TO nya rutin setiap bulan, kadang kalau kelewat jadi numpuk sampai akhirnya ngerasa kawatir takut ketinggalan dan masih banyak kurangnya. Makasi staf-staf GL, udah banyak ngebantu dan buat aku berkembang. ",
  },
  {
    id: "test-7",
    name: "Azka",
    role: "Student",
    image: "/images2.jpg",
    text: "Seru, metode belajar di GL tidak membosankan, banyak temannya.",
  },
  {
    id: "test-8",
    name: "Yasmin",
    role: "Student",
    image: "/images.jpeg",
    text: "Menyenangkan bisa belajar dan mendapatkan banyak ilmu di GL.",
  },
  {
    id: "test-9",
    name: "Malika",
    role: "Student",
    image: "/images2.jpg",
    text: "Belajar di GL seru, asik, dan oke, banyak temannya, dan tutor-tutornya ramah. ",
  },
  {
    id: "test-10",
    name: "Najwa",
    role: "Student",
    image: "/images.jpeg",
    text: "Semenjak masuk GL, belajar tentang materi yang lagi dipelajari jadi lebih paham dan jelas.",
  },
  {
    id: "test-11",
    name: "Alea ",
    role: "Student",
    image: "/images2.jpg",
    text: "GL itu seru, tutor-tutornya baik, dan asik. Belajar jadi lebih mudah dimengerti. ",
  },
];

export const activitiesData: Activity[] = [ // Terapkan tipe Activity
  {
    id: "act-1",
    title: "Kegiatan belajar intensif",
    description: "Persiapan intensif untuk kompetisi akademik nasional dan internasional bersama pelatih ahli kami.",
    thumbnail: "/activities1.jpg",
    images: ["/activities1.jpg"],
    category: "intensif",
    schedule: "Setiap Sabtu, 9AM-12PM",
    tags: ["Luring"]
  },
  {
    id: "act-2",
    title: "Kegiatan Belajar Daring",
    description: "Program daring yang berfokus pada kerja sama tim, pemecahan masalah, dan pengembangan karakter.",
    thumbnail: "/activitieszoom1.jpg",
    images: [
      "/activitieszoom1.jpg",
      "/activitieszoom2.jpg",
      "/activitieszoom3.jpg",
      "/activitieszoom4.jpg",
    ],
    category: "Intensif zoom",
    schedule: "Tergantung jadwal",
    tags: ["daring"]
  },
];