import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscope: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '今天适合拓展视野，思考未来方向。',
      en: 'A great day to broaden your horizons and envision your future.',
    },
    love: {
      zh: '感情中要多倾听对方的需求，避免自我为中心。',
      en: 'Listen to your partner’s needs and avoid being self-centered.',
    },
    career: {
      zh: '有机会接触新领域，保持学习态度将带来收获。',
      en: 'New opportunities may arise—stay open to learning.',
    },
    finance: {
      zh: '财务偏稳，适合规划中长期投资。',
      en: 'Stable financial outlook—ideal for long-term planning.',
    },
    health: {
      zh: '多接触自然有助于身心平衡。',
      en: 'Spending time in nature restores physical and mental balance.',
    },
    advice: {
      zh: '尝试新事物可能带来意想不到的收获。',
      en: 'Trying something new could lead to unexpected benefits.',
    },
    reminder: {
      zh: '不要因为忙碌忽略家人关心。',
      en: 'Don’t let busyness overshadow family connections.',
    },
    keywords: {
      zh: ['扩展', '学习', '冒险'],
      en: ['expansion', 'learning', 'adventure'],
    },
    lucky_items: {
      color: {
        zh: '藏青色',
        en: 'Navy Blue',
      },
      number: 7,
      date: '2025-06-30',
      constellation: {
        zh: '白羊座',
        en: 'Aries',
      },
    },
  },
]
