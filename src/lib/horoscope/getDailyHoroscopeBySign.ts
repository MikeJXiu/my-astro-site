import type { DailyHoroscopeTemplate } from '@/types/horoscope'

/**
 * 获取指定星座的每日运势数据
 * @param sign 星座英文名（如 "aries", "taurus"）
 * @returns 对应星座的 DailyHoroscopeTemplate 数组
 */
export const getDailyHoroscopeBySign = async (
  sign: string
): Promise<DailyHoroscopeTemplate[]> => {
  try {
    const data = await import(`@/data/horoscope/daily/${sign}.ts`)
    return data.dailyHoroscope ?? []
  } catch (error) {
    console.error(`[getDailyHoroscopeBySign] Failed to load data for sign: ${sign}`, error)
    return []
  }
}
