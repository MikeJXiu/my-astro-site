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
  year: number;
  summary: { zh: string; en: string };
  career: { zh: string; en: string };
  love: { zh: string; en: string };
  finance: { zh: string; en: string };
  health: { zh: string; en: string };
  advice: { zh: string; en: string };
  reminder: { zh: string; en: string };
  keywords: { zh: string[]; en: string[] };

  // ✅ 扩展字段（选填）
  learning?: { zh: string; en: string };
  family?: { zh: string; en: string };
  astro_impact?: { zh: string; en: string };
  quarterly_trends?: {
    q1: { zh: string; en: string };
    q2: { zh: string; en: string };
    q3: { zh: string; en: string };
    q4: { zh: string; en: string };
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

