"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/utils/LanguageContext";

export default function LanguageSync() {
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const isInitialized = useRef(false);

  useEffect(() => {
    // Only run on mount to get initial language from cookie
    if (!isInitialized.current) {
      const getCookie = (name: string): string | null => {
        if (typeof document === "undefined") return null;

        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
          return parts.pop()?.split(";").shift() || null;
        }
        return null;
      };

      const savedLanguage = getCookie("language");

      if (savedLanguage && savedLanguage !== currentLanguage) {
        setCurrentLanguage(savedLanguage);
      }

      isInitialized.current = true;
    }
  }, []); // Remove dependencies to prevent loop

  useEffect(() => {
    // Only update cookie when language changes and component is initialized
    if (isInitialized.current && typeof document !== "undefined") {
      document.cookie = `language=${currentLanguage}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [currentLanguage]);

  return null;
}
