'use client'

import { useParams } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import zodiacData from '@/data/zodiacSigns'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ZodiacDetailClient() {
  const params = useParams()
  const signParam = Array.isArray(params.sign) ? params.sign[0] : params.sign
  const { language } = useLanguage()
  const isZh = language === 'zh'

  const zodiac = zodiacData.find(
    (item) =>
      item.name_en.toLowerCase() === signParam?.toLowerCase() ||
      item.name_zh === signParam
  )

  if (!zodiac) return <p className="text-center mt-10 text-gray-500">星座数据未找到</p>

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* 名称与日期 */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-400 tracking-wide mb-1">
          {isZh ? zodiac.name_zh : zodiac.name_en}
        </h1>
        <p className="text-base text-gray-300">
          {isZh ? zodiac.date_range_zh : zodiac.date_range_en}
        </p>
      </div>

      {/* 图标 */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/30 to-indigo-500/20 blur-xl" />
          <Image
            src={`/images/zodiac/${zodiac.symbol}.png`}
            alt="symbol"
            width={100}
            height={100}
            className="rounded-full shadow-lg border border-white/30 bg-white/20 p-2 backdrop-blur-md"
          />
        </div>
      </motion.div>

      {/* 星座简介 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
      >
        <h2 className="text-xl font-semibold text-purple-200 mb-3">
          {isZh ? '星座简介' : 'Description'}
        </h2>
        <p className="text-gray-100 leading-relaxed text-base">
          {isZh ? zodiac.description_zh : zodiac.description_en}
        </p>
      </motion.div>

      {/* 三要素卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            label: isZh ? '元素' : 'Element',
            value: isZh ? zodiac.element_zh : zodiac.element_en
          },
          {
            label: isZh ? '模式' : 'Modality',
            value: isZh ? zodiac.modality_zh : zodiac.modality_en
          },
          {
            label: isZh ? '守护星' : 'Ruling Planet',
            value: isZh ? zodiac.ruling_planet_zh : zodiac.ruling_planet_en
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow border border-white/10 text-center"
          >
            <p className="text-sm font-medium text-indigo-200 mb-1">{item.label}</p>
            <p className="text-white text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* 性格特质 */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-xl font-semibold text-blue-200 mb-4">
          {isZh ? '性格特质' : 'Personality Traits'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-indigo-100 font-semibold mb-2">{isZh ? '优点' : 'Strengths'}</p>
            <ul className="list-disc list-inside text-gray-100 text-sm leading-relaxed space-y-1 text-left">
              {(isZh ? zodiac.strengths_zh : zodiac.strengths_en).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-indigo-100 font-semibold mb-2">{isZh ? '缺点' : 'Weaknesses'}</p>
            <ul className="list-disc list-inside text-gray-100 text-sm leading-relaxed space-y-1 text-left">
              {(isZh ? zodiac.weaknesses_zh : zodiac.weaknesses_en).map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 职业建议 & 爱情特质 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: isZh ? '职业建议' : 'Career Advice',
            content: isZh ? zodiac.career_zh : zodiac.career_en
          },
          {
            title: isZh ? '爱情特质' : 'Love Traits',
            content: isZh ? zodiac.love_zh : zodiac.love_en
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
          >
            <h3 className="text-md font-semibold text-pink-200 mb-2">{item.title}</h3>
            <p className="text-gray-100 text-sm leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

      {/* 幸运三项 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            label: isZh ? '幸运颜色' : 'Lucky Color',
            value: isZh ? zodiac.lucky_color_zh : zodiac.lucky_color_en
          },
          {
            label: isZh ? '幸运数字' : 'Lucky Number',
            value: isZh ? zodiac.lucky_number_zh : zodiac.lucky_number_en
          },
          {
            label: isZh ? '幸运日' : 'Lucky Day',
            value: isZh ? zodiac.lucky_day_zh : zodiac.lucky_day_en
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-center shadow border border-white/10"
          >
            <p className="text-sm text-indigo-200 mb-1">{item.label}</p>
            <p className="text-white text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* 最佳配对 */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
        <h3 className="text-md font-semibold text-indigo-200 mb-2">
          {isZh ? '最佳配对' : 'Best Compatibility'}
        </h3>
        <ul className="flex flex-wrap gap-3 text-sm">
          {(isZh ? zodiac.compatibility_zh : zodiac.compatibility_en).map((m, i) => (
            <li key={i} className="px-3 py-1 bg-indigo-700/40 rounded-full text-white shadow">
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
