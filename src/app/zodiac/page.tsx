'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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

export default function ZodiacPage() {
  const { language } = useLanguage();
  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/zodiac')
      .then((res) => {
        if (!res.ok) {
          throw new Error('API 返回错误');
        }
        return res.json();
      })
      .then((data) => {
        setZodiacSigns(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('数据加载失败，请稍后再试');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="p-8 text-center text-gray-500 text-xl">
        {language === 'zh' ? '正在加载星座数据...' : 'Loading zodiac data...'}
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-8 text-center text-red-500 text-xl">
        {language === 'zh' ? error : 'Failed to load data. Please try again later.'}
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        {language === 'zh' ? '12星座列表' : '12 Zodiac Signs'}
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {zodiacSigns.map((sign) => (
          <li key={sign.name} className="p-4 border rounded shadow hover:shadow-lg transition">
            <Link href={`/zodiac/${sign.nameEn.toLowerCase()}`}>
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {language === 'zh' ? sign.name : sign.nameEn}
                </h2>
                <p>{language === 'zh' ? `日期范围：${sign.dateRange}` : `Date Range: ${sign.dateRangeEn}`}</p>
                <p>{language === 'zh' ? `元素：${sign.element}` : `Element: ${sign.elementEn}`}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
