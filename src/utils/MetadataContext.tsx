import { Metadata } from "next";
import { cookies } from "next/headers";
import { MultiLanguageText, SupportedLanguage } from "@/utils/TypeContext";

export async function getPageMetadata(
  title: MultiLanguageText,
  description: MultiLanguageText,
  keywords?: MultiLanguageText
): Promise<Metadata> {
  const cookieStore = await cookies();
  const language = (cookieStore.get("language")?.value ||
    "en") as SupportedLanguage;

  // Fallback to English if the selected language doesn't exist
  const getLocalizedText = (text: MultiLanguageText): string => {
    return text[language] || text.en;
  };

  const localizedTitle = getLocalizedText(title);
  const localizedDescription = getLocalizedText(description);
  const localizedKeywords = keywords ? getLocalizedText(keywords) : undefined;

  return {
    title: localizedTitle,
    description: localizedDescription,
    keywords: localizedKeywords?.split(",").map((k) => k.trim()),
    openGraph: {
      title: localizedTitle,
      description: localizedDescription,
      type: "website",
      locale: language === "en" ? "en_US" : "id_ID",
      siteName: "Guidance Learning Mr.Eko",
      url: "https://yourdomain.com",
    },
    twitter: {
      card: "summary_large_image",
      title: localizedTitle,
      description: localizedDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: {
        "en-US": `https://yourdomain.com?lang=en`,
        "id-ID": `https://yourdomain.com?lang=id`,
      },
    },
  };
}

// Helper function to get supported languages
export function getSupportedLanguages(): SupportedLanguage[] {
  return ["en", "id"];
}

// Helper function to validate language
export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return getSupportedLanguages().includes(lang as SupportedLanguage);
}
