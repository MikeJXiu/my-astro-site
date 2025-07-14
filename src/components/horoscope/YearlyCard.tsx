'use client'

import '@/styles/horoscope.css'
import { YearlyHoroscopeTemplate } from '@/types/horoscope'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  Briefcase,
  Heart,
  DollarSign,
  Stethoscope,
  Lightbulb,
  Bell,
  BookOpen,
  Users,
  Moon,
  BarChart3,
  Star,
} from 'lucide-react'

interface YearlyCardProps {
  data: YearlyHoroscopeTemplate
}

export default function YearlyCard({ data }: YearlyCardProps) {
  const { language } = useLanguage()
  const lang = language === 'zh' ? 'zh' : 'en'

  const sections = [
    { icon: <Briefcase size={18} />, titleZh: '事业', titleEn: 'Career', content: data.career[lang] },
    { icon: <Heart size={18} />, titleZh: '爱情', titleEn: 'Love', content: data.love[lang] },
    { icon: <DollarSign size={18} />, titleZh: '财运', titleEn: 'Finance', content: data.finance[lang] },
    { icon: <Stethoscope size={18} />, titleZh: '健康', titleEn: 'Health', content: data.health[lang] },
    { icon: <Lightbulb size={18} />, titleZh: '建议', titleEn: 'Advice', content: data.advice[lang] },
    { icon: <Bell size={18} />, titleZh: '提醒', titleEn: 'Reminder', content: data.reminder[lang] },
    { icon: <BookOpen size={18} />, titleZh: '学习方向', titleEn: 'Learning', content: data.learning?.[lang] },
    { icon: <Users size={18} />, titleZh: '家庭关系', titleEn: 'Family', content: data.family?.[lang] },
    { icon: <Moon size={18} />, titleZh: '星象影响', titleEn: 'Astro Impact', content: data.astro_impact?.[lang] },
  ]

  const Section = ({
    icon,
    label,
    content,
  }: {
    icon: React.ReactNode
    label: string
    content?: string
  }) =>
    content ? (
      <div className="horoscope-card fade-in flex items-start gap-3">
        <div className="horoscope-icon mt-1">{icon}</div>
        <div>
          <div className="font-semibold mb-1 text-purple-100 text-left leading-snug">
            {label}
          </div>
          <div className="text-white/90 leading-relaxed text-left">{content}</div>
        </div>
      </div>
    ) : null

  return (
    <div className="w-full max-w-3xl space-y-6 mx-auto">
      <div className="horoscope-card fade-in text-left">
        <div className="font-semibold mb-1 text-purple-100 leading-snug">
          {lang === 'zh' ? '概要' : 'Summary'}
        </div>
        <div className="text-white/90 leading-relaxed whitespace-pre-line">
          {data.summary[lang]}
        </div>
      </div>

      <div className="horoscope-grid">
        {sections.map((section, idx) => (
          <Section
            key={idx}
            icon={section.icon}
            label={lang === 'zh' ? section.titleZh : section.titleEn}
            content={section.content}
          />
        ))}
      </div>

      {data.quarterly_trends && (
        <div className="horoscope-card fade-in text-left">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 size={18} className="text-purple-200" />
            <div className="font-semibold text-purple-100">
              {lang === 'zh' ? '季度趋势' : 'Quarterly Trends'}
            </div>
          </div>
          <ul className="list-disc ml-7 text-white/90 leading-relaxed">
            {Object.entries(data.quarterly_trends).map(([q, content]) => (
              <li key={q}>
                <strong className="mr-1">{q.toUpperCase()}:</strong>
                {content[lang]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="horoscope-card fade-in text-left">
        <div className="flex items-center gap-2 mb-2">
          <Star size={18} className="text-purple-200" />
          <div className="font-semibold text-purple-100">
            {lang === 'zh' ? '关键词' : 'Keywords'}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.keywords[lang].map((kw, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/20 rounded-xl text-xs text-white"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
