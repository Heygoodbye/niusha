import React from 'react';
import { LinkButtonProps } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const LinkButton: React.FC<LinkButtonProps> = ({ 
  href, 
  label, 
  subLabel, 
  icon: Icon, 
  variant = 'secondary',
  lang 
}) => {
  const isPersian = lang === 'fa';
  
  // Base classes for structure and transition
  const baseClasses = "group relative w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 active:scale-[0.98] overflow-hidden";
  
  // Variant styling
  const variants = {
    primary: "bg-stone-800 text-stone-50 shadow-lg shadow-stone-300/50 hover:bg-stone-900",
    secondary: "bg-white text-stone-800 shadow-sm border border-stone-100 hover:border-stone-300 hover:shadow-md",
    outline: "bg-transparent text-stone-800 border-2 border-stone-200 hover:border-stone-800",
    ghost: "bg-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100/50"
  };

  const Chevron = isPersian ? ChevronLeft : ChevronRight;

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]}`}
    >
      <div className="flex items-center gap-4 z-10">
        <div className={`p-2 rounded-xl transition-colors ${variant === 'primary' ? 'bg-stone-700 group-hover:bg-stone-600' : 'bg-stone-100 group-hover:bg-stone-200'}`}>
          <Icon size={20} strokeWidth={variant === 'primary' ? 2 : 1.5} />
        </div>
        
        <div className="flex flex-col items-start text-start">
          <span className={`text-base md:text-lg font-semibold ${isPersian ? 'font-persian' : 'font-sans'}`}>
            {label}
          </span>
          {subLabel && (
            <span className={`text-xs opacity-70 ${isPersian ? 'font-persian' : 'font-sans'}`}>
              {subLabel}
            </span>
          )}
        </div>
      </div>

      <div className="z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 rtl:-translate-x-2 group-hover:translate-x-0 rtl:group-hover:translate-x-0">
        <Chevron size={18} className="text-current opacity-60" />
      </div>

      {/* Hover Effect Background */}
      {variant !== 'ghost' && (
        <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
      )}
    </a>
  );
};
