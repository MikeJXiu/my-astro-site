import type { MonthlyHoroscopeTemplate } from '@/types/horoscope'

/**
 * 获取指定星座的每月运势数据
 * @param sign 星座英文名（如 "aries", "taurus"）
 * @returns 对应星座的 MonthlyHoroscopeTemplate 数组
 */
export const getMonthlyHoroscopeBySign = async (
  sign: string
): Promise<MonthlyHoroscopeTemplate[]> => {
  try {
    const data = await import(`@/data/horoscope/monthly/${sign}.ts`)
    return data[`${sign}MonthlyHoroscope`] ?? []
  } catch (error) {
    console.error(`[getMonthlyHoroscopeBySign] Failed to load data for sign: ${sign}`, error)
    return []
  }
}
