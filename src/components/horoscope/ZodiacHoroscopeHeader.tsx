'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ZodiacHoroscopeHeader = () => {
  const { language } = useLanguage();

  return (
    <div className="text-center px-4 py-1 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-purple-700/30 to-purple-900/30 blur-xl opacity-70 rounded-xl pointer-events-none z-0" />

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300 drop-shadow-lg mb-4">
          {language === 'zh' ? '运势中心' : 'Horoscope Center'}
        </h1>
        <p className="text-lg md:text-xl text-purple-200 drop-shadow-md leading-relaxed">
          {language === 'zh'
            ? '星象的脉动，藏着命运的线索'
            : 'The movement of the stars reveals the keys to destiny.'}
        </p>
      </div>
    </div>
  );
};

export default ZodiacHoroscopeHeader;
