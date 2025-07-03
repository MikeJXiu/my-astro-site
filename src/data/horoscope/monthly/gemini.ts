// /data/horoscope/monthly/gemini.ts

import { MonthlyHoroscopeTemplate } from '@/types/horoscope';

export const geminiMonthlyHoroscope: MonthlyHoroscopeTemplate[] = [
  {
    id: 1,
    summary: {
      zh: '信息涌动的时期，适合拓展社交圈与学习新知。',
      en: 'A wave of information makes this a great time to expand your social circle and learn new things.',
    },
    career: {
      zh: '多项任务并进，需灵活应对，保持清晰思路。',
      en: 'Multiple tasks arise—stay flexible and maintain mental clarity.',
    },
    love: {
      zh: '恋情多变，建议多倾听对方的想法，避免误解。',
      en: 'Romance may shift—listening well prevents misunderstandings.',
    },
    finance: {
      zh: '收入波动频繁，建议制定灵活的预算计划。',
      en: 'Earnings may fluctuate—build a flexible budgeting plan.',
    },
    health: {
      zh: '神经系统易疲劳，注意休息与放松。',
      en: 'Nervous fatigue may occur—prioritize rest and relaxation.',
    },
    advice: {
      zh: '保持开放思维，机会可能藏在意料之外。',
      en: 'Keep an open mind—opportunities may come unexpectedly.',
    },
    reminder: {
      zh: '避免信息过载，适当筛选有价值的内容。',
      en: 'Avoid overload—filter valuable information mindfully.',
    },
    keywords: {
      zh: ['沟通', '适应', '弹性', '学习'],
      en: ['communication', 'adaptability', 'flexibility', 'learning'],
    },
    lucky_items: {
      color: { zh: '浅黄色', en: 'light yellow' } ,
      number: 5,
      date: 'auto',
      constellation: { zh: '天秤座', en: 'Libra' },
    },
  },
];
