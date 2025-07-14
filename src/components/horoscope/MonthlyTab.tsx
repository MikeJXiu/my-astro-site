'use client'

import { useEffect, useState } from 'react'
import { zodiacSigns } from '@/data/zodiacSigns'
import { useLanguage } from '@/contexts/LanguageContext'
import { getMonthlyHoroscopeBySign } from '@/lib/horoscope/getMonthlyHoroscopeBySign'
import MonthlyCard from './MonthlyCard'
import type { MonthlyHoroscopeTemplate } from '@/types/horoscope'

const MonthlyTab = () => {
  const { language } = useLanguage()
  const [selectedSign, setSelectedSign] = useState('cancer')
  const [horoscopeData, setHoroscopeData] = useState<MonthlyHoroscopeTemplate | null>(null)

  useEffect(() => {
    const loadHoroscope = async () => {
      const result = await getMonthlyHoroscopeBySign(selectedSign)
      setHoroscopeData(result)
    }

    loadHoroscope()
  }, [selectedSign])

  const signObj = zodiacSigns.find((z) => z.symbol === selectedSign)

  const currentData =
    horoscopeData && signObj
      ? {
          sign: {
            zh: signObj.name_zh,
            en: signObj.name_en,
          },
          templates: [horoscopeData],
        }
      : undefined

  const getText = (zh: string, en: string) => (language === 'zh' ? zh : en)

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* 星座选择按钮 */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 mt-4">
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
            {getText(sign.name_zh, sign.name_en)}
          </button>
        ))}
      </div>

      {/* 运势展示卡片 */}
      {currentData ? (
        <MonthlyCard sign={currentData.sign} data={currentData.templates[0]} />
      ) : (
        <p className="text-sm text-white mt-4">
          {language === 'zh' ? '暂无数据' : 'No data available'}
        </p>
      )}
    </div>
  )
}

export default MonthlyTab
