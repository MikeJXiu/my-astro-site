'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface ZodiacInfoCardProps {
  titleZh: string;
  titleEn: string;
  contentZh: string;
  contentEn: string;
}

export default function ZodiacInfoCard({
  titleZh,
  titleEn,
  contentZh,
  contentEn,
}: ZodiacInfoCardProps) {
  const { language } = useLanguage();

  return (
    <div
      className="
        bg-white/10 
        rounded-xl 
        p-4 
        shadow-[0_4px_12px_rgba(255,255,255,0.08)] 
        hover:shadow-[0_6px_18px_rgba(255,255,255,0.12)] 
        transition-shadow duration-300
        text-white text-sm 
        leading-relaxed 
        backdrop-blur
      "
    >
      <h3 className="text-base font-semibold mb-2 text-purple-200">
        {language === 'zh' ? titleZh : titleEn}
      </h3>
      <p className="text-white/90 whitespace-pre-line">
        {language === 'zh' ? contentZh : contentEn}
      </p>
    </div>
  );
}
