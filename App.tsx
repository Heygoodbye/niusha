import React, { useState, useEffect } from 'react';
import { translations } from './constants';
import { Language } from './types';
import { LanguageSwitch } from './components/LanguageSwitch';
import { Hero } from './components/Hero';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';
import { Phone, Instagram, Calendar } from 'lucide-react';
import logo from './monera-logo.jpg';

const App: React.FC = () => {
  // Default to Persian (fa)
  const [lang, setLang] = useState<Language>('fa');

  // Handle Document Direction and Language Attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang];

  return (
    <div className={`min-h-screen w-full flex flex-col items-center relative overflow-hidden transition-colors duration-500 bg-stone-50`}>
      
      {/* Background Decor Elements - Subtle Architectural Lines */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-stone-200 to-transparent"></div>
         <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-stone-200 to-transparent"></div>
      </div>

      <div className="z-10 w-full max-w-md px-6 py-8 md:py-12 flex flex-col items-center gap-8 min-h-screen">
        
        {/* Top Bar */}
        <div className="w-full flex justify-end">
          <LanguageSwitch currentLang={lang} onToggle={setLang} />
        </div>

        {/* Hero Section */}
       <Hero 
  lang={lang}
  name={t.name}
  title={t.title}
  imageUrl={logo}
/>

        {/* Primary Actions Stack */}
        <main className="w-full flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          
          <LinkButton 
            href="https://wa.me/989197753144?text=%D8%B3%D9%84%D8%A7%D9%85%0A%D8%A7%D8%B2%20%D8%B7%D8%B1%D9%81%20%D8%B3%D8%A7%DB%8C%D8%AA%20%D9%85%D9%88%D9%86%D8%B1%D8%A7%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%B1%D8%B2%D8%B1%D9%88%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%D8%AF%D9%85.%0A%D9%84%D8%B7%D9%81%D8%A7%D9%8B%20%D8%AA%D8%A7%DB%8C%D9%85%E2%80%8C%D9%87%D8%A7%DB%8C%20%D8%AE%D8%A7%D9%84%DB%8C%20%D8%B1%D9%88%20%D8%A7%D8%B9%D9%84%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%DA%A9%D9%86%DB%8C%D8%AF%D8%9F%0A%D8%B3%D9%BE%D8%A7%D8%B3%DA%AF%D8%B2%D8%A7%D8%B1%D9%85"
            label={t.bookConsultation}
            subLabel={t.bookSubLabel}
            icon={Calendar}
            variant="primary"
            lang={lang}
          />

          <LinkButton 
            href="tel:+989907081120"
            label={t.callMe}
            icon={Phone}
            variant="secondary"
            lang={lang}
          />

          <LinkButton 
            href="https://www.instagram.com/moneraa_arch/"
            label={t.instagram}
            icon={Instagram}
            variant="secondary"
            lang={lang}
          />

        </main>

        <div className="flex-grow" />

        {/* Footer */}
        <Footer lang={lang} copyright={t.copyright} />
      </div>
    </div>
  );
};

export default App;
