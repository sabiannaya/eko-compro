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
      en: "The learning curriculum is tailored based on the USBN SKL of the Education Office with the current applicable curriculum (Merdeka Curriculum) using a Deep Learning approach.",
      id: "Kurikulum pembelajaran disesuaikan berdasarkan SKL USBN Dinas Pendidikan dengan kurikulum yang berlaku saat ini (Kurikulum Merdeka) dengan pendekatan pembelajaran Deep Learning.",
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
      en: "Additional learning programs tailored to bilingual school curricula or those using international curricula, such as the ongoing Cambridge International Curriculum.",
      id: "Program pembelajaran tambahan yang disesuaikan dengan kurikulum sekolah bilingual atau yang menggunakan kurikulum internasional, seperti yang sudah berjalan yaitu Cambridge International Curriculum.",
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
      en: "A comprehensive learning program designed to prepare students for various assessments, including UH Assessment, ASAT, Religious Exams, US, UN/TKA, and entrance exam preparations for junior and senior high schools.",
      id: "Program pembelajaran untuk menghadapi UH Assesment, ASAT, Ujian Keagamaan, US, UN/TKA, persiapan tes masuk SMP dan SMA",
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
      en: "Hybrid learning offers increased flexibility while preserving meaningful two-way interaction. Lessons may be delivered online, offline, or through a combination of both, adapted to students' specific needs. This inclusive approach enables access for learners across various regions and countries.",
      id: "Kegiatan pembelajaran lebih fleksibel dan tetap interaktif dua arah, karena dapat dilakukan secara online meeting atau offline, ataupun keduanya menyesuaikan dengan kebutuhan siswa, sehingga dapat menjangkau siswa dari berbagai daerah maupun negara.",
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
          en: "Comprehensive study guides for IPAS (Science and Social Studies), Mathematics, Indonesian Language, English, and PPKN.",
          id: "Modul panduan pembelajaran untuk mata pelajaran IPAS (IPA dan IPS), Matematika, Bahasa Indonesia, Bahasa Inggris, PPKN.",
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
          en: "Practice test collections for School Exams and Academic Ability Tests, including additional books specifically for 6th-grade students.",
          id: "Buku bank soal untuk menghadapi Ujian Sekolah (US) dan atau Tes Kemampuan Akademik (TKA) tambahan khusus untuk siswa kelas 6.",
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
          en: "Guided Study Modules",
          id: "Modul Panduan Belajar",
        },
        description: {
          en: "Guided study modules for Science subjects (Biology, Chemistry, Physics), Mathematics, Indonesian Language, English, and formula pocket guides.",
          id: "Modul panduan pembelajaran untuk mata pelajaran IPA (Biologi, Kimia, Fisika), Matematika, Bahasa Indonesia, Bahasa Inggris, dan buku saku rumus.",
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
          en: "Practice test books for School Exams and Academic Ability Tests, including additional books specifically for 9th-grade students.",
          id: "Buku bank soal untuk menghadapi Ujian Sekolah (US) dan atau Tes Kemampuan Akademik (TKA) tambahan khusus untuk siswa kelas 9.",
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
          en: "Accelerated learning program with condensed material delivery in the first two years (7th and 8th grades), aimed at facilitating and preparing students for exams in the 9th grade.",
          id: "Program percepatan belajar (akselerasi), dengan pemberian materi yang dipadatkan pada 2 tahun pertama (kelas 7 dan 8), yang bertujuan agar lebih memudahkan dan mempersiapkan siswa ketika akan menghadapi ujian di kelas 9 nantinya.",
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
        id: "fac-3-sub-0",
        title: {
          en: "Program Availability",
          id: "Ketersediaan Program",
        },
        description: {
          en: "Currently, the high school program is only available for 10th and 11th grade Science stream.",
          id: "Saat ini, program kelas SMA baru dibuka hanya untuk kelas 10 dan 11 jurusan IPA.",
        },
        thumbnail: "/Logo.png",
      },
      {
        id: "fac-3-sub-1",
        title: {
          en: "Advanced Study Guides",
          id: "Panduan Belajar Lanjutan",
        },
        description: {
          en: "Learning guide modules for science subjects (Biology, Chemistry, Physics) and Mathematics (Advanced and Basic/Compulsory).",
          id: "Modul panduan pembelajaran Modul panduan pembelajaran untuk mata pelajaran IPA (Biologi, Kimia, Fisika) dan Matematika (Lanjutan dan Dasar/wajib)",
        },
        thumbnail: "/Logo.png",
      },
    ],
  },
];

export const testimonials = [
  {
    id: "test-1",
    name: "Videl",
    role: "Alumni SD Istiqamah",
    image: "/Videl_Cropped.png",
    text: "Seneng dan seru belajar di GL, awal awal tegang belajar di sana karena belum kenal lebih deket dengan para tutor di GL tapi setelah lama belajar di sana jadi seruu belajar jadi kerasa bentar banget karena serius tapi asik. Jadi belajar kerasanya seneng, mood bawaannyaa pokonya asik bangett di GL.. Makasih ya para tutor GL udah mau sabar dan  mau di tanya tanyaa terus. Makasih juga gapernah bosen untuk ngingetin di catet yaa, di ulangin lagi yaa, makasih yaaa",
  },
  {
    id: "test-2",
    name: "Haura",
    role: "Alumni SD Istiqamah - Juara 1 Umum",
    image: "/Haura.jpg",
    text: "Awal masuk jujur ngerasa takut, terutama kalau offline, tapi lama kelamaan biasa aja sih karena ada banyak temen jugaa di GL, terus jadi selangkah lebih tau dan ngerti. Kayak mtk jadi lebih gampang karena uda belajar di GL, jadi pas di sekolah kerasa gampang pas belajar/mau ulangan, intinya kebantu banget sih, di GL tuh. Kadang suka mumet karena TO nya banyak, apalagi kalau ditumpuk, huhuu nyesel deh. Tapi overall, aku seneng banget sih, bisa jadi bagian dari GL, apalagi kalo belajar sama Kak Haura. Makasih yaa buat semua yang udah ngajarin di GL."
  },
  {
    id: "test-3",
    name: "Ghaida",
    role: "Alumni SD Istiqamah",
    image: "/Logo.png",
    text: "Sangat menyenangkan les di GL, belajar lebih cepat ngerti. Terlihat nyantai tp serius.. belajar kalau belum ngerti itu di ajarin sampai ngerti.. jadi matematika yang tadinya paling gak suka jadi suka banget. kalau ada ulangan jadi tenang."
  },
  {
    id: "test-4",
    name: "Selma",
    role: "Alumni SD Istiqamah",
    image: "/Logo.png",
    text: "Pertama kali aku di GL aku jadi mood belajar, belajar jadi seru, nilai nya juga meningkat. Pokonya belajar jadi asik, tutor-tutornya seru, asik, dan baikk. Makasih ka Haura, ka Syifa, bu Merry, pa Eko udah sabar ajarin aku, makasih  juga ka mau cerita pengalaman kaka yang bikin aku termotivasi, makasih ya kaa"
  },
  {
    id: "test-5",
    name: "Alif",
    role: "Alumni SD Istiqamah",
    image: "/Logo.png",
    text: "Awal ikut GL seru dan ngebantu banget. Karena TO nya rutin setiap bulan, kadang kalau kelewat jadi numpuk sampai akhirnya ngerasa kawatir takut ketinggalan dan masih banyak kurangnya. Makasi staf-staf GL, udah banyak ngebantu dan buat aku berkembang. "
  },
  {
    id: "test-6",
    name: "Azka",
    role: "Alumni SD Istiqamah",
    image: "/Azka.jpg",
    text: "Seru, metode belajar di GL tidak membosankan, banyak temannya."
  },
  {
    id: "test-7",
    name: "Yasmin",
    role: "Alumni SD Istiqamah",
    image: "/Logo.png",
    text: "Menyenangkan bisa belajar dan mendapatkan banyak ilmu di GL."
  },
  {
    id: "test-8",
    name: "Malika",
    role: "Alumni SD Istiqamah",
    image: "/Malika.jpg",
    text: "Belajar di GL seru, asik, dan oke, banyak temannya, dan tutor-tutornya ramah.",
  },
  {
    id: "test-9",
    name: "Najwa",
    role: "Alumni SD Istiqamah",
    image: "/Logo.png",
    text: "Belajar di GL seru, asik, dan oke, banyak temannya, dan tutor-tutornya ramah."
  },
  {
    id: "test-10",
    name: "Alea",
    role: "Alumni SD Istiqamah",
    image: "/Logo.png",
    text: "Saat belajar di GL, seruu dan cepet paham juga tentang apa yang lagi dipelajari."
  },
  {
    id: "test-11",
    name: "Khansa",
    role: "Alumni SD Istiqamah",
    image: "/Khansa.jpg",
    text: "Belajar di GL menyenangkan, cepat menghafal materinya, pokoknya seru, semangat terus GL!",
  },
  {
    id: "test-12",
    name: "Luna",
    role: "Alumni SD Istiqamah - Ranking 2",
    image: "/Luna.jpg",
    text: "Seru banget, pelajarannya gampang dimengerti. Makasih ya buat Pak Eko, Bu Mery, Kak Haura, dan Kak Syifa udah mau ngajarin aku dan teman-teman aku, semoga staff-staff GL sehat selalu dan terus semangat mengajar anak-anak GL."
  },
  {
    id: "test-13",
    name: "Orang tua Rio",
    role: "Orang tua siswa alumni SD Istiqamah",
    image: "/Logo.png",
    text: "Pengajaran Pak Eko bagus dan bisa dimengerti oleh anak-anak. Ini juga dialami anak saya bisa masuk ke ITB hasil pengajaran dan bimbingannya Pak Eko. Terima kasih, sukses selalu"
  },
  {
    id: "test-14",
    name: "Aisyah",
    role: "Alumni SD Al-Azhar",
    image: "/Logo.png",
    text: "Belajar di GL itu seru banget, aku jadi bisa perkalian, pembagian dan lain lain, terus juga aku bisa menghitung tanpa pake jari, guru gurunya asik, pesannya makasih banget sama Pa Eko, Bu Merry, Ka Syifa, Ka Haura yang udah ngajarin aku 🤍🫰🏻"
  },
  {
    id: "test-15",
    name: "Orang tua Dika dan Ditha",
    role: "Orang tua siswa Alumni SDN Karangpawulang Bandung",
    image: "/Logo.png",
    text: "alhamdulillah, terima kasih untuk bimbingan dan motivasi yang telah diberikan.",
  },
  {
    id: "test-16",
    name: "Orang tua Anis dan Acha",
    role: "Orang tua siswa-siswi Newton International Academy Smash (Qatar)",
    image: "/Logo.png",
    text: "Semoga ilmu yang kakak-kakak ajarkan ke anis dan acha dimudahkan dan tidak bosan dalam membimbing anak-anak, saya sangat terbantu dengan kakak-kakak."
  },
  {
    id: "test-17",
    name: "Orang tua Asyraf",
    role: "Orang tua siswa SMPN 2 Bandung - Ranking 1",
    image: "/Logo.png",
    text: "Bagus, materinya juga jadi lebih cepat paham karena di review terus sama materinya juga lebih cepat dari yang sekolah. Alhamdulilah Asyraf ranking 1, terima kasih bimbingannya kakak-kakak, jazakumullah khairan katsiraan, semoga Allah membalas dengan kebaikan yg berlipat ganda, mohon doanya terus buat Asyraf.",
  }
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
