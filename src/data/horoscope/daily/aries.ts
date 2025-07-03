import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscopeData: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '今天是一个适合冒险和自我表达的日子。',
      en: 'Today is a great day for taking risks and expressing yourself.'
    },
    love: {
      zh: '爱情运势上升，有机会与心仪的人更进一步。',
      en: 'Your love life improves; take a chance to get closer to someone special.'
    },
    career: {
      zh: '工作上有突破，适合展示领导才能。',
      en: 'A breakthrough at work is possible—showcase your leadership.'
    },
    finance: {
      zh: '理财能力增强，可适度投资。',
      en: 'You’re financially sharp today—consider a small investment.'
    },
    health: {
      zh: '精力充沛，但仍需注意饮食。',
      en: 'You feel energetic, but watch your diet.'
    },
    advice: {
      zh: '勇敢迈出第一步，机遇就在前方。',
      en: 'Be brave and take the first step—opportunities await.'
    },
    reminder: {
      zh: '避免冲动消费，保持冷静。',
      en: 'Avoid impulsive spending and stay calm.'
    },
    keywords: {
      zh: ['冒险', '领导力', '情感表达'],
      en: ['adventure', 'leadership', 'emotional expression']
    },
    lucky_items: {
      color: { zh: '红色', en: 'Red' },
      number: 9,
      date: '2025-06-30',
      constellation: { zh: '狮子座', en: 'Leo' }
    }
  }
]
