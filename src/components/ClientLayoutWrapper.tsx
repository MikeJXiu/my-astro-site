'use client';

import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ClientHeader />
      {children}
    </LanguageProvider>
  );
}

function ClientHeader() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">星座网站</h1>
        <nav className="space-x-4 flex items-center">
          <Link href="/">首页</Link>
          <Link href="/zodiac">星座列表</Link>
          <button
            onClick={toggleLanguage}
            className="ml-4 bg-white text-purple-600 px-2 py-1 rounded"
          >
            {language === 'zh' ? '切换为 English' : 'Switch to 中文'}
          </button>
        </nav>
      </div>
    </header>
  );
}
