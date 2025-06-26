'use client';

import React from 'react';
import ZodiacHoroscopeHeader from '@/components/horoscope/ZodiacHoroscopeHeader';
import ZodiacHoroscopeTabs from '@/components/horoscope/ZodiacHoroscopeTabs';

const HoroscopePage = () => {
  return (
    <div className="min-h-screen bg-[url('/images/background-stars.jpg')] bg-cover bg-center text-white pb-12">
      {/* 顶部横幅标题 */}
      <ZodiacHoroscopeHeader />

      {/* 标签切换区域 */}
      <ZodiacHoroscopeTabs />
    </div>
  );
};

export default HoroscopePage;
