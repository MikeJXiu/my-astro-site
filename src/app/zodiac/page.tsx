'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ZodiacSign } from '@/types/zodiac';
import ZodiacCard from '@/components/ZodiacCard';

export default function ZodiacPage() {
  const { language } = useLanguage();
  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/zodiac')
      .then((res) => res.json())
      .then(setZodiacSigns)
      .catch(() => setError('数据加载失败，请稍后再试'));
  }, []);

  return (
    <div className="min-h-screen pt-2 pb-4 px-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* 主标题 */}
        <h1
          className="
            text-3xl md:text-4xl font-extrabold leading-snug
            bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent
            drop-shadow-[0_1px_6px_rgba(255,255,255,0.35)]
            tracking-wide mt-2 mb-4 text-center
          "
        >
          {language === 'zh' ? '12星座列表' : '12 Zodiac Signs'}
        </h1>

        {/* 精致分割线 */}
        <div className="flex justify-center my-4">
          <div className="relative w-[95%] max-w-[900px] h-6">
            {/* 左细线 */}
            <div className="absolute top-1/2 left-0 w-[calc(50%-14px)] h-px bg-white opacity-30 transform -translate-y-1/2" />
            {/* 星星 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-80 text-base">
              ★
            </div>
            {/* 右细线 */}
            <div className="absolute top-1/2 right-0 w-[calc(50%-14px)] h-px bg-white opacity-30 transform -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* 星座卡片列表 */}
      {error ? (
        <p className="text-red-500 text-center mt-8">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-4">
          {zodiacSigns.map((sign, index) => (
            <ZodiacCard key={index} sign={sign} />
          ))}
        </div>
      )}
    </div>
  );
}
