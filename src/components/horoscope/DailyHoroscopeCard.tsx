'use client'

import { useEffect, useState } from 'react'
import { FaStar, FaHeart, FaLightbulb, FaBriefcase, FaGem, FaHeartbeat, FaQuoteRight, FaCompass, FaClock, FaUserFriends } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'
import { DailyHoroscopeTemplate } from '@/types/horoscope'

type DailyEntry = {
  sign: { zh: string; en: string }
  templates: DailyHoroscopeTemplate[]
}

type Props = {
  zodiac: DailyEntry
}

export default function DailyHoroscopeCard({ zodiac }: Props) {
  const { language } = useLanguage()
  const isZh = language === 'zh'
  const [randomIndex, setRandomIndex] = useState<number | null>(null)

  useEffect(() => {
    const index = Math.floor(Math.random() * zodiac.templates.length)
    setRandomIndex(index)
  }, [zodiac.templates.length])

  if (randomIndex === null) return null

  const daily = zodiac.templates[randomIndex]
  const get = (zh: string, en: string) => (isZh ? zh : en)
  const lucky = daily.lucky_items[0] || {}

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl text-white hover:scale-105 transition-transform duration-300 border border-white/10 space-y-4">
      {/* 标题 */}
      <h3 className="text-xl font-semibold text-center tracking-wide">
        {get(zodiac.sign.zh, zodiac.sign.en)}
      </h3>

      {/* 简要总结 */}
      <p className="text-sm text-white/90 text-center leading-relaxed">
        {get(daily.summary.zh, daily.summary.en)}
      </p>

      {/* 六大领域 */}
      <div className="text-sm space-y-2">
        <div className="flex items-start gap-2">
          <FaHeart className="text-pink-400 mt-1" />
          <span>{get(daily.love.zh, daily.love.en)}</span>
        </div>
        <div className="flex items-start gap-2">
          <FaBriefcase className="text-orange-400 mt-1" />
          <span>{get(daily.career.zh, daily.career.en)}</span>
        </div>
        <div className="flex items-start gap-2">
          <FaGem className="text-yellow-300 mt-1" />
          <span>{get(daily.fortune.zh, daily.fortune.en)}</span>
        </div>
        <div className="flex items-start gap-2">
          <FaHeartbeat className="text-red-400 mt-1" />
          <span>{get(daily.health.zh, daily.health.en)}</span>
        </div>
        <div className="flex items-start gap-2">
          <FaLightbulb className="text-blue-400 mt-1" />
          <span>{get(daily.advice.zh, daily.advice.en)}</span>
        </div>
      </div>

      {/* 幸运元素 */}
      <div className="border-t border-white/10 pt-4 text-sm space-y-2">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          {isZh ? `幸运数字：${lucky.number}` : `Lucky Number: ${lucky.number}`}
        </div>
        <div className="flex items-center gap-2">
          <FaHeart className="text-pink-400" />
          {isZh ? `幸运颜色：${lucky.color}` : `Lucky Color: ${lucky.color}`}
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-sky-400" />
          {isZh ? `幸运时间段：${lucky.time}` : `Lucky Time: ${lucky.time}`}
        </div>
        <div className="flex items-center gap-2">
          <FaCompass className="text-green-400" />
          {isZh ? `幸运方向：${lucky.direction}` : `Lucky Direction: ${lucky.direction}`}
        </div>
        <div className="flex items-center gap-2">
          <FaUserFriends className="text-purple-400" />
          {isZh ? `幸运星座：${lucky.constellation}` : `Lucky Match: ${lucky.constellation}`}
        </div>
      </div>

      {/* 关键词 */}
      <div className="pt-3">
        <div className="flex flex-wrap gap-2">
          {get(daily.keywords.zh.join(','), daily.keywords.en.join(','))
            .split(',')
            .filter(Boolean)
            .map((kw, idx) => (
              <span
                key={idx}
                className="bg-white/10 border border-white/10 text-xs px-2 py-1 rounded-full text-white/80"
              >
                #{kw.trim()}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}
