'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import getHoroscopeIndex from '@/lib/horoscope/getHoroscopeIndex'
import { getLuckyItems } from '@/lib/horoscope/getLuckyItems'

import type { MonthlyHoroscopeTemplate } from '@/types/horoscope'
import type { ZodiacDetail } from '@/types/zodiacDetail'

interface Props {
  sign: ZodiacDetail
  data: MonthlyHoroscopeTemplate
}

export default function MonthlyCard({ sign, data }: Props) {
  const { language } = useLanguage()
  const isZh = language === 'zh'

  const [lucky, setLucky] = useState<{
    color: string
    number: string
    date: string
    constellation: string
  } | null>(null)

  useEffect(() => {
    const month = new Date().getMonth() + 1
    const seed = Date.now() + month * 100000
    const pool = getLuckyItems(sign.symbol)
    const index = getHoroscopeIndex(sign.symbol, seed, pool)
    const selected = pool[index]

    if (selected) {
      setLucky({
        color: isZh ? selected.color.zh : selected.color.en,
        number: selected.number.toString(),
        date: selected.date,
        constellation: isZh ? selected.constellation.zh : selected.constellation.en,
      })
    }
  }, [sign.symbol, isZh])

  const sectionTitle = (zh: string, en: string) => (
    <h3 className="font-semibold text-lg mt-4 mb-1 text-purple-200">
      {isZh ? zh : en}
    </h3>
  )

  const sectionText = (zh: string, en: string) => (
    <p className="text-sm text-white leading-relaxed whitespace-pre-wrap">
      {isZh ? zh : en}
    </p>
  )

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-3xl mx-auto mt-6 border border-white/20">
      {sectionTitle('整体运势', 'Monthly Summary')}
      {sectionText(data.summary.zh, data.summary.en)}

      {sectionTitle('事业', 'Career')}
      {sectionText(data.career.zh, data.career.en)}

      {sectionTitle('爱情', 'Love')}
      {sectionText(data.love.zh, data.love.en)}

      {sectionTitle('财运', 'Finance')}
      {sectionText(data.finance.zh, data.finance.en)}

      {sectionTitle('健康', 'Health')}
      {sectionText(data.health.zh, data.health.en)}

      {sectionTitle('建议', 'Advice')}
      {sectionText(data.advice.zh, data.advice.en)}

      {sectionTitle('提醒', 'Reminder')}
      {sectionText(data.reminder.zh, data.reminder.en)}

      {sectionTitle('关键词', 'Keywords')}
      {sectionText(data.keywords.zh.join(' / '), data.keywords.en.join(' / '))}

      {lucky && (
        <>
          {sectionTitle('本月幸运项', 'Lucky Items This Month')}
          <p className="text-sm text-white leading-relaxed whitespace-pre-wrap">
            {isZh ? '幸运颜色：' : 'Lucky Color: '}
            {lucky.color}
            <br />
            {isZh ? '幸运数字：' : 'Lucky Number: '}
            {lucky.number}
            <br />
            {isZh ? '幸运日期：' : 'Lucky Date: '}
            {lucky.date}
            <br />
            {isZh ? '幸运星座：' : 'Lucky Constellation: '}
            {lucky.constellation}
          </p>
        </>
      )}
    </div>
  )
}
