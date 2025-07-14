import { YearlyHoroscopeTemplate } from '@/types/horoscope'

/**
 * 获取指定星座和年份的年运势数据
 * @param symbol 星座英文代号（如 'aries'）
 * @param year 年份（如 2025）
 * @returns 匹配的年运势数据，若无则返回 null
 */
export async function getYearlyHoroscopeBySign(
  symbol: string,
  year: number
): Promise<YearlyHoroscopeTemplate | null> {
  try {
    // 动态导入对应星座的年运势文件
    const module = await import(`@/data/horoscope/yearly/${symbol}`)
    
    // 获取该星座所有年度数据
    const allData: YearlyHoroscopeTemplate[] = module.yearlyHoroscopeData

    // 查找指定年份的数据项
    const result = allData.find(item => item.year === year)

    return result || null
  } catch (error) {
    console.error(`[getYearlyHoroscopeBySign] Failed to load yearly data for ${symbol}-${year}`, error)
    return null
  }
}
