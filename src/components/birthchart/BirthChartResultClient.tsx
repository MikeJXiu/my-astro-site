'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Sun,
  Moon,
  Heart,
  Star,
  Shield,
  Orbit,
  Globe,
  Gem,
  CloudMoon,
  Satellite,
} from 'lucide-react';

// 获取星座函数
function getZodiacSign(degree: number, isZh: boolean) {
  const index = Math.floor(degree / 30);
  const zodiacSignsZh = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];
  const zodiacSignsEn = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  return isZh ? zodiacSignsZh[index] : zodiacSignsEn[index];
}

// 获取图标
function getPlanetIcon(planetId: number) {
  switch (planetId) {
    case 0: return <Sun className="w-5 h-5 inline mr-1 text-yellow-300" />;
    case 1: return <Moon className="w-5 h-5 inline mr-1 text-blue-200" />;
    case 2: return <Heart className="w-5 h-5 inline mr-1 text-pink-300" />;
    case 3: return <Star className="w-5 h-5 inline mr-1 text-red-400" />;
    case 4: return <Shield className="w-5 h-5 inline mr-1 text-gray-400" />;
    case 5: return <Orbit className="w-5 h-5 inline mr-1 text-yellow-400" />;
    case 6: return <Globe className="w-5 h-5 inline mr-1 text-blue-400" />;
    case 7: return <Gem className="w-5 h-5 inline mr-1 text-purple-300" />;
    case 8: return <CloudMoon className="w-5 h-5 inline mr-1 text-teal-300" />;
    case 9: return <Satellite className="w-5 h-5 inline mr-1 text-indigo-300" />;
    default: return null;
  }
}

// 组件主体
export default function BirthChartResultClient({
  result,
}: {
  result: { planetId: number; longitude: number }[] | null;
}) {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const searchParams = useSearchParams();

  const userName = searchParams?.get('name') || '';
  const birthDate = searchParams?.get('birthDate') || '';
  const birthTime = searchParams?.get('birthTime') || '';
  const birthPlace = searchParams?.get('birthPlace') || '';

  if (!result) {
    return (
      <div className="p-4 py-8 text-center text-red-400 text-lg">
        {isZh ? '无法加载出生数据。' : 'Unable to load birth chart data.'}
      </div>
    );
  }

  return (
    <div className="p-4 text-white">
      {/* 用户信息展示卡片 */}
      <div className="w-full max-w-2xl mx-auto bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow text-left text-white mb-8">
        <p className="text-sm sm:text-base mb-2 leading-relaxed break-words">
          <span className="mr-2">🌟</span>
          {isZh ? '姓名：' : 'Name: '}
          <span className="font-semibold text-yellow-300">{userName || '（无）'}</span>
        </p>
        <p className="text-sm sm:text-base mb-2 leading-relaxed break-words">
          <span className="mr-2">🕰️</span>
          {isZh ? '出生日期：' : 'Birth Date: '}
          <span className="font-medium">{birthDate || '（无）'}</span>
        </p>
        <p className="text-sm sm:text-base mb-2 leading-relaxed break-words">
          <span className="mr-2">⏰</span>
          {isZh ? '出生时间：' : 'Birth Time: '}
          <span className="font-medium">{birthTime || '（无）'}</span>
        </p>
        <p className="text-sm sm:text-base leading-relaxed break-words">
          <span className="mr-2">📍</span>
          {isZh ? '出生地点：' : 'Birth Place: '}
          <span className="font-medium">{birthPlace || '（无）'}</span>
        </p>
      </div>

      {/* 星体分析结果卡片 */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-5xl mx-auto">
        {result.map((planet, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white/10 p-4 rounded-lg shadow hover:shadow-lg transition backdrop-blur-sm"
          >
            <div className="text-left">
              <div className="text-sm sm:text-base font-semibold">
                {getPlanetIcon(planet.planetId)}
                {isZh ? ['太阳', '月亮', '水星', '金星', '火星', '木星', '土星', '天王星', '海王星', '冥王星'][planet.planetId]
                      : ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'][planet.planetId]}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1">
                {isZh ? '所在星座：' : 'Zodiac: '}
                {getZodiacSign(planet.longitude, isZh)}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-right text-gray-200">
              {planet.longitude.toFixed(2)}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
