import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscope: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '今天是寻求平衡与和谐的关键时刻。',
      en: 'Today is a key moment for seeking balance and harmony.',
    },
    love: {
      zh: '感情互动顺畅，适合深化关系。',
      en: 'Relationships flow smoothly—ideal for deepening connections.',
    },
    career: {
      zh: '合作运强，与团队共事事半功倍。',
      en: 'Strong collaboration energy—working with others brings results.',
    },
    finance: {
      zh: '注意收支平衡，避免情绪性购物。',
      en: 'Watch your budget—avoid emotional spending.',
    },
    health: {
      zh: '保持心理平衡，冥想有助于舒压。',
      en: 'Maintain inner peace—meditation helps relieve stress.',
    },
    advice: {
      zh: '用包容的心态处理纷争，将赢得尊重。',
      en: 'Approach conflict with tolerance—you’ll earn respect.',
    },
    reminder: {
      zh: '别急于做决定，倾听他人意见更有益。',
      en: 'Don’t rush decisions—listening to others helps.',
    },
    keywords: {
      zh: ['和谐', '合作', '决策'],
      en: ['harmony', 'collaboration', 'decision'],
    },
    lucky_items: {
      color: {
        zh: '浅粉色',
        en: 'Light Pink',
      },
      number: 9,
      date: '2025-06-30',
      constellation: {
        zh: '双子座',
        en: 'Gemini',
      },
    },
  },
]
