// /data/horoscope/monthly/cancer.ts

import { MonthlyHoroscopeTemplate } from '@/types/horoscope';

export const monthlyHoroscopeData: MonthlyHoroscopeTemplate[] = [
  {
    id: 1,
    summary: {
      zh: '情绪起伏明显，需要内省与稳定自我。',
      en: 'Emotional waves rise—time for introspection and grounding.',
    },
    career: {
      zh: '适合重整目标，缓步推进项目，避免急于求成。',
      en: 'Reevaluate goals—progress steadily without rushing.',
    },
    love: {
      zh: '家庭关系成为重点，多陪伴可增进亲密感。',
      en: 'Family bonds take center stage—spend quality time to deepen connections.',
    },
    finance: {
      zh: '有额外支出，需留意家庭相关开销。',
      en: 'Unexpected expenses may arise, especially from home matters.',
    },
    health: {
      zh: '消化系统较敏感，建议清淡饮食。',
      en: 'Digestive sensitivity increases—opt for a light diet.',
    },
    advice: {
      zh: '信任自己的直觉，它是你强大的武器。',
      en: 'Trust your intuition—it’s your greatest ally.',
    },
    reminder: {
      zh: '本月适合整理内务，营造安全感。',
      en: 'A good time to tidy your space and reinforce a sense of security.',
    },
    keywords: {
      zh: ['家庭', '情绪', '安定', '直觉'],
      en: ['family', 'emotion', 'stability', 'intuition'],
    }
  },
];
