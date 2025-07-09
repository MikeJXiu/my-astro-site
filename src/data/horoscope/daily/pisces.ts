import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscopeData: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '直觉敏锐的一天，适合沉淀与思考。',
      en: 'A highly intuitive day—ideal for reflection and insight.',
    },
    love: {
      zh: '感情易陷入幻想，建议多倾听对方真实需求。',
      en: 'Romance may drift into fantasy—listen carefully to your partner’s real needs.',
    },
    career: {
      zh: '创作与艺术相关工作者灵感满满，适合产出作品。',
      en: 'Artists and creatives are full of inspiration—ideal for production.',
    },
    finance: {
      zh: '适合控制不必要的花费，重视内在价值。',
      en: 'A good day to curb unnecessary spending and focus on real value.',
    },
    health: {
      zh: '注意睡眠质量，避免情绪化饮食。',
      en: 'Watch your sleep quality and avoid emotional eating.',
    },
    advice: {
      zh: '相信自己的第六感，它今天很准。',
      en: 'Trust your sixth sense—it’s spot on today.',
    },
    reminder: {
      zh: '不要过于迁就别人，要顾及自己的感受。',
      en: 'Don’t overly accommodate others—honor your own feelings.',
    },
    keywords: {
      zh: ['直觉', '沉静', '自省'],
      en: ['intuition', 'serenity', 'self-reflection'],
    }
  },
]
