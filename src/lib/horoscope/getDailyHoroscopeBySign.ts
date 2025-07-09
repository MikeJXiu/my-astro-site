import { zodiacSigns } from '@/data/zodiacSigns'
import { getHoroscopeIndex } from './getHoroscopeIndex'
import { DailyHoroscopeTemplate } from '@/types/horoscope'

// 正确使用命名导出的每日数据
import { dailyHoroscopeData as ariesData } from '@/data/horoscope/daily/aries'
import { dailyHoroscopeData as taurusData } from '@/data/horoscope/daily/taurus'
import { dailyHoroscopeData as geminiData } from '@/data/horoscope/daily/gemini'
import { dailyHoroscopeData as cancerData } from '@/data/horoscope/daily/cancer'
import { dailyHoroscopeData as leoData } from '@/data/horoscope/daily/leo'
import { dailyHoroscopeData as virgoData } from '@/data/horoscope/daily/virgo'
import { dailyHoroscopeData as libraData } from '@/data/horoscope/daily/libra'
import { dailyHoroscopeData as scorpioData } from '@/data/horoscope/daily/scorpio'
import { dailyHoroscopeData as sagittariusData } from '@/data/horoscope/daily/sagittarius'
import { dailyHoroscopeData as capricornData } from '@/data/horoscope/daily/capricorn'
import { dailyHoroscopeData as aquariusData } from '@/data/horoscope/daily/aquarius'
import { dailyHoroscopeData as piscesData } from '@/data/horoscope/daily/pisces'

// 构建数据映射
const dataMap: Record<string, DailyHoroscopeTemplate[]> = {
  aries: ariesData,
  taurus: taurusData,
  gemini: geminiData,
  cancer: cancerData,
  leo: leoData,
  virgo: virgoData,
  libra: libraData,
  scorpio: scorpioData,
  sagittarius: sagittariusData,
  capricorn: capricornData,
  aquarius: aquariusData,
  pisces: piscesData
}

// 主函数
export const getDailyHoroscopeBySign = (sign: string) => {
  const signIndex = zodiacSigns.findIndex((z) => z.symbol === sign)
  const signData = zodiacSigns[signIndex]
  const dailyHoroscopeData = dataMap[sign]

  if (!dailyHoroscopeData || dailyHoroscopeData.length === 0) {
    console.warn(`⚠️ ${sign} 暂无数据`)
    return null
  }

  const index = getHoroscopeIndex(signIndex, 'daily', dailyHoroscopeData)

  const result = {
    ...dailyHoroscopeData[index % dailyHoroscopeData.length],
    signData,
    index
  }

  return result
}
