import React from 'react';
import { Language } from '../types';

interface LanguageSwitchProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="relative flex items-center bg-stone-200/50 backdrop-blur-sm p-1 rounded-full w-24 h-10 shadow-inner" dir="ltr">
      {/* Sliding Background */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out transform ${
          currentLang === 'en' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      
      {/* Buttons */}
      <button
        onClick={() => onToggle('fa')}
        className={`flex-1 relative z-10 text-sm font-medium transition-colors duration-200 font-persian ${
          currentLang === 'fa' ? 'text-stone-800' : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        فارسی
      </button>
      <button
        onClick={() => onToggle('en')}
        className={`flex-1 relative z-10 text-xs font-medium tracking-wide transition-colors duration-200 font-sans ${
          currentLang === 'en' ? 'text-stone-800' : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        EN
      </button>
    </div>
  );
};
