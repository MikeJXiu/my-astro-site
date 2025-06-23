// /types/zodiacDetail.ts

export interface ZodiacDetail {
  name_zh: string
  name_en: string
  date_range_zh: string
  date_range_en: string
  element_zh: string
  element_en: string
  modality_zh: string
  modality_en: string
  ruling_planet_zh: string
  ruling_planet_en: string
  symbol: string

  description_zh: string
  description_en: string

  strengths_zh: string[]
  strengths_en: string[]

  weaknesses_zh: string[]
  weaknesses_en: string[]

  career_zh: string
  career_en: string

  love_zh: string
  love_en: string

  lucky_color_zh: string
  lucky_color_en: string

  lucky_number_zh: string
  lucky_number_en: string

  lucky_day_zh: string
  lucky_day_en: string

  compatibility_zh: string[] // 中文星座名称数组
  compatibility_en: string[] // 英文星座名称数组
}
