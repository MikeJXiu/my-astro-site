import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscope: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '稳定的一天，适合制定长远计划。',
      en: 'A day of stability and steadiness—perfect for laying plans.',
    },
    love: {
      zh: '情感平稳，但别忘了表达关心。',
      en: 'Your relationship is steady—remember to express your care.',
    },
    career: {
      zh: '工作稳步推进，适合处理细节任务。',
      en: 'Work progresses steadily—it’s a great time for detail-oriented tasks.',
    },
    finance: {
      zh: '财务状况良好，适合进行长期投资。',
      en: 'Finances are stable—consider long-term investments.',
    },
    health: {
      zh: '身体状况尚可，适合做一些轻度锻炼。',
      en: 'Your body and mind feel good—opt for gentle exercise.',
    },
    advice: {
      zh: '慢即是快，耐心带来回报。',
      en: 'Slow is fast—patience brings returns.',
    },
    reminder: {
      zh: '别忽视家庭中的小事。',
      en: 'Don’t neglect family matters today.',
    },
    keywords: {
      zh: ['耐心', '细节', '计划'],
      en: ['patience', 'details', 'planning'],
    },
    lucky_items: {
      color: { zh: '橄榄绿', en: 'Olive Green' },
      number: 6,
      date: '2025-06-30',
      constellation: { zh: '处女座', en: 'Virgo' },
    },
  },
]
