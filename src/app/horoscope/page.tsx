'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HoroscopeItem {
  sign: { zh: string; en: string };
  summary: { zh: string; en: string };
  love: { zh: string; en: string };
  career: { zh: string; en: string };
  wealth: { zh: string; en: string };
  health: { zh: string; en: string };
  luckyNumber: number;
  luckyColor: { zh: string; en: string };
}

export default function HoroscopePage() {
  const { language } = useLanguage();
  const [data, setData] = useState<HoroscopeItem[]>([]);

  useEffect(() => {
    fetch('/api/daily-horoscope')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="flex flex-col items-center text-white p-4">

      <h1 className="text-5xl font-bold mt-10 mb-12 drop-shadow-lg">
        {language === 'zh' ? '每日星座运势' : 'Daily Horoscope'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
        {data.map((item, index) => (
          <div key={index} className="bg-white/20 p-8 rounded-3xl shadow-xl backdrop-blur-lg transition-transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold mb-4">{item.sign[language]}</h2>
            <p className="mb-2"><b>{language === 'zh' ? '综合运势:' : 'Summary:'}</b> {item.summary[language]}</p>
            <p className="mb-2"><b>{language === 'zh' ? '爱情:' : 'Love:'}</b> {item.love[language]}</p>
            <p className="mb-2"><b>{language === 'zh' ? '事业:' : 'Career:'}</b> {item.career[language]}</p>
            <p className="mb-2"><b>{language === 'zh' ? '财富:' : 'Wealth:'}</b> {item.wealth[language]}</p>
            <p className="mb-2"><b>{language === 'zh' ? '健康:' : 'Health:'}</b> {item.health[language]}</p>
            <p className="mt-2"><b>{language === 'zh' ? '幸运数字:' : 'Lucky Number:'}</b> {item.luckyNumber}</p>
            <p><b>{language === 'zh' ? '幸运颜色:' : 'Lucky Color:'}</b> {item.luckyColor[language]}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
