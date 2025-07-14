'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import ZodiacSelector from '@/components/compatibility/ZodiacSelector'
import { ZodiacDetail } from '@/types/zodiacDetail'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CompatibilityPage() {
  const [firstSign, setFirstSign] = useState<ZodiacDetail | null>(null)
  const [secondSign, setSecondSign] = useState<ZodiacDetail | null>(null)
  const { language } = useLanguage()
  const router = useRouter()

  const isZh = language === 'zh'

  const handleSubmit = () => {
    if (firstSign && secondSign) {
      const path = `/compatibility/${firstSign.symbol}-${secondSign.symbol}`
      router.push(path)
    }
  }

  return (
    <div className="min-h-screen px-4 py-8 sm:px-8 text-white bg-gradient-to-b from-transparent via-black/40 to-black/80">
      <div className="max-w-6xl mx-auto text-center">
        {/* 页面标题 */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-pink-200 drop-shadow-md">
          {isZh ? '星座配对查询' : 'Zodiac Compatibility Checker'}
        </h1>
        <p className="text-base sm:text-lg text-purple-200 mb-8">
          {isZh
            ? '选择两个星座，探索他们之间的缘分与火花。'
            : 'Select two zodiac signs to explore their compatibility and chemistry.'}
        </p>

        {/* 星座选择区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 第一星座 */}
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-4 shadow-md">
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-pink-100">
              {isZh ? '请选择第一个星座' : 'Select the First Sign'}
            </h2>
            <ZodiacSelector
              selectedSign={firstSign}
              onSelect={(sign) => setFirstSign(sign)}
              disabledSign={null}
            />
          </div>

          {/* 第二星座 */}
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-4 shadow-md">
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-pink-100">
              {isZh ? '请选择第二个星座' : 'Select the Second Sign'}
            </h2>
            <ZodiacSelector
              selectedSign={secondSign}
              onSelect={(sign) => setSecondSign(sign)}
              disabledSign={null}
            />
          </div>
        </div>

        {/* 跳转按钮（两者都选择后显示） */}
        {firstSign && secondSign && (
          <button
            onClick={handleSubmit}
            className="mt-10 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-md transition duration-300"
          >
            {isZh ? '查看配对结果' : 'View Compatibility Result'}
          </button>
        )}

        {/* 提示语（默认提示） */}
        {!firstSign || !secondSign ? (
          <div className="mt-10 text-center text-purple-300 italic">
            {isZh
              ? '选择两个星座后，将展示他们的配对分析结果。'
              : 'Compatibility analysis will appear here after selecting two signs.'}
          </div>
        ) : null}
      </div>
    </div>
  )
}
