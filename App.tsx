import React, { useState, useEffect } from 'react';
import { translations } from './constants';
import { Language } from './types';
import { LanguageSwitch } from './components/LanguageSwitch';
import { Hero } from './components/Hero';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';
import { Phone, Instagram, Calendar, MessageCircle, Mail } from 'lucide-react';

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
          imageUrl="https://picsum.photos/400/400?grayscale" // Placeholder, user would replace
        />

        {/* Primary Actions Stack */}
        <main className="w-full flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          
          <LinkButton 
            href="#booking"
            label={t.bookConsultation}
            subLabel={t.bookSubLabel}
            icon={Calendar}
            variant="primary"
            lang={lang}
          />

          <LinkButton 
            href="tel:+989120000000"
            label={t.callMe}
            icon={Phone}
            variant="secondary"
            lang={lang}
          />
          
          <LinkButton 
            href="https://wa.me/989120000000"
            label={t.whatsapp}
            icon={MessageCircle}
            variant="secondary"
            lang={lang}
          />

          <LinkButton 
            href="https://instagram.com"
            label={t.instagram}
            icon={Instagram}
            variant="secondary"
            lang={lang}
          />
          
          <LinkButton 
            href="mailto:contact@niousha.arch"
            label={t.email}
            icon={Mail}
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