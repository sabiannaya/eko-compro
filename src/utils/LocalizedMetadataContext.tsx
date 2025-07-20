"use client";

import { useLanguage } from "@/utils/LanguageContext";
import { MultiLanguageText, SupportedLanguage } from "@/utils/TypeContext";

export function useLocalizedMetadata() {
  const { currentLanguage } = useLanguage();

  const getLocalizedText = (text: MultiLanguageText): string => {
    const lang = currentLanguage as SupportedLanguage;
    return text[lang] || text.en;
  };

  return { getLocalizedText };
}