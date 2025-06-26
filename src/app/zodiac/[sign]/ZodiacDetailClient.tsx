'use client'

import { useParams } from 'next/navigation'
import { zodiacSigns } from '@/data/zodiacSigns'
import styles from '@/styles/ZodiacDetailClient.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function ZodiacDetailClient() {
  const { sign } = useParams()
  const { language } = useLanguage()
  const isZh = language === 'zh'

  const input = sign?.toString().toLowerCase()

  const zodiac = zodiacSigns.find(
    (item) =>
      item.symbol.toLowerCase() === input ||
      item.name_en.toLowerCase() === input ||
      item.name_zh === sign
  )

  if (!zodiac) {
    return (
      <div className="text-center mt-10 text-red-500">
        {isZh ? '未找到该星座信息。' : 'Zodiac sign not found.'}
      </div>
    )
  }

  const get = (zh: string, en: string) => (isZh ? zh : en)

  // ✅ 卡片标题去除下划线
  const Card = ({
    title,
    children,
  }: {
    title: string
    children: React.ReactNode
  }) => (
    <motion.div
      className="rounded-2xl bg-white/10 p-6 backdrop-blur-md shadow-lg transition-transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-xl font-semibold text-purple-200 mb-3">
        {title}
      </h3>
      <div className="text-base text-gray-200 leading-relaxed space-y-2">
        {children}
      </div>
    </motion.div>
  )

  const renderList = (title: string, items: string[]) => (
    <Card title={title}>
      <ul className="list-disc pl-5">
        {items.map((item, idx) => (
          <li key={idx} className="mb-1">{item}</li>
        ))}
      </ul>
    </Card>
  )

  const renderText = (title: string, text: string) => (
    <Card title={title}>
      <p>{text}</p>
    </Card>
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* 主标题 */}
      <motion.h1
        className="text-4xl font-bold text-center text-gray-50 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {get(zodiac.name_zh, zodiac.name_en)}
      </motion.h1>

      {/* 日期范围 */}
      <motion.h2
        className="text-lg text-center text-purple-300 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {get(zodiac.date_range_zh, zodiac.date_range_en)}
      </motion.h2>

      {/* 基本介绍 */}
      <Card title={get('基本介绍', 'Overview')}>
        <p>{get(zodiac.description_zh, zodiac.description_en)}</p>
      </Card>

      {/* 优点 / 缺点 */}
      <div className="grid md:grid-cols-2 gap-6">
        {renderList(get('优点', 'Strengths'), isZh ? zodiac.strengths_zh : zodiac.strengths_en)}
        {renderList(get('缺点', 'Weaknesses'), isZh ? zodiac.weaknesses_zh : zodiac.weaknesses_en)}
      </div>

      {/* 事业 / 爱情 */}
      <div className="grid md:grid-cols-2 gap-6">
        {renderText(get('事业', 'Career'), get(zodiac.career_zh, zodiac.career_en))}
        {renderText(get('爱情', 'Love'), get(zodiac.love_zh, zodiac.love_en))}
      </div>

      {/* 幸运项 */}
      <div className="grid md:grid-cols-3 gap-6">
        {renderText(get('幸运颜色', 'Lucky Color'), get(zodiac.lucky_color_zh, zodiac.lucky_color_en))}
        {renderText(get('幸运数字', 'Lucky Number'), get(zodiac.lucky_number_zh, zodiac.lucky_number_en))}
        {renderText(get('幸运星期', 'Lucky Day'), get(zodiac.lucky_day_zh, zodiac.lucky_day_en))}
      </div>

      {/* 兼容星座 */}
      {renderList(
        get('兼容星座', 'Compatible Signs'),
        isZh ? zodiac.compatibility_zh : zodiac.compatibility_en
      )}
    </div>
  )
}
