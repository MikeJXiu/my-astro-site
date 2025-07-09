import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscopeData: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '今天充满灵感与活力，是表达自己的最佳时机。',
      en: 'Today is full of inspiration and energy—a perfect time to express yourself.',
    },
    love: {
      zh: '感情生活轻松愉快，适合进行深度交流。',
      en: 'Romantic vibes are light and pleasant—great for deep conversations.',
    },
    career: {
      zh: '职场中创意十足，适合展示你的多才多艺。',
      en: 'Your creativity shines at work—showcase your versatility.',
    },
    finance: {
      zh: '财务方面有小收获，注意保持灵活应变。',
      en: 'Minor gains in finances—stay adaptable.',
    },
    health: {
      zh: '身心轻松，适合参与社交与运动。',
      en: 'You feel relaxed—ideal for both socializing and exercise.',
    },
    advice: {
      zh: '顺势而为，把握住灵光一现的好点子。',
      en: 'Go with the flow and capture those fleeting ideas.',
    },
    reminder: {
      zh: '注意不要过度分心，专注能带来更大收获。',
      en: 'Avoid distractions—focus brings bigger rewards.',
    },
    keywords: {
      zh: ['灵感', '多才', '轻松'],
      en: ['inspiration', 'versatility', 'ease'],
    }
  },
]
