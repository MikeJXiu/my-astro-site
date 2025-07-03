'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { zodiacSigns } from '@/data/zodiacSigns'
import type { MonthlyHoroscopeTemplate } from '@/types/horoscope'
import { getMonthlyHoroscopeBySign } from '@/lib/horoscope/getMonthlyHoroscopeBySign'
import MonthlyCard from './MonthlyCard'

export default function MonthlyTab() {
  const { language } = useLanguage()
  const [selectedSign, setSelectedSign] = useState('aries')
  const [horoscope, setHoroscope] = useState<MonthlyHoroscopeTemplate[]>([])

  const currentSign = zodiacSigns.find(s => s.symbol === selectedSign)

  useEffect(() => {
    async function load() {
      const result = await getMonthlyHoroscopeBySign(selectedSign)
      setHoroscope(result)
    }
    load()
  }, [selectedSign])

  return (
    <div>
      {/* 星座切换按钮 */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.symbol}
            onClick={() => setSelectedSign(sign.symbol)}
            className={`px-4 py-1 rounded-full text-sm border transition ${
              selectedSign === sign.symbol
                ? 'bg-purple-600 text-white border-purple-600'
                : 'bg-white text-purple-600 border-purple-300'
            }`}
          >
            {language === 'zh' ? sign.name_zh : sign.name_en}
          </button>
        ))}
      </div>

      {/* 显示月运势卡片 */}
      {horoscope.length > 0 && currentSign ? (
        <MonthlyCard data={horoscope[0]} sign={currentSign} />
      ) : (
        <p className="text-gray-400 text-center mt-8">
          {language === 'zh' ? '暂无数据' : 'No data available.'}
        </p>
      )}
    </div>
  )
}
