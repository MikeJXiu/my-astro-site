// /app/personality/page.tsx
'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { zodiacSigns } from '@/data/zodiacSigns'
import { zodiacPersonalities } from '@/data/personality'
import PersonalityCard from '@/components/personality/PersonalityCard'
import PersonalitySelector from '@/components/personality/PersonalitySelector'
import { ZodiacDetail } from '@/types/zodiacDetail'

export default function PersonalityPage() {
  const { language } = useLanguage()
  const [selectedSign, setSelectedSign] = useState<ZodiacDetail | null>(null)

  const matchedData = selectedSign
    ? zodiacPersonalities.find((z) => z.symbol === selectedSign.symbol)
    : null

  return (
    <div className="min-h-screen px-4 py-8 sm:px-8 text-white bg-gradient-to-b from-transparent via-black/30 to-black/80">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-pink-200 drop-shadow-md">
          {language === 'zh' ? '星座性格查询' : 'Zodiac Personality Explorer'}
        </h1>
        <p className="text-base sm:text-lg text-purple-200 mb-8">
          {language === 'zh'
            ? '点击一个星座按钮，查看对应的性格分析。'
            : 'Click on a zodiac sign to explore its personality analysis.'}
        </p>

        {/* 星座选择按钮 */}
        <PersonalitySelector
          selectedSign={selectedSign}
          onSelect={(sign) => setSelectedSign(sign)}
        />

        {/* 渲染卡片 */}
        {matchedData ? (
          <div className="mt-6">
            <PersonalityCard data={matchedData} />
          </div>
        ) : (
          <p className="mt-10 text-pink-100 italic">
            {language === 'zh' ? '请选择一个星座' : 'Please select a zodiac sign'}
          </p>
        )}
      </div>
    </div>
  )
}
