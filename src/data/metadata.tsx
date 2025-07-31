import { PageMetadata } from "@/utils/TypeContext";

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: {
      en: "GL MR. EKO - Home Page",
      id: "GL MR. EKO - Halaman Utama",
    },
    description: {
      en: "Welcome to Guidance Learning Mr. Eko, where we nurture brighter minds with deeper values.",
      id: "Selamat datang di Guidance Learning Mr. Eko, tempat kami membina pikiran yang lebih cerah dengan nilai-nilai yang lebih dalam.",
    },
    keywords: {
      en: "education, guidance, learning, tutoring, academic support, private tutoring",
      id: "pendidikan, bimbingan, pembelajaran, les privat, dukungan akademik, bimbel",
    },
  },
  about: {
    title: {
      en: "GL MR. EKO - About Us",
      id: "GL MR. EKO - Tentang Kami",
    },
    description: {
      en: "Learn more about our mission, vision, and dedicated team at Guidance Learning Mr. Eko.",
      id: "Pelajari lebih lanjut tentang misi, visi, dan tim yang berdedikasi di Guidance Learning Mr. Eko.",
    },
    keywords: {
      en: "about us, mission, vision, team, educational philosophy",
      id: "tentang kami, misi, visi, tim, filosofi pendidikan",
    },
  },
  contact: {
    title: {
      en: "GL MR. EKO - Contact Us",
      id: "GL MR. EKO - Hubungi Kami",
    },
    description: {
      en: "Get in touch with us for inquiries, support, or feedback at Guidance Learning Mr. Eko.",
      id: "Hubungi kami untuk pertanyaan, dukungan, atau umpan balik di Guidance Learning Mr. Eko.",
    },
    keywords: {
      en: "contact, support, inquiries, feedback, educational services",
      id: "kontak, dukungan, pertanyaan, umpan balik, layanan pendidikan",
    },
  },
};

export function getPageMetadataByKey(key: string): PageMetadata | null {
  return pageMetadata[key] || null;
}
