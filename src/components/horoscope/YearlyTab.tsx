'use client'

import { useEffect, useState } from 'react'
import { zodiacSigns } from '@/data/zodiacSigns'
import { getYearlyHoroscopeBySign } from '@/lib/horoscope/getYearlyHoroscopeBySign'
import YearlyCard from './YearlyCard'
import { useLanguage } from '@/contexts/LanguageContext'
import { YearlyHoroscopeTemplate } from '@/types/horoscope'

export default function YearlyTab() {
  const { language } = useLanguage()
  const lang = language === 'zh' ? 'zh' : 'en'
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0].symbol)
  const [currentData, setCurrentData] = useState<YearlyHoroscopeTemplate | null>(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const fetchData = async () => {
      const result = await getYearlyHoroscopeBySign(selectedSign, currentYear)
      setCurrentData(result)
    }
    fetchData()
  }, [selectedSign, currentYear])

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        {lang === 'zh'
          ? `${currentYear}年十二星座年运势`
          : `Yearly Horoscope ${currentYear}`}
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.symbol}
            onClick={() => setSelectedSign(sign.symbol)}
            className={`horoscope-sign-button ${
              selectedSign === sign.symbol
                ? 'horoscope-sign-button-active'
                : 'horoscope-sign-button-inactive'
            }`}
          >
            {lang === 'zh' ? sign.name_zh : sign.name_en}
          </button>
        ))}
      </div>

      {currentData ? (
        <YearlyCard data={currentData} />
      ) : (
        <p className="text-center text-gray-400">
          {lang === 'zh' ? '加载中…' : 'Loading...'}
        </p>
      )}
    </div>
  )
}
