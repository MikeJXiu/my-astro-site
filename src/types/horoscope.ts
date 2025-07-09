// 通用中英文文本结构
export type LangText = {
  zh: string
  en: string
}

export interface DailyHoroscopeTemplate {
  id: number
  date: string // 例如：2025-07-03
  summary: LangText
  career: LangText
  love: LangText
  finance: LangText
  health: LangText
  advice: LangText
  reminder: LangText
  keywords: {
    zh: string[]
    en: string[]
  }
}

export interface MonthlyHoroscopeTemplate {
  id: number
  summary: LangText
  career: LangText
  love: LangText
  finance: LangText
  health: LangText
  advice: LangText
  reminder: LangText
  keywords: {
    zh: string[]
    en: string[]
  }
}

/**
 * ✅ 每年运势模板（每个星座可多条）
 */
export interface YearlyHoroscopeTemplate {
  id: number;
  year: string; // 例如："2025"
  summary: LangText;
  career: LangText;
  love: LangText;
  finance: LangText;
  health: LangText;
  advice: LangText;
  reminder: LangText;
  keywords: {
    zh: string[]
    en: string[]
  };
}

export interface LuckyItem {
  color: LangText
  direction: LangText
  item: LangText
  number: string[]
  time: LangText
  constellation: LangText
}

