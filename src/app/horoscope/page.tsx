'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import DailyTab from '@/components/horoscope/DailyTab'
import MonthlyTab from '@/components/horoscope/MonthlyTab'
import YearlyTab from '@/components/horoscope/YearlyTab'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HoroscopePage() {
  const { language } = useLanguage()
  const lang = language === 'zh' ? 'zh' : 'en'
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab') as 'daily' | 'monthly' | 'yearly'

  const [activeTab, setActiveTab] = useState<'daily' | 'monthly' | 'yearly'>('daily')

  // ✅ 修复：根据 URL 参数初始化 activeTab，仅在组件首次挂载时执行一次
  useEffect(() => {
    if (tabParam === 'monthly' || tabParam === 'yearly' || tabParam === 'daily') {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  return (
    <div className="horoscope-page text-white text-center">
      {/* 顶部标题区 */}
      <div className="pt-2 pb-4 md:pt-20 md:pb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider mb-2 glow-text">
          命运之门
        </h1>
        <p className="text-sm md:text-base text-violet-200 tracking-wide">
          探索宇宙为你揭示的个人旅程 ✨
        </p>

        {/* 分割线 */}
        <div className="w-full max-w-xs mx-auto my-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />
      </div>

      {/* 运势类别按钮组 */}
      <div className="flex justify-center gap-4 flex-wrap mt-2">
        <button
          onClick={() => setActiveTab('daily')}
          className={`rounded-full px-5 py-2 text-sm md:text-base transition-all border 
            ${activeTab === 'daily'
              ? 'bg-pink-500 text-white border-pink-500 shadow-lg'
              : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}
          `}
        >
          今日运势
        </button>
        <button
          onClick={() => setActiveTab('monthly')}
          className={`rounded-full px-5 py-2 text-sm md:text-base transition-all border 
            ${activeTab === 'monthly'
              ? 'bg-pink-500 text-white border-pink-500 shadow-lg'
              : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}
          `}
        >
          本月运势
        </button>
        <button
          onClick={() => setActiveTab('yearly')}
          className={`rounded-full px-5 py-2 text-sm md:text-base transition-all border 
            ${activeTab === 'yearly'
              ? 'bg-pink-500 text-white border-pink-500 shadow-lg'
              : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}
          `}
        >
          今年运势
        </button>
      </div>

      {/* 按钮组与星座按钮之间间距 */}
      <div className="h-2 md:h-2.5" />

      {/* 运势模块切换区 */}
      <div className="mt-2 px-2 md:px-4">
        {activeTab === 'daily' && <DailyTab />}
        {activeTab === 'monthly' && <MonthlyTab />}
        {activeTab === 'yearly' && <YearlyTab />}
      </div>
    </div>
  )
}
