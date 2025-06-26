'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type HoroscopeItem = {
  summary: { zh: string; en: string };
  love: { zh: string; en: string };
  career: { zh: string; en: string };
  wealth: { zh: string; en: string };
  health: { zh: string; en: string };
  luckyNumber: number;
  luckyColor: { zh: string; en: string };
  advice: { zh: string; en: string };
};

interface Props {
  data: HoroscopeItem;
}

const DailyHoroscopeCard: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();

  const t = (field: { zh: string; en: string }) => field[language];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-purple-100 shadow-lg space-y-4 text-sm md:text-base">
      <div>
        <strong>{language === 'zh' ? '概要：' : 'Summary:'}</strong> {t(data.summary)}
      </div>
      <div>
        <strong>{language === 'zh' ? '爱情：' : 'Love:'}</strong> {t(data.love)}
      </div>
      <div>
        <strong>{language === 'zh' ? '事业：' : 'Career:'}</strong> {t(data.career)}
      </div>
      <div>
        <strong>{language === 'zh' ? '财富：' : 'Wealth:'}</strong> {t(data.wealth)}
      </div>
      <div>
        <strong>{language === 'zh' ? '健康：' : 'Health:'}</strong> {t(data.health)}
      </div>
      <div>
        <strong>{language === 'zh' ? '幸运数字：' : 'Lucky Number:'}</strong> {data.luckyNumber}
      </div>
      <div>
        <strong>{language === 'zh' ? '幸运颜色：' : 'Lucky Color:'}</strong> {t(data.luckyColor)}
      </div>
      <div className="italic opacity-80">
        <strong>{language === 'zh' ? '建议：' : 'Advice:'}</strong> {t(data.advice)}
      </div>
    </div>
  );
};

export default DailyHoroscopeCard;
