import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscopeData: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '今天适合关注家庭与内心感受，情感更加细腻。',
      en: 'Today is a good day to focus on family and inner feelings—your emotions are heightened.',
    },
    love: {
      zh: '感情中充满温柔与关怀，适合增进彼此关系。',
      en: 'Tenderness and care define your love life—great for deepening bonds.',
    },
    career: {
      zh: '职场中保持低调，默默努力会赢得认可。',
      en: 'Keep a low profile at work—quiet efforts will be noticed.',
    },
    finance: {
      zh: '财务状况稳定，适合规划长期预算。',
      en: 'Finances are steady—ideal for long-term planning.',
    },
    health: {
      zh: '容易受情绪影响，建议进行放松调节。',
      en: 'Your mood may fluctuate—consider relaxation techniques.',
    },
    advice: {
      zh: '聆听内心的声音，顺应直觉。',
      en: 'Listen to your inner voice and follow your intuition.',
    },
    reminder: {
      zh: '不要忽略家人的需要，陪伴就是力量。',
      en: 'Don’t overlook family needs—your presence is powerful.',
    },
    keywords: {
      zh: ['情感', '家庭', '直觉'],
      en: ['emotion', 'family', 'intuition'],
    }
  },
]
