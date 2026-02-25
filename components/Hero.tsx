import React from 'react';
import { Language } from '../types';

interface HeroProps {
  name: string;
  title: string;
  imageUrl: string;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ name, title, imageUrl, lang }) => {
  const isPersian = lang === 'fa';

  return (
    <div className="flex flex-col items-center text-center space-y-5 w-full animate-fade-in">
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-stone-300 to-stone-100 rounded-full opacity-70 group-hover:opacity-100 transition duration-500 blur-sm"></div>
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-stone-50 shadow-xl">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      
      <div className="space-y-2 flex flex-col items-center">
        <h1 className={`text-2xl md:text-3xl font-bold text-stone-800 tracking-tight ${isPersian ? 'font-persian' : 'font-serif'}`}>
          {name}
        </h1>
        <p className={`text-sm md:text-base font-medium text-stone-500 max-w-xs ${isPersian ? 'font-persian' : 'font-sans'}`}>
          {title}
        </p>
      </div>

      <div className="w-12 h-0.5 bg-stone-300 rounded-full my-4" />
    </div>
  );
};