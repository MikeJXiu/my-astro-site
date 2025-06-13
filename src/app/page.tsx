'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-purple-700">
          {language === 'zh' ? '欢迎来到 Mike 的星座世界' : "Welcome to Mike's Zodiac World"}
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {language === 'zh'
            ? '探索12星座的性格特征、配对分析、每日运势以及更多有趣内容。'
            : 'Discover personality traits, compatibility analysis, daily horoscope and much more for all 12 zodiac signs.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/zodiac">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg shadow-md transition">
              {language === 'zh' ? '查看星座列表' : 'View Zodiac List'}
            </button>
          </Link>

          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg text-lg shadow-md hover:bg-purple-50 transition">
            {language === 'zh' ? '每日运势 (开发中)' : 'Daily Horoscope (Coming Soon)'}
          </button>
        </div>
      </div>

      <footer className="mt-16 text-sm text-gray-400">
        &copy; 2025 Mike Xiu. All rights reserved.
      </footer>
    </main>
  );
}
