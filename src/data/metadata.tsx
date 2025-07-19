import { PageMetadata } from "@/utils/TypeContext";

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: {
      en: "MR. EKO Guidance Learning - Home Page",
      id: "MR. EKO Guidance Learning - Halaman Utama",
    },
    description: {
      en: "Welcome to MR. EKO Guidance Learning, where we nurture brighter minds with deeper values.",
      id: "Selamat datang di MR. EKO Guidance Learning, tempat kami membina pikiran yang lebih cerah dengan nilai-nilai yang lebih dalam.",
    },
    keywords: {
      en: "education, guidance, learning, tutoring, academic support, private tutoring",
      id: "pendidikan, bimbingan, pembelajaran, les privat, dukungan akademik, bimbel",
    },
  },
  about: {
    title: {
      en: "About Us - MR. EKO Guidance Learning",
      id: "Tentang Kami - MR. EKO Guidance Learning",
    },
    description: {
      en: "Learn more about our mission, vision, and dedicated team at MR. EKO Guidance Learning.",
      id: "Pelajari lebih lanjut tentang misi, visi, dan tim yang berdedikasi di MR. EKO Guidance Learning.",
    },
    keywords: {
      en: "about us, mission, vision, team, educational philosophy",
      id: "tentang kami, misi, visi, tim, filosofi pendidikan",
    },
  },
};

export function getPageMetadataByKey(key: string): PageMetadata | null {
  return pageMetadata[key] || null;
}