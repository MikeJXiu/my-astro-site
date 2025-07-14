'use client'

import React from 'react'
import { ZodiacPersonality } from '@/types/personality'
import { useLanguage } from '@/contexts/LanguageContext'

interface Props {
  data: ZodiacPersonality
}

const PersonalityCard: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage()
  const lang = language

  const renderSection = (titleZh: string, titleEn: string, content: string) => (
    <div className="bg-white/10 p-4 rounded-xl mb-4 border border-white/10">
      <h3 className="text-lg font-semibold text-yellow-300 mb-2">
        {lang === 'zh' ? titleZh : titleEn}
      </h3>
      <p className="text-base leading-relaxed">{content}</p>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/5 rounded-2xl shadow-lg text-white backdrop-blur">
      <h2 className="text-2xl font-bold text-center mb-4">
        {lang === 'zh' ? data.name_zh : data.name_en}
      </h2>

      <p className="italic text-pink-200 text-center mb-6">
        {data.summary[lang]}
      </p>

      {renderSection('性格特点', 'Personality Traits', data.personality_traits[lang])}
      {renderSection('优点优势', 'Strengths', data.strengths[lang])}
      {renderSection('缺点挑战', 'Weaknesses', data.weaknesses[lang])}
      {renderSection('爱情风格', 'Love Style', data.love_style[lang])}
      {renderSection('职场表现', 'Work Style', data.work_style[lang])}
      {renderSection('家庭角色', 'Family Role', data.family_style[lang])}

      {/* 职业与名人 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
          <h3 className="text-lg font-semibold text-teal-300 mb-2">
            {lang === 'zh' ? '适合职业' : 'Suitable Jobs'}
          </h3>
          <ul className="list-disc list-inside">
            {data.suitable_jobs[lang].map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
          <h3 className="text-lg font-semibold text-purple-300 mb-2">
            {lang === 'zh' ? '代表名人' : 'Famous People'}
          </h3>
          <ul className="list-disc list-inside">
            {data.famous_people[lang].map((person, index) => (
              <li key={index}>{person}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 标签关键词 */}
      <div className="mt-4 flex flex-wrap gap-2">
        {data.keywords[lang].map((kw, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gradient-to-br from-pink-500 to-purple-500 rounded-full shadow"
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PersonalityCard
