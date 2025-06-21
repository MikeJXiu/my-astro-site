'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type ZodiacSign = {
  name: string;
  nameEn: string;
  dateRange: string;
  dateRangeEn: string;
  element: string;
  elementEn: string;
  description: string;
  descriptionEn: string;
};

export default function ZodiacPage() {
  const { language } = useLanguage();
  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/zodiac')
      .then((res) => res.json())
      .then((data) => setZodiacSigns(data))
      .catch(() => setError('数据加载失败，请稍后再试'));
  }, []);

  return (
    <div className="min-h-screen py-16 px-4">
      <h1 className="text-3xl font-bold mb-12 text-center text-white drop-shadow-lg">
        {language === 'zh' ? '12星座列表' : '12 Zodiac Signs'}
      </h1>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {zodiacSigns.map((sign, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 text-white">
                {language === 'zh' ? sign.name : sign.nameEn}
              </h2>
              <p className="mb-1 text-white">
                {language === 'zh' ? '日期范围' : 'Date Range'}:{' '}
                {language === 'zh' ? sign.dateRange : sign.dateRangeEn}
              </p>
              <p className="mb-1 text-white">
                {language === 'zh' ? '元素' : 'Element'}:{' '}
                {language === 'zh' ? sign.element : sign.elementEn}
              </p>
              <p className="mt-3 text-sm text-white/90 leading-relaxed">
                {language === 'zh' ? sign.description : sign.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
