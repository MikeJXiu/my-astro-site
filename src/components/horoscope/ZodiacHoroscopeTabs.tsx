'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ZodiacHoroscopeTabs = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'monthly' | 'yearly'>('daily');
  const { language } = useLanguage();

  const labels = {
    daily: { zh: '每日运势', en: 'Daily' },
    monthly: { zh: '每月运势', en: 'Monthly' },
    yearly: { zh: '年度运势', en: 'Yearly' },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'daily':
        return (
          <div className="text-center text-lg mt-4">
            {language === 'zh' ? '这里展示每日星座内容。' : 'Here will be the daily horoscope content.'}
          </div>
        );
      case 'monthly':
        return (
          <div className="text-center text-lg mt-4">
            {language === 'zh' ? '这里展示每月星座内容。' : 'Here will be the monthly horoscope content.'}
          </div>
        );
      case 'yearly':
        return (
          <div className="text-center text-lg mt-4">
            {language === 'zh' ? '这里展示年度星座内容。' : 'Here will be the yearly horoscope content.'}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 px-4 md:px-8">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {(['daily', 'monthly', 'yearly'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all ${
              activeTab === tab
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white/10 text-purple-200 hover:bg-white/20'
            }`}
          >
            {labels[tab][language]}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white/5 rounded-xl shadow-lg p-6 text-center text-purple-100 min-h-[120px] text-lg">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ZodiacHoroscopeTabs;
