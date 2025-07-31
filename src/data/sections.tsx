import { HeroContent, LocalizedField } from "@/utils/TypeContext";

interface Section {
  id: string;
  title: LocalizedField;
  description: LocalizedField;
}

export const heroContent: HeroContent = {
  title: "Guidance Learning Mr. Eko",
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
    id: "Tim Pengajar dan Staf",
    en: "Teaching Staff and Team",
  },
  description: {
    id: "Staf pengajar kami adalah para profesional berpengalaman dan berdedikasi di bidang pendidikan.",
    en: "Our teaching staff and team are dedicated, experienced professionals in education.",
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

export const contact: Section = {
  id: "contact-1",
  title: {
    id: "Hubungi Kami",
    en: "Contact Us",
  },
  description: {
    en: "Got questions about our learning program? Want to know more about how we help your child succeed? Don't hesitate to contact us!",
    id: "Punya pertanyaan tentang program belajar kami? Ingin tahu lebih banyak tentang cara kami membantu si kecil berprestasi? Jangan sungkan untuk menghubungi kami!",
  },
};

export const contactDetail: Section = {
  id: "contact-detail-1",
  title: {
    id: "Mari Ngobrol!",
    en: "Let's have a Chat!",
  },
  description: {
    id: "Kami siap membantu Anda! Jika ada pertanyaan, saran, atau ingin tahu lebih banyak tentang program bimbingan belajar kami, jangan ragu untuk menghubungi kami. Tim kami akan dengan senang hati merespons dan memberikan informasi yang Anda butuhkan.",
    en: "We are ready to assist you! If you have any questions, suggestions, or want to know more about our tutoring programs, feel free to contact us. Our team will be happy to respond and provide the information you need.",
  },
};

export const contactInfo: Section[] = [
  {
    id: "contact-address",
    title: {
      en: "Address",
      id: "Alamat",
    },
    description: {
      en: "Jl. Pelajar Pejuang 45 no.23B \nLingkar Selatan, Lengkong \nKota Bandung, Jawa Barat",
      id: "Jl. Pelajar Pejuang 45 no.23B \nLingkar Selatan, Lengkong \nKota Bandung, Jawa Barat",
    },
  },
  {
    id: "contact-whatsapp",
    title: {
      en: "WhatsApp",
      id: "WhatsApp",
    },
    description: {
      en: "+62 812 3501 0526",
      id: "+62 812 3501 0526",
    },
  },
  {
    id: "contact-whatsapp-2",
    title: {
      en: "WhatsApp 2",
      id: "WhatsApp 2",
    },
    description: {
      en: "+62 812 3456 7890",
      id: "+62 812 3456 7890",
    },
  },
  {
    id: "contact-email",
    title: {
      en: "Email",
      id: "Email",
    },
    description: {
      en: "guidancelearningmreko@gmail.com",
      id: "guidancelearningmreko@gmail.com",
    },
  },
];

export const contactForm: Section[] = [

    {
      id: "HeadlineContactForm",
      title: {
        id: "Kirim Pesan",
        en: "Send a Message",
    },
    description: {
      id: " ",
      en: " ",
    },
  },
  {
    id: "contact-form-name",
    title: {
      id: "Nama Lengkap",
      en: "Full Name",
    },
    description: {
      id: " ",
      en: " ",
    },
  },
  {
    id: "contact-form-email",
    title: {
      id: "Alamat Email",
      en: "Email Address",
    },
    description: {
      id: " ",
      en: " ",
    },
  },
  {
    id: "contact-form-message",
    title: {
      id: "Pesan",
      en: "Message",
    },
    description: {
      id: " ",
      en: " ",
    },
  }
]
