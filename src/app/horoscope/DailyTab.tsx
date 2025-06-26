'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {zodiacSigns} from '@/data/zodiacSigns';
import { Zodiac } from '@/types/zodiac';
import DailyHoroscopeCard from '@/components/horoscope/DailyHoroscopeCard';

interface HoroscopeItem {
  summary: { zh: string; en: string };
  love: { zh: string; en: string };
  career: { zh: string; en: string };
  wealth: { zh: string; en: string };
  health: { zh: string; en: string };
  luckyNumber: number;
  luckyColor: { zh: string; en: string };
  advice: { zh: string; en: string };
}

const DailyTab = () => {
  const { language } = useLanguage();
  const [horoscopes, setHoroscopes] = useState<Record<string, HoroscopeItem>>({});

  useEffect(() => {
    const fetchHoroscopes = async () => {
      const results: Record<string, HoroscopeItem> = {};

      for (const sign of zodiacSigns) {
        const signEn = sign.nameEn;

        try {
          const res = await fetch(`/api/horoscope/daily?sign=${signEn}`);
          const data = await res.json();
          results[signEn] = data.horoscope;
        } catch (error) {
          console.error(`Failed to fetch horoscope for ${signEn}`, error);
        }
      }

      setHoroscopes(results);
    };

    fetchHoroscopes();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {zodiacSigns.map((sign) => {
        const signEn = sign.nameEn;
        const signZh = sign.nameZh;
        const data = horoscopes[signEn];

        return (
          <div key={signEn}>
            <h2 className="text-xl font-bold text-center text-white mb-2">
              {language === 'zh' ? signZh : signEn}
            </h2>
            {data && <DailyHoroscopeCard data={data} />}
          </div>
        );
      })}
    </div>
  );
};

export default DailyTab;
