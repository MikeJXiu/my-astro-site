import { MonthlyHoroscopeTemplate } from '@/types/horoscope'

export const virgoMonthlyHoroscope: MonthlyHoroscopeTemplate[] = [
  {
    id: 1,
    summary: {
      zh: '本月适合整理与规划，为未来打下坚实基础。',
      en: 'This month favors organization and planning—lay strong foundations.',
    },
    career: {
      zh: '细节决定成败，建议制定具体的目标和流程。',
      en: 'Details matter—set concrete goals and workflows.',
    },
    love: {
      zh: '沟通是关键，表达感受会促进关系升温。',
      en: 'Communication is key—sharing feelings strengthens bonds.',
    },
    finance: {
      zh: '有理财机会出现，但需谨慎分析风险。',
      en: 'Financial opportunities arise—analyze risks carefully.',
    },
    health: {
      zh: '消化系统较敏感，注意饮食规律和质量。',
      en: 'Digestive sensitivity—maintain a clean and regular diet.',
    },
    advice: {
      zh: '不要对自己过于苛刻，给自己一点空间。',
      en: 'Don’t be too hard on yourself—allow room for flexibility.',
    },
    reminder: {
      zh: '定期回顾计划进度，避免偏离初衷。',
      en: 'Review your plans regularly—stay aligned with your intentions.',
    },
    keywords: {
      zh: ['计划', '谨慎', '沟通', '健康'],
      en: ['planning', 'caution', 'communication', 'health'],
    },
    lucky_items: {
      color: { zh: '象牙白', en: 'ivory' } ,
      number: 5,
      date: 'auto',
      constellation: { zh: '金牛座', en: 'Taurus' },
    },
  },
]
