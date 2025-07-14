'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { zodiacSigns } from '@/data/zodiacSigns'
import { getDailyHoroscopeBySign } from '@/lib/horoscope/getDailyHoroscopeBySign'
import DailyHoroscopeCard from './DailyHoroscopeCard'
import type { DailyHoroscopeTemplate } from '@/types/horoscope'

const DailyTab = () => {
  const { language } = useLanguage()
  const [selectedSign, setSelectedSign] = useState('cancer')
  const [horoscopeData, setHoroscopeData] = useState<DailyHoroscopeTemplate | null>(null)

  // 加载当前星座的运势
  useEffect(() => {
    const loadHoroscope = async () => {
      const result = await getDailyHoroscopeBySign(selectedSign)
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

  return (
    <div className="flex flex-col items-center justify-center">
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
            {language === 'zh' ? sign.name_zh : sign.name_en}
          </button>
        ))}
      </div>

      {/* 渲染运势卡片 */}
      {currentData ? (
        <DailyHoroscopeCard zodiac={currentData} />
      ) : (
        <div className="text-white text-sm mt-4">
          {language === 'zh' ? '暂无数据' : 'No data available'}
        </div>
      )}
    </div>
  )
}

export default DailyTab
