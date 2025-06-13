'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

interface ZodiacSign {
  name: string;
  nameEn: string;
  dateRange: string;
  dateRangeEn: string;
  element: string;
  elementEn: string;
  description: string;
  descriptionEn: string;
}

export default function ZodiacDetailClient({ sign }: { sign: string }) {
  const { language } = useLanguage();
  const [zodiac, setZodiac] = useState<ZodiacSign | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/zodiac/${sign}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('API 返回错误');
        }
        return res.json();
      })
      .then((data) => {
        setZodiac(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('数据加载失败，请稍后再试');
        setLoading(false);
      });
  }, [sign]);

  if (loading) {
    return (
      <main className="p-8 text-center text-gray-500 text-xl">
        {language === 'zh' ? '正在加载...' : 'Loading...'}
      </main>
    );
  }

  if (error || !zodiac) {
    return (
      <main className="p-8 text-center text-red-500 text-xl">
        {language === 'zh' ? '数据加载失败，请稍后再试' : 'Failed to load data. Please try again later.'}
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        {language === 'zh' ? zodiac.name : zodiac.nameEn}
      </h1>
      <p className="mb-2">
        {language === 'zh' ? `日期范围：${zodiac.dateRange}` : `Date Range: ${zodiac.dateRangeEn}`}
      </p>
      <p className="mb-2">
        {language === 'zh' ? `元素：${zodiac.element}` : `Element: ${zodiac.elementEn}`}
      </p>
      <p>{language === 'zh' ? zodiac.description : zodiac.descriptionEn}</p>
    </main>
  );
}
