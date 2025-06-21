'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const text =
    language === 'zh'
      ? '© 2025 蓝恩星语 · 连接星辰，探索命运'
      : '© 2025 LanEn Zodiac · Connect with the stars and explore your destiny';

  return (
    <div className="w-full flex flex-col items-center mt-2 px-4">
      {/* 渐变星光横线 */}
      <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />

      {/* Footer 内容 + 下边距 */}
      <footer className="text-center text-sm text-[#ddcbaa] leading-relaxed tracking-wide max-w-xl mb-6">
        {text}
      </footer>
    </div>
  );
}
