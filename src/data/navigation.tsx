import { LocalizedField } from "@/utils/TypeContext";

interface Item {
  title: LocalizedField;
  href: string;
}

export const navItems: Item[] = [
  {
    title: {
      en: "Home",
      id: "Beranda",
    },
    href: "/",
  },
  {
    title: {
      en: "About Us",
      id: "Tentang Kami",
    },
    href: "/about",
  },
  {
    title: {
      en: "Programs",
      id: "Program",
    },
    href: "/program",
  },
  {
    title: {
      en: "Contact Us",
      id: "Kontak Kami",
    },
    href: "/contact",
  },
];

export const legalItems: Item[] = [
  {
    title: {
      en: "Privacy Policy",
      id: "Kebijakan Privasi",
    },
    href: "/privacy-policy",
  },
  {
    title: {
      en: "Terms of Service",
      id: "Syarat Layanan",
    },
    href: "/terms-of-service",
  },
  {
    title: {
      en: "Cookie Policy",
      id: "Kebijakan Cookie",
    },
    href: "/cookie-policy",
  },
];
