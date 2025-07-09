import { zodiacSigns } from '@/data/zodiacSigns'
import { getHoroscopeIndex } from './getHoroscopeIndex'
import { MonthlyHoroscopeTemplate } from '@/types/horoscope'

import { monthlyHoroscopeData as ariesData } from '@/data/horoscope/monthly/aries'
import { monthlyHoroscopeData as taurusData } from '@/data/horoscope/monthly/taurus'
import { monthlyHoroscopeData as geminiData } from '@/data/horoscope/monthly/gemini'
import { monthlyHoroscopeData as cancerData } from '@/data/horoscope/monthly/cancer'
import { monthlyHoroscopeData as leoData } from '@/data/horoscope/monthly/leo'
import { monthlyHoroscopeData as virgoData } from '@/data/horoscope/monthly/virgo'
import { monthlyHoroscopeData as libraData } from '@/data/horoscope/monthly/libra'
import { monthlyHoroscopeData as scorpioData } from '@/data/horoscope/monthly/scorpio'
import { monthlyHoroscopeData as sagittariusData } from '@/data/horoscope/monthly/sagittarius'
import { monthlyHoroscopeData as capricornData } from '@/data/horoscope/monthly/capricorn'
import { monthlyHoroscopeData as aquariusData } from '@/data/horoscope/monthly/aquarius'
import { monthlyHoroscopeData as piscesData } from '@/data/horoscope/monthly/pisces'

const dataMap: Record<string, MonthlyHoroscopeTemplate[]> = {
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

export const getMonthlyHoroscopeBySign = (sign: string) => {
  const signIndex = zodiacSigns.findIndex((z) => z.symbol === sign)
  const signData = zodiacSigns[signIndex]
  const monthlyData = dataMap[sign]

  if (!monthlyData || monthlyData.length === 0) {
    console.warn(`⚠️ ${sign} 月运势暂无数据`)
    return null
  }

  const index = getHoroscopeIndex(signIndex, 'monthly', monthlyData)

  return {
    ...monthlyData[index % monthlyData.length],
    signData,
    index
  }
}
