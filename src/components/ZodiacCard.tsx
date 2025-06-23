'use client';
import { ZodiacSign } from '@/types/zodiac';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ZodiacCard({ sign }: { sign: ZodiacSign }) {
  const { language } = useLanguage();
  const iconName = sign.nameEn.toLowerCase();

  return (
    <Link href={`/zodiac/${sign.nameEn.toLowerCase()}`}>
      <div
        className="
          bg-white/10 
          rounded-2xl 
          p-6 
          border border-white/20 
          shadow-[0_8px_20px_rgba(255,255,255,0.08)] 
          hover:scale-[1.03] 
          transition-transform duration-300 
          text-white 
          min-h-[280px] 
          flex flex-col 
          hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]
        "
      >
        <div>
          {/* 图标 + 名称 */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 relative">
              <Image
                src={`/images/zodiac/${iconName}.png`}
                alt={`${sign.name} 图标`}
                fill
                className="object-contain"
              />
            </div>

            <h2
              className="
                text-2xl 
                font-bold 
                bg-gradient-to-r from-yellow-300 to-pink-400 
                bg-clip-text text-transparent 
                drop-shadow-[0_1px_4px_rgba(255,255,255,0.25)]
              "
            >
              {language === 'zh' ? sign.name : sign.nameEn}
            </h2>
          </div>

          {/* 副标题信息 */}
          <div className="text-sm space-y-1 text-white/80 leading-snug">
            <p>
              {language === 'zh' ? '日期范围' : 'Date Range'}：
              {language === 'zh' ? sign.dateRange : sign.dateRangeEn}
            </p>
            <p>
              {language === 'zh' ? '元素' : 'Element'}：
              {language === 'zh' ? sign.element : sign.elementEn}
            </p>
          </div>
        </div>

        {/* 描述文字 */}
        <p
          className="
            text-sm 
            mt-4 
            text-violet-100 
            leading-relaxed 
            tracking-wide
            hover:text-white 
            transition-colors duration-300
          "
        >
          {language === 'zh' ? sign.description : sign.descriptionEn}
        </p>
      </div>
    </Link>
  );
}
