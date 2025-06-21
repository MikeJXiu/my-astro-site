'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { language } = useLanguage();

  const featureGroups = [
    {
      title: { zh: '⭐ 基础服务', en: '⭐ Basic Services' },
      colorClass: 'hover:bg-yellow-400/20 hover:shadow-yellow-400/20',
      features: [
        { path: '/zodiac', label: { zh: '星座列表', en: 'Zodiac Signs' } },
        { path: '/horoscope', label: { zh: '每日运势', en: 'Daily Horoscope' } },
        { path: '/compatibility', label: { zh: '配对查询', en: 'Compatibility Match' } },
        { path: '/personality', label: { zh: '星座性格', en: 'Personality' } },
        { path: '/lucky', label: { zh: '幸运数字', en: 'Lucky Number' } },
        { path: '/ranking', label: { zh: '排行榜', en: 'Ranking' } },
      ],
    },
    {
      title: { zh: '🔮 高阶占星', en: '🔮 Advanced Astrology' },
      colorClass: 'hover:bg-purple-400/20 hover:shadow-purple-400/20',
      features: [
        { path: '/birthchart', label: { zh: '星盘生成', en: 'Birth Chart' } },
        { path: '/calendar', label: { zh: '运势月历', en: 'Monthly Calendar' } },
        { path: '/advice', label: { zh: '今日宜忌', en: 'Daily Advice' } },
        { path: '/luckyitem', label: { zh: '幸运物推荐', en: 'Lucky Items' } },
        { path: '/astrocast', label: { zh: '星象播报', en: 'Astro Forecast' } },
      ],
    },
    {
      title: { zh: '🌟 趣味互动 & 会员中心', en: '🌟 Fun & Membership' },
      colorClass: 'hover:bg-pink-400/20 hover:shadow-pink-400/20',
      features: [
        { path: '/test', label: { zh: '爱情测试', en: 'Love Test' } },
        { path: '/quiz', label: { zh: '星座测评合集', en: 'Zodiac Quizzes' } },
        { path: '/tarot', label: { zh: '塔罗占卜', en: 'Tarot Reading' } },
        { path: '/celeb', label: { zh: '名人星盘解析', en: 'Celebrity Charts' } },
        { path: '/member', label: { zh: '会员中心', en: 'Membership' } },
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white px-4 pt-1 pb-10">
      {/* 顶部横幅图 */}
      <div className="w-full max-w-[900px] mx-auto mb-4 px-2">
        <Image
          src={`/images/banner/banner-top-${language}.png`}
          alt="LanEn Zodiac Top Banner"
          width={900}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 主体功能按钮区域 */}
      <main className="flex flex-col items-center justify-center">
        {featureGroups.map((group, index) => (
          <section key={index} className="w-full max-w-6xl mb-12">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-left text-yellow-200">
              {group.title[language]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {group.features.map((feature) => (
                <Link
                  key={feature.path}
                  href={feature.path}
                  className={`bg-white/10 p-6 rounded-xl shadow-md text-center text-lg font-medium transition backdrop-blur ${group.colorClass}`}
                >
                  {feature.label[language]}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* 底部横幅图 */}
      <div className="w-full max-w-[900px] mx-auto mt-1 px-2">
        <Image
          src={`/images/banner/banner-bottom-${language}.png`}
          alt="LanEn Zodiac Bottom Banner"
          width={900}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
