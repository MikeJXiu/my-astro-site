import type { LuckyItem } from '@/types/horoscope'

const colors = [
  { zh: '红色', en: 'Red' },
  { zh: '蓝色', en: 'Blue' },
  { zh: '绿色', en: 'Green' },
  { zh: '紫色', en: 'Purple' },
  { zh: '黄色', en: 'Yellow' },
]

const constellations = [
  { zh: '白羊座', en: 'Aries' },
  { zh: '金牛座', en: 'Taurus' },
  { zh: '双子座', en: 'Gemini' },
  { zh: '巨蟹座', en: 'Cancer' },
  { zh: '狮子座', en: 'Leo' },
  { zh: '处女座', en: 'Virgo' },
  { zh: '天秤座', en: 'Libra' },
  { zh: '天蝎座', en: 'Scorpio' },
  { zh: '射手座', en: 'Sagittarius' },
  { zh: '摩羯座', en: 'Capricorn' },
  { zh: '水瓶座', en: 'Aquarius' },
  { zh: '双鱼座', en: 'Pisces' },
]

export function getLuckyItems(sign: string): LuckyItem[] {
  const pool: LuckyItem[] = Array.from({ length: 10 }, (_, i) => ({
    color: colors[i % colors.length],
    number: (i + 1),
    date: `7-${i + 1}`,
    constellation: constellations[i % constellations.length],
  }))
  return pool
}
