'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useRouter } from 'next/navigation'

export default function BirthChartPage() {
  const { language } = useLanguage()
  const isZh = language === 'zh'
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    unknownTime: false,
    birthPlace: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const birthDateParts = formData.birthDate.split('-')
    const birthTimeParts = formData.birthTime.split(':')

    if (birthDateParts.length < 3 || birthTimeParts.length < 2) {
      alert(isZh ? '请正确填写出生日期和时间。' : 'Please enter a valid birth date and time.')
      return
    }

    const year = parseInt(birthDateParts[0])
    const month = parseInt(birthDateParts[1])
    const day = parseInt(birthDateParts[2])
    const hour = parseInt(birthTimeParts[0])
    const minute = parseInt(birthTimeParts[1])

    // 默认使用东八区
    const timezoneOffset = 8

    // 带参数跳转至结果页
    router.push(
      `/birthchart/result?year=${year}&month=${month}&day=${day}&hour=${hour}&minute=${minute}&timezoneOffset=${timezoneOffset}&name=${encodeURIComponent(
        formData.name
      )}&birthDate=${formData.birthDate}&birthTime=${formData.birthTime}&birthPlace=${encodeURIComponent(
        formData.birthPlace
      )}`
    )    
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/20 via-black/50 to-black/80 px-4 py-10 text-white">
      <div className="max-w-xl mx-auto bg-white/5 rounded-2xl p-6 shadow-lg backdrop-blur">
        <h1 className="text-2xl font-bold text-center mb-4 text-pink-200">
          {isZh ? '星盘生成器' : 'Birth Chart Generator'}
        </h1>
        <p className="text-center text-sm text-purple-200 mb-6">
          {isZh
            ? '请输入以下信息生成你的专属星盘。'
            : 'Please fill in the following information to generate your birth chart.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {/* 姓名 */}
          <div>
            <label className="block mb-1 text-sm">
              {isZh ? '你的名字' : 'Your Name'}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
            />
          </div>

          {/* 出生日期 */}
          <div>
            <label className="block mb-1 text-sm">
              {isZh ? '出生日期' : 'Date of Birth (YYYY-MM-DD)'}
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
            />
          </div>

          {/* 出生时间 */}
          <div>
            <label className="block mb-1 text-sm">
              {isZh ? '出生时间' : 'Time of Birth'}
            </label>
            {!formData.unknownTime && (
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleChange}
                required={!formData.unknownTime}
                className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
              />
            )}
            <div className="mt-2 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                id="unknownTime"
                name="unknownTime"
                checked={formData.unknownTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    unknownTime: e.target.checked,
                    birthTime: e.target.checked ? '12:00' : ''
                  }))
                }
              />
              <label htmlFor="unknownTime">
                {isZh ? '我不确定出生时间' : "I don't know the exact time"}
              </label>
            </div>
          </div>

          {/* 出生地点 */}
          <div>
            <label className="block mb-1 text-sm">
              {isZh ? '出生地点' : 'Place of Birth'}
            </label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
            />
          </div>

          {/* 提交按钮 */}
          <button
            type="submit"
            className="w-full mt-4 py-2 rounded bg-pink-500 hover:bg-pink-600 transition text-white font-semibold shadow"
          >
            {isZh ? '生成星盘' : 'Generate Chart'}
          </button>
        </form>
      </div>
    </div>
  )
}
