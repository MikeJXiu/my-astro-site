'use client'

import '@/styles/horoscope.css'

import React from 'react'
import type { DailyHoroscopeTemplate } from '@/types/horoscope'
import { useLanguage } from '@/contexts/LanguageContext'
import { getLuckyItems } from '@/lib/horoscope/getLuckyItems'
import { getHoroscopeIndex } from '@/lib/horoscope/getHoroscopeIndex'
import { zodiacSigns } from '@/data/zodiacSigns'
import {
  FaHeart,
  FaBriefcase,
  FaMoneyBillWave,
  FaHeartbeat,
  FaLightbulb,
  FaBell,
  FaStar,
  FaQuoteLeft,
  FaPalette,
  FaCompass,
  FaGem,
  FaClock,
  FaStarOfDavid,
  FaSortNumericUp,
} from 'react-icons/fa'

interface DailyHoroscopeCardProps {
  zodiac: {
    sign: { zh: string; en: string }
    templates: DailyHoroscopeTemplate[]
  }
}

const DailyHoroscopeCard: React.FC<DailyHoroscopeCardProps> = ({ zodiac }) => {
  const { language } = useLanguage()

  // 获取 zodiac 对应的 index
  const signIndex = zodiacSigns.findIndex((z) => z.symbol === zodiac.sign.en)
  const index = getHoroscopeIndex(signIndex, 'daily', zodiac.templates)
  const horoscope = zodiac.templates[index]

  if (!horoscope) return null

  // 用 zodiac.sign.en + 日期做唯一种子，确保每个星座每天不同
  const today = new Date().toISOString().slice(0, 10)
  const seedKey = `${zodiac.sign.en}-${today}`
  const luckyItems = getLuckyItems(seedKey)

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
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="text-purple-200 text-lg">{icon}</div>
          <div className="font-semibold text-purple-100">{label}</div>
        </div>
        <div className="text-white/90 leading-relaxed pl-7">{content}</div>
      </div>
    </div>
  )

  const luckyItemData = [
    {
      icon: <FaPalette className="lucky-item-icon" />,
      label: language === 'zh' ? '幸运颜色' : 'Color',
      value: luckyItems.color[language],
    },
    {
      icon: <FaCompass className="lucky-item-icon" />,
      label: language === 'zh' ? '幸运方向' : 'Direction',
      value: luckyItems.direction[language],
    },
    {
      icon: <FaGem className="lucky-item-icon" />,
      label: language === 'zh' ? '幸运物品' : 'Item',
      value: luckyItems.item[language],
    },
    {
      icon: <FaClock className="lucky-item-icon" />,
      label: language === 'zh' ? '幸运时辰' : 'Time',
      value: luckyItems.time[language],
    },
    {
      icon: <FaStarOfDavid className="lucky-item-icon" />,
      label: language === 'zh' ? '幸运星座' : 'Constellation',
      value: luckyItems.constellation[language],
    },
    {
      icon: <FaSortNumericUp className="lucky-item-icon" />,
      label: language === 'zh' ? '幸运数字' : 'Numbers',
      value: luckyItems.number.join(', '),
    },
  ]

  return (
    <div className="w-full max-w-3xl space-y-6 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 tracking-wide text-purple-100">
        {language === 'zh'
          ? `${zodiac.sign.zh}今日运势`
          : `${zodiac.sign.en} Daily Horoscope`}
      </h2>

      <div className="horoscope-grid">
        <Section icon={<FaQuoteLeft />} label={language === 'zh' ? '概要' : 'Summary'} content={horoscope.summary[language]} />
        <Section icon={<FaHeart />} label={language === 'zh' ? '爱情' : 'Love'} content={horoscope.love[language]} />
        <Section icon={<FaBriefcase />} label={language === 'zh' ? '事业' : 'Career'} content={horoscope.career[language]} />
        <Section icon={<FaMoneyBillWave />} label={language === 'zh' ? '财运' : 'Finance'} content={horoscope.finance[language]} />
        <Section icon={<FaHeartbeat />} label={language === 'zh' ? '健康' : 'Health'} content={horoscope.health[language]} />
        <Section icon={<FaLightbulb />} label={language === 'zh' ? '建议' : 'Advice'} content={horoscope.advice[language]} />
        <Section icon={<FaBell />} label={language === 'zh' ? '提醒' : 'Reminder'} content={horoscope.reminder[language]} />
        <Section icon={<FaStar />} label={language === 'zh' ? '关键词' : 'Keywords'} content={horoscope.keywords[language].join(', ')} />

        {/* 幸运项卡片 */}
        <div className="horoscope-card fade-in px-4 py-3 flex items-center">
          <div className="lucky-items-grid">
            {luckyItemData.map((item, index) => (
              <div key={index} className="lucky-item-line">
                {item.icon}
                <span className="font-semibold">{item.label}：</span>
                <span className="text-white/80">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyHoroscopeCard
