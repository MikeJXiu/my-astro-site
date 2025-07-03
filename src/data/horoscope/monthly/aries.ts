// /data/horoscope/monthly/aries.ts

import { MonthlyHoroscopeTemplate } from '@/types/horoscope';

export const ariesMonthlyHoroscope: MonthlyHoroscopeTemplate[] = [
  {
    id: 1,
    summary: {
      zh: '这个月你将充满驱动力，还有许多新计划。',
      en: "This month, you're full of drive—perfect for launching new plans.",
    },
    career: {
      zh: '在职场上将有机会展示领导力，适合主动推进项目。',
      en: 'Opportunities arise to showcase leadership—take initiative in your projects.',
    },
    love: {
      zh: '单身者可能遇到志同道合的人；伴侣间则适合共同成长。',
      en: 'Singles may meet kindred spirits; couples thrive through shared growth.',
    },
    finance: {
      zh: '财务较稳定，适宜理性规划投资。',
      en: 'Stable finances—ideal time for rational investment planning.',
    },
    health: {
      zh: '注意消化系统，避免暴饮暴食或饮食不规律。',
      en: 'Watch your digestive system—avoid excessive drinking or overeating.',
    },
    advice: {
      zh: '不要因一时小胜而忽略细节。',
      en: "Don't overlook details due to momentary success.",
    },
    reminder: {
      zh: '保持良好睡眠，有助于提升整体状态。',
      en: 'Maintain regular sleep to enhance your overall well-being.',
    },
    keywords: {
      zh: ['突破', '主动', '领导力', '自律'],
      en: ['breakthrough', 'initiative', 'leadership', 'discipline'],
    },
    lucky_items: 
      {
        color: { zh: '天青色', en: 'sky cyan' },
        number: 11,
        date: 'auto',
        constellation: { zh: '双子座', en: 'Gemini' },
      }
  },
];
