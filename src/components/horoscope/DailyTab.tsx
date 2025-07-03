'use client'

import { useEffect, useState } from 'react'
import { getDailyHoroscopeBySign } from '@/lib/horoscope/getDailyHoroscopeBySign'
import { DailyHoroscopeTemplate } from '@/types/horoscope'
import DailyHoroscopeCard from '@/components/horoscope/DailyHoroscopeCard'
import { zodiacSigns } from '@/data/zodiacSigns'
import { useLanguage } from '@/contexts/LanguageContext'

type DailyEntry = {
  sign: { zh: string; en: string }
  templates: DailyHoroscopeTemplate[]
}

export default function DailyTab() {
  const { language } = useLanguage()
  const isZh = language === 'zh'
  const [data, setData] = useState<DailyEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const results: DailyEntry[] = []

      for (const sign of zodiacSigns) {
        // ✅ 这里是修复关键：不是数组
        const daily = await getDailyHoroscopeBySign(sign.symbol) as DailyHoroscopeTemplate | null

        if (daily) {
          results.push({
            sign: { zh: sign.name_zh, en: sign.name_en },
            templates: [daily],
          })
        }
      }

      setData(results)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-20 text-white text-lg tracking-wide">
        {isZh ? '加载今日运势中...' : 'Loading daily horoscopes...'}
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
        {isZh ? '今日运势' : 'Daily Horoscope'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((entry) => (
          <DailyHoroscopeCard key={entry.sign.en} zodiac={entry} />
        ))}
      </div>
    </div>
  )
}
