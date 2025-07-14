'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const isZh = language === 'zh';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const featureGroups = [
    {
      title: { zh: '🌞 运势中心', en: '🌞 Horoscope Center' },
      colorClass: 'hover:bg-blue-400/20 hover:shadow-blue-400/20',
      features: [
        { path: '/horoscope?tab=daily', label: { zh: '今日运势', en: 'Daily Horoscope' } },
        { path: '/horoscope?tab=monthly', label: { zh: '本月运势', en: 'Monthly Horoscope' } },
        { path: '/horoscope?tab=yearly', label: { zh: '年度运势', en: 'Yearly Horoscope' } },
              ],
    },
    {
      title: { zh: '⭐ 基础服务', en: '⭐ Basic Services' },
      colorClass: 'hover:bg-yellow-400/20 hover:shadow-yellow-400/20',
      features: [
        { path: '/zodiac', label: { zh: '星座列表', en: 'Zodiac Signs' } },
        { path: '/compatibility', label: { zh: '配对查询', en: 'Compatibility Match' } },
        { path: '/personality', label: { zh: '星座性格', en: 'Personality' } },
        { path: '/lucky', label: { zh: '幸运数字', en: 'Lucky Number' } },
        { path: '/ranking', label: { zh: '排行榜', en: 'Ranking' } },
        { path: '/advice', label: { zh: '今日宜忌', en: 'Daily Advice' } },
      ],
    },
    {
      title: { zh: '🔮 高阶占星', en: '🔮 Advanced Astrology' },
      colorClass: 'hover:bg-purple-400/20 hover:shadow-purple-400/20',
      features: [
        { path: '/birthchart', label: { zh: '星盘生成', en: 'Birth Chart' } },
        { path: '/luckyitem', label: { zh: '幸运物推荐', en: 'Lucky Items' } },
        { path: '/astrocast', label: { zh: '星象播报', en: 'Astro Forecast' } },
        { path: '/zodiac-facts', label: { zh: '星座冷知识', en: 'Zodiac Facts' } },
      ],
    },
    {
      title: { zh: '✨ 趣味互动', en: '✨ Fun Zone' },
      colorClass: 'hover:bg-pink-400/20 hover:shadow-pink-400/20',
      features: [
        { path: '/test', label: { zh: '爱情测试', en: 'Love Test' } },
        { path: '/quiz', label: { zh: '星座测评合集', en: 'Zodiac Quizzes' } },
        { path: '/tarot', label: { zh: '塔罗占卜', en: 'Tarot Reading' } },
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white px-4 pt-1 pb-10">
      {!isMobile && (
        <div className="w-full max-w-[900px] mx-auto mt-0 px-1 mb-1">
          <Image
            src={`/images/banner/banner-top-${language}.png`}
            alt="LanEn Zodiac Top Banner"
            width={900}
            height={300}
            className="w-full h-auto object-contain banner-top"
            priority
          />
        </div>
      )}

      <main className={`flex flex-col items-center justify-center ${isMobile ? 'mt-[-4rem] mb-0' : 'mt-2 mb-4'}`}>
        {featureGroups.map((group, index) => {
          const isAdvanced = group.title.zh.includes('高阶');
          const customGrid =
            isAdvanced
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' // 一行四个按钮，移动端两列
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';

          return (
            <section key={index} className="w-full max-w-6xl mb-10">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-left text-yellow-200">
                {language === 'zh' ? group.title.zh : group.title.en}
              </h2>
              <div className={`grid gap-6 ${customGrid}`}>
                {group.features.map((feature) => (
                  <Link
                    key={feature.path}
                    href={feature.path}
                    className={`bg-white/10 p-6 rounded-xl shadow-md text-center text-lg font-medium transition backdrop-blur active:scale-[0.97] active:bg-white/20 ${group.colorClass}`}
                  >
                    {language === 'zh' ? feature.label.zh : feature.label.en}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {!isMobile && (
        <div className="w-full max-w-[900px] mx-auto mt-2 px-2 banner-bottom">
          <Image
            src={`/images/banner/banner-bottom-${language}.png`}
            alt="LanEn Zodiac Bottom Banner"
            width={900}
            height={300}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}
