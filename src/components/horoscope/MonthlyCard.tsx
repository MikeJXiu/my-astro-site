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

const MonthlyCard: React.FC<MonthlyCardProps> = ({ sign, data }) => {
  const { language } = useLanguage()

  const Section = ({
    icon,
    label,
    content,
  }: {
    icon: React.ReactNode
    label: string
    content: string
  }) => (
    <div className="horoscope-card fade-in">
      <div className="horoscope-icon">{icon}</div>
      <div>
        <div className="font-semibold mb-1 text-purple-100">{label}</div>
        <div className="text-white/90 leading-relaxed">{content}</div>
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-3xl space-y-6 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 tracking-wide text-purple-100">
        {language === 'zh'
          ? `${sign.zh}每月运势`
          : `${sign.en} Monthly Horoscope`}
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
