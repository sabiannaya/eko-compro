"use client";

import { useEffect } from 'react';
import { useLanguage } from '@/utils/LanguageContext';

export default function LanguageSync() {
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  useEffect(() => {
    // Get language from cookie when component mounts
    const getCookie = (name: string): string | null => {
      if (typeof document === 'undefined') return null;
      
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
      }
      return null;
    };

    const savedLanguage = getCookie('language');
    
    if (savedLanguage && savedLanguage !== currentLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, [currentLanguage, setCurrentLanguage]);

  useEffect(() => {
    // Update cookie when language changes
    if (typeof document !== 'undefined') {
      document.cookie = `language=${currentLanguage}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [currentLanguage]);

  return null; 
}