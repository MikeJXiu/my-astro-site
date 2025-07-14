'use client'

import React from 'react'
import { CompatibilityResult } from '@/types/compatibility'
import { useLanguage } from '@/contexts/LanguageContext'
import { useRouter } from 'next/navigation'
import { FaHeart, FaHandshake, FaComments, FaInfinity, FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface Props {
  data: CompatibilityResult
}

const CompatibilityResultCard: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage()
  const router = useRouter()

  const getRatingStars = (count: number) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count)
  }

  return (
    <motion.div
      className="rounded-2xl bg-white/10 p-6 backdrop-blur shadow-xl text-white max-w-4xl mx-auto mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 标题 */}
      <h2 className="text-2xl font-bold mb-2 text-center tracking-wide flex items-center justify-center gap-2">
        {data.signs[0]} <FaHeart className="text-pink-400" /> {data.signs[1]}
      </h2>
      <p className="text-lg text-center mb-4 text-pink-200 italic">
        {data.title[language]}
      </p>

      {/* 评分区块 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
        <div>
          <FaHeart className="mx-auto text-pink-400" />
          <p className="text-sm mt-1">{language === 'zh' ? '爱情' : 'Love'}</p>
          <p className="text-lg font-medium">{getRatingStars(data.ratings.love)}</p>
        </div>
        <div>
          <FaHandshake className="mx-auto text-teal-400" />
          <p className="text-sm mt-1">{language === 'zh' ? '友情' : 'Friendship'}</p>
          <p className="text-lg font-medium">{getRatingStars(data.ratings.friendship)}</p>
        </div>
        <div>
          <FaComments className="mx-auto text-yellow-300" />
          <p className="text-sm mt-1">{language === 'zh' ? '沟通' : 'Communication'}</p>
          <p className="text-lg font-medium">{getRatingStars(data.ratings.communication)}</p>
        </div>
        <div>
          <FaInfinity className="mx-auto text-indigo-300" />
          <p className="text-sm mt-1">{language === 'zh' ? '发展' : 'Longevity'}</p>
          <p className="text-lg font-medium">{getRatingStars(data.ratings.longevity)}</p>
        </div>
      </div>

      {/* 概述 */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{language === 'zh' ? '概述' : 'Summary'}</h3>
        <p className="text-base leading-relaxed">{data.summary[language]}</p>
      </div>

      {/* 优势与挑战 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-lg font-bold mb-2 text-green-300">
            {language === 'zh' ? '优势' : 'Strengths'}
          </h4>
          <p>{data.strengths[language]}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-lg font-bold mb-2 text-red-300">
            {language === 'zh' ? '挑战' : 'Challenges'}
          </h4>
          <p>{data.challenges[language]}</p>
        </div>
      </div>

      {/* 建议 */}
      <div className="mb-6 bg-white/5 p-4 rounded-xl border border-white/10">
        <h4 className="text-lg font-bold mb-2 text-yellow-200">
          {language === 'zh' ? '建议' : 'Advice'}
        </h4>
        <p>{data.advice[language]}</p>
      </div>

      {/* 关键词 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {data.keywords[language].map((kw, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gradient-to-br from-pink-500 to-purple-500 text-sm rounded-full text-white shadow"
          >
            {kw}
          </span>
        ))}
      </div>

      {/* 返回按钮 */}
      <div className="text-center mt-6">
        <button
          onClick={() => router.push('/compatibility')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 transition text-white shadow-md"
        >
          <FaArrowLeft />
          {language === 'zh' ? '返回配对选择' : 'Back to Selection'}
        </button>
      </div>
    </motion.div>
  )
}

export default CompatibilityResultCard
