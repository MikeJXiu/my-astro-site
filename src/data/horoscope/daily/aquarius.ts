import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscopeData: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '创意十足的一天，适合展开新计划。',
      en: 'A creative day—perfect for launching new ideas.',
    },
    love: {
      zh: '保持沟通，避免因误解造成冷战。',
      en: 'Maintain communication to avoid silent misunderstandings.',
    },
    career: {
      zh: '突发灵感有望解决长久未解的问题。',
      en: 'Sudden inspiration may solve lingering issues.',
    },
    finance: {
      zh: '适合评估旧投资，重构财务策略。',
      en: 'Good time to reassess old investments and reshape strategies.',
    },
    health: {
      zh: '注意眼部与神经系统的保养。',
      en: 'Pay attention to eye care and nervous system balance.',
    },
    advice: {
      zh: '别害怕做与众不同的选择。',
      en: 'Don’t be afraid to make unconventional choices.',
    },
    reminder: {
      zh: '别让过度理性阻碍你体验情感。',
      en: 'Don’t let excessive logic block emotional experiences.',
    },
    keywords: {
      zh: ['创新', '冷静', '理性'],
      en: ['innovation', 'calmness', 'logic'],
    }
  },
]
