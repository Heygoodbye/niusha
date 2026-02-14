import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'fa';

export interface TranslationContent {
  name: string;
  title: string;
  bookConsultation: string;
  bookSubLabel: string;
  instagram: string;
  whatsapp: string;
  callMe: string;
  email: string;
  copyright: string;
}

export type Translations = {
  [key in Language]: TranslationContent;
};

export interface LinkButtonProps {
  href: string;
  label: string;
  subLabel?: string;
  icon: LucideIcon;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  lang: Language;
}
