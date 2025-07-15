export type LocalizedField = {
  en: string;
  id: string;
  [key: string]: string;
};

export interface HeroContent {
  title: string;
  description: LocalizedField;
  shine: string;
  subtitle: string;
}

export interface ProgramData {
  id: string;
  title: LocalizedField;
  description: LocalizedField;
  thumbnail: string;
}

export interface StaffData {
  id: string;
  title: LocalizedField;
  description: LocalizedField;
  thumbnail: string;
}

export type Activity = {
  id: string;
  title: LocalizedField;
  description: LocalizedField;
  thumbnail: string;
  images: string[];
  category: string;
  schedule: string;
  tags: string[];
};
