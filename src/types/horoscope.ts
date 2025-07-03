// 通用中英文文本结构
export type LangText = {
  zh: string
  en: string
}

/**
 * ✅ 每日运势模板（每个星座多条）
 */
export interface DailyHoroscopeTemplate {
  id: number
  date: string // 例如：2025-06-30，可支持精确日运势
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
  lucky_items: {
    color: LangText
    number: number
    date: string // lucky date，自动生成每日日期
    constellation: LangText
  }
}

/**
 * ✅ 每月运势模板（每个星座多条）
 */
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
  lucky_items: {
    color: LangText
    number: number
    date: string // lucky date，每月随机生成
    constellation: LangText
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
  lucky_items: {
    color: LangText
    number: number
    constellation: LangText
    month: {
      zh: string
      en: string
    };
  }
}

export interface LuckyItem {
  color: { zh: string; en: string }
  number: number
  date: string
  constellation: { zh: string; en: string }
}

