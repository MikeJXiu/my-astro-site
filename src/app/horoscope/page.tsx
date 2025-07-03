'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ZodiacHoroscopeTabs from '@/components/horoscope/ZodiacHoroscopeTabs';
import DailyTab from '@/components/horoscope/DailyTab';
import MonthlyTab from '@/components/horoscope/MonthlyTab';
import YearlyTab from '@/components/horoscope/YearlyTab';

export default function HoroscopePage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'daily' | 'monthly' | 'yearly'>('monthly'); // 默认显示 Monthly

  const renderTabContent = () => {
    if (activeTab === 'daily') return <DailyTab />;
    if (activeTab === 'monthly') return <MonthlyTab />;
    if (activeTab === 'yearly') return <YearlyTab />;
    return null;
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-10">
      <h1 className="text-center text-4xl font-bold mb-6 text-white">
        {language === 'zh' ? '每日 / 每月 / 每年运势' : 'Daily / Monthly / Yearly Horoscope'}
      </h1>

      <ZodiacHoroscopeTabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="mt-10">{renderTabContent()}</div>
    </div>
  );
}
