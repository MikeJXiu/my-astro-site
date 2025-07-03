import { MonthlyHoroscopeTemplate } from '@/types/horoscope'

export const piscesMonthlyHoroscope: MonthlyHoroscopeTemplate[] = [
  {
    id: 1,
    summary: {
      zh: '感性与直觉主导，适合创作、疗愈与内在成长。',
      en: 'Emotion and intuition prevail—ideal for creation, healing, and growth.',
    },
    career: {
      zh: '创意行业表现佳，可尝试灵感驱动型任务。',
      en: 'Strong performance in creative work—pursue intuitive-driven tasks.',
    },
    love: {
      zh: '感情细腻易受伤，多倾听少误解。',
      en: 'Sensitive emotions—listen more to avoid misunderstandings.',
    },
    finance: {
      zh: '适合艺术类收入，务实预算仍不可少。',
      en: 'Creative earnings are possible, but budgeting is still key.',
    },
    health: {
      zh: '避免久坐和熬夜，注意脚部保暖。',
      en: 'Avoid sitting too long or staying up—keep your feet warm.',
    },
    advice: {
      zh: '沉浸内心世界时也要保持现实感。',
      en: 'Stay grounded while exploring your inner world.',
    },
    reminder: {
      zh: '别让他人情绪牵动你的判断。',
      en: 'Don’t let others’ emotions sway your decisions.',
    },
    keywords: {
      zh: ['灵感', '感性', '直觉', '疗愈'],
      en: ['inspiration', 'sensitivity', 'intuition', 'healing'],
    },
    lucky_items:  {
      color: { zh: '海蓝色', en: 'ocean blue' } ,
      number: 3,
      date: 'auto',
      constellation: { zh: '巨蟹座', en: 'Cancer' },
    },
  },
]
