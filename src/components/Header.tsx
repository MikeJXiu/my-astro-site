'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: { zh: '首页', en: 'Home' } },
    { path: '/zodiac', label: { zh: '星座列表', en: 'Zodiac Signs' } },
    { path: '/horoscope', label: { zh: '今日运势', en: 'Daily Horoscope' } },
    { path: '/compatibility', label: { zh: '配对查询', en: 'Compatibility' } },
    { path: '/natal', label: { zh: '星盘生成', en: 'Natal Chart' } },
    { path: '/dosdonts', label: { zh: '今日宜忌', en: 'Daily Advice' } },
    { path: '/luckyitem', label: { zh: '幸运物推荐', en: 'Lucky Item' } },
    { path: '/tarot', label: { zh: '塔罗占卜', en: 'Tarot Reading' } },
    { path: '/ranking', label: { zh: '排行榜', en: 'Ranking' } },
    { path: '/personality', label: { zh: '星座性格', en: 'Personality' } },
    { path: '/forecast', label: { zh: '星象播报', en: 'Astro Forecast' } },
    { path: '/member', label: { zh: '会员中心', en: 'Membership' } },
  ];

  return (
    <header className="w-full z-50 bg-transparent px-4 sm:px-8 lg:px-12 py-0">
      <div className="header-container flex flex-col items-center w-full max-w-[1600px] mx-auto mb-0 sm:mb-0">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={language === 'zh' ? '/images/logo-zh-nav.png' : '/images/logo-en-nav.png'}
              alt="LanEn Zodiac Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[4rem] sm:h-[6rem] w-auto object-contain drop-shadow-xl"
              priority
            />
          </Link>

          {/* Nav & Language - hidden on mobile */}
          <div className="hidden sm:flex items-center overflow-hidden">
            <nav className="overflow-x-auto hide-scrollbar whitespace-nowrap flex gap-1.5 sm:gap-2 md:gap-3 text-sm sm:text-base drop-shadow-md">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="relative group px-1 sm:px-2 transition"
                  >
                    <span
                      className={`tracking-wide transition duration-200 font-serif ${
                        isActive
                          ? 'text-pink-300 font-bold'
                          : 'text-slate-100 group-hover:text-yellow-200'
                      }`}
                    >
                      {item.label[language]}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 bg-gradient-to-r from-yellow-300 to-pink-400 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Language Button */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-2 py-1 border border-white/50 text-white/80 hover:text-yellow-300 hover:border-yellow-300 text-xs rounded transition flex-shrink-0"
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
