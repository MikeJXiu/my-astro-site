import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscope: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '今天是深入思考与自我重整的好时机。',
      en: 'Today is a great time for introspection and personal reset.',
    },
    love: {
      zh: '情感关系深刻而敏感，坦诚交流尤为重要。',
      en: 'Emotions run deep—open communication is key in relationships.',
    },
    career: {
      zh: '专注细节可避免失误，保持专注是关键。',
      en: 'Paying attention to details prevents errors—stay focused.',
    },
    finance: {
      zh: '财务有隐性支出，建议保守理财。',
      en: 'Watch for hidden costs—take a conservative approach.',
    },
    health: {
      zh: '注意休息，避免心理压力堆积。',
      en: 'Take breaks to avoid mental fatigue and stress buildup.',
    },
    advice: {
      zh: '直觉很强，信任自己的判断力。',
      en: 'Your intuition is strong—trust your inner voice.',
    },
    reminder: {
      zh: '不要压抑情绪，适当表达有助疗愈。',
      en: 'Don’t bottle up emotions—expressing them heals.',
    },
    keywords: {
      zh: ['洞察', '专注', '直觉'],
      en: ['insight', 'focus', 'intuition'],
    },
    lucky_items: {
      color: {
        zh: '墨绿色',
        en: 'Forest Green',
      },
      number: 4,
      date: '2025-06-30',
      constellation: {
        zh: '巨蟹座',
        en: 'Cancer',
      },
    },
  },
]
