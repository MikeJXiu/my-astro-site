'use client'

import '@/styles/horoscope.css'
import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  FaQuoteLeft,
  FaHeart,
  FaBriefcase,
  FaMoneyBillWave,
  FaHeartbeat,
  FaLightbulb,
  FaBell,
  FaStar,
} from 'react-icons/fa'
import type { MonthlyHoroscopeTemplate } from '@/types/horoscope'

interface MonthlyCardProps {
  sign: { zh: string; en: string }
  data: MonthlyHoroscopeTemplate
}

// 中文月份数组
const chineseMonths = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
]

// 英文月份数组
const englishMonths = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const MonthlyCard: React.FC<MonthlyCardProps> = ({ sign, data }) => {
  const { language } = useLanguage()
  const currentMonthIndex = new Date().getMonth()
  const monthText =
    language === 'zh' ? chineseMonths[currentMonthIndex] : englishMonths[currentMonthIndex]

  const Section = ({
    icon,
    label,
    content,
  }: {
    icon: React.ReactNode
    label: string
    content: string
  }) => (
    <div className="horoscope-card fade-in flex items-start gap-3">
      <div className="horoscope-icon mt-1">{icon}</div>
      <div>
        <div className="font-semibold mb-1 text-purple-100 text-left leading-snug">
          {label}
        </div>
        <div className="text-white/90 leading-relaxed text-left">{content}</div>
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-3xl space-y-6 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 tracking-wide text-purple-100">
        {language === 'zh'
          ? `${sign.zh}${monthText}运势`
          : `${sign.en} ${monthText} Horoscope`}
      </h2>

      <div className="horoscope-grid">
        <Section
          icon={<FaQuoteLeft />}
          label={language === 'zh' ? '概要' : 'Summary'}
          content={data.summary[language]}
        />
        <Section
          icon={<FaHeart />}
          label={language === 'zh' ? '爱情' : 'Love'}
          content={data.love[language]}
        />
        <Section
          icon={<FaBriefcase />}
          label={language === 'zh' ? '事业' : 'Career'}
          content={data.career[language]}
        />
        <Section
          icon={<FaMoneyBillWave />}
          label={language === 'zh' ? '财运' : 'Finance'}
          content={data.finance[language]}
        />
        <Section
          icon={<FaHeartbeat />}
          label={language === 'zh' ? '健康' : 'Health'}
          content={data.health[language]}
        />
        <Section
          icon={<FaLightbulb />}
          label={language === 'zh' ? '建议' : 'Advice'}
          content={data.advice[language]}
        />
        <Section
          icon={<FaBell />}
          label={language === 'zh' ? '提醒' : 'Reminder'}
          content={data.reminder[language]}
        />
        <Section
          icon={<FaStar />}
          label={language === 'zh' ? '关键词' : 'Keywords'}
          content={data.keywords[language].join(', ')}
        />
      </div>
    </div>
  )
}

export default MonthlyCard
