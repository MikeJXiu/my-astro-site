import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscope: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '今天适合整理思绪与计划未来。',
      en: 'Today is ideal for organizing thoughts and planning ahead.',
    },
    love: {
      zh: '在感情中表现务实，能增进信任感。',
      en: 'Being practical in love will strengthen trust.',
    },
    career: {
      zh: '分析力增强，适合处理细节与文书任务。',
      en: 'Sharp analytical skills favor detail-oriented work today.',
    },
    finance: {
      zh: '谨慎消费，计划支出更有保障。',
      en: 'Be cautious with spending—planned budgeting pays off.',
    },
    health: {
      zh: '适当放松，避免因焦虑引发身体紧张。',
      en: 'Take breaks to reduce tension caused by anxiety.',
    },
    advice: {
      zh: '信任自己的判断，不必事事寻求确认。',
      en: 'Trust your instincts—validation isn’t always necessary.',
    },
    reminder: {
      zh: '别忽略小问题，它们可能成为关键。',
      en: 'Don’t overlook minor issues—they might be crucial.',
    },
    keywords: {
      zh: ['计划', '分析', '信任'],
      en: ['planning', 'analysis', 'trust'],
    },
    lucky_items: {
      color: {
        zh: '藏青色',
        en: 'Navy Blue',
      },
      number: 5,
      date: '2025-06-30',
      constellation: {
        zh: '金牛座',
        en: 'Taurus',
      },
    },
  },
]
