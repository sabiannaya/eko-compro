import { HeroContent } from "@/utils/TypeContext";
import { LocalizedField } from "@/utils/TypeContext";

interface Section {
  id: string;
  title: LocalizedField;
  description: LocalizedField;
}

export const heroContent: HeroContent = {
  title: "MR. EKO Guidance Learning",
  shine: "SHINE: Cerdas – Berhati – Individu dengan – Etika Mulia",
  subtitle: "Pikiran Cemerlang dengan Nilai Mendalam",
  description: {
    id: "Guidance Learning Mr. Eko merupakan lembaga bimbingan belajar yang telah berdiri sejak tahun 2017, dengan komitmen untuk menjadi mitra belajar terbaik bagi siswa dalam mencapai prestasi akademik dan pembentukan karakter.",
    en: "Guidance Learning Mr. Eko is a tutoring institution established in 2017, committed to being the best learning partner for students in achieving academic excellence and character development.",
  },
};

export const programs: Section = {
  id: "program-1",
  title: {
    id: "Program Unggulan",
    en: "Featured Program",
  },
  description: {
    id: "Program ini dirancang untuk membantu siswa mencapai potensi terbaik mereka.",
    en: "This program is designed to help students reach their best potential.",
  },
};

export const methods: Section = {
  id: "method-1",
  title: {
    id: "Metode Pembelajaran",
    en: "Learning Methods",
  },
  description: {
    id: "Kami menggunakan metode pembelajaran yang inovatif dan efektif.",
    en: "We use innovative and effective learning methods.",
  },
};

export const staffs: Section = {
  id: "staff-1",
  title: {
    id: "Tim Pengajar",
    en: "Teaching Staff",
  },
  description: {
    id: "Tim pengajar kami terdiri dari para profesional berpengalaman di bidangnya.",
    en: "Our teaching staff consists of experienced professionals in their fields.",
  },
};

export const facilities: Section = {
  id: "facility-1",
  title: {
    id: "Fasilitas",
    en: "Facilities",
  },
  description: {
    id: "Kami menyediakan fasilitas yang mendukung proses belajar mengajar.",
    en: "We provide facilities that support the teaching and learning process.",
  },
};

export const testimonials: Section = {
  id: "testimonial-1",
  title: {
    id: "Testimoni",
    en: "Testimonials",
  },
  description: {
    id: "Dengarkan apa kata siswa dan orang tua tentang pengalaman mereka di Guidance Learning Mr. Eko.",
    en: "Hear what students and parents say about their experience at Guidance Learning Mr. Eko.",
  },
};

export const activities: Section = {
  id: "activity-1",
  title: {
    id: "Kegiatan",
    en: "Activities",
  },
  description: {
    id: "Kegiatan kami dirancang untuk memperkaya pengalaman belajar siswa.",
    en: "Our activities are designed to enrich students' learning experiences.",
  },
};
