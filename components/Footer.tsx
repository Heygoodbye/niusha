import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  copyright: string;
}

export const Footer: React.FC<FooterProps> = ({ lang, copyright }) => {
  const isPersian = lang === 'fa';

  return (
    <footer className="w-full text-center py-6 mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <p className={`text-xs text-stone-400 ${isPersian ? 'font-persian' : 'font-sans'}`}>
        {copyright}
      </p>
      <div className="mt-2 flex justify-center gap-2">
         {/* Subtle ornamental dots */}
         <div className="w-1 h-1 rounded-full bg-stone-300"></div>
         <div className="w-1 h-1 rounded-full bg-stone-300"></div>
         <div className="w-1 h-1 rounded-full bg-stone-300"></div>
      </div>
    </footer>
  );
};
