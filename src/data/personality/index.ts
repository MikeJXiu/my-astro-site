// /data/personality/index.ts

import { ZodiacPersonality } from '@/types/personality'

export const zodiacPersonalities: ZodiacPersonality[] = [
  {
    symbol: 'aries',
    name_zh: '白羊座',
    name_en: 'Aries',
    summary: {
      zh: '白羊座象征着新生与冲劲，是黄道十二宫的第一个星座，充满活力与领导力。',
      en: 'Aries, the first sign of the zodiac, symbolizes birth and initiative, full of energy and leadership.'
    },
    personality_traits: {
      zh: '白羊座的人充满热情与行动力，直来直往，勇于冒险，拥有极强的开拓精神。',
      en: 'Aries individuals are passionate and action-oriented, straightforward, adventurous, and pioneering.'
    },
    strengths: {
      zh: '积极主动、果断、勇敢、富有领导力。',
      en: 'Proactive, decisive, courageous, and highly capable of leadership.'
    },
    weaknesses: {
      zh: '冲动、容易发脾气、不够耐心、固执己见。',
      en: 'Impulsive, short-tempered, impatient, and sometimes stubborn.'
    },
    love_style: {
      zh: '热烈直接，追求刺激的恋爱体验，但可能缺乏持久的耐性。',
      en: 'Passionate and direct, they seek exciting romances but may lack lasting patience.'
    },
    work_style: {
      zh: '追求效率，适合自主性强的工作环境，不喜约束，喜欢挑战。',
      en: 'Efficiency-driven, prefers autonomy and challenges, dislikes rigid rules.'
    },
    family_style: {
      zh: '在家庭中可能是主导者，但需要学会聆听与妥协。',
      en: 'May take the lead in family matters but needs to learn to listen and compromise.'
    },
    suitable_jobs: {
      zh: ['创业者', '销售经理', '运动员', '军官', '探险家'],
      en: ['Entrepreneur', 'Sales Manager', 'Athlete', 'Military Officer', 'Explorer']
    },
    famous_people: {
      zh: ['李小龙', '梵高', '成龙', '玛丽亚·凯莉'],
      en: ['Bruce Lee', 'Vincent van Gogh', 'Jackie Chan', 'Mariah Carey']
    },
    keywords: {
      zh: ['冲劲', '热情', '领导者', '直接', '冒险'],
      en: ['Energetic', 'Passionate', 'Leader', 'Direct', 'Adventurous']
    }
  },

  {
    symbol: 'taurus',
    name_zh: '金牛座',
    name_en: 'Taurus',
    summary: {
      zh: '金牛座象征着稳定与务实，重视物质与安全感，是最具耐性的星座之一。',
      en: 'Taurus symbolizes stability and pragmatism, values material security, and is one of the most patient signs.'
    },
    personality_traits: {
      zh: '稳重、踏实、慢热，注重感官享受与实际成果，不易轻易改变。',
      en: 'Stable, grounded, slow to warm up, focused on sensory pleasures and tangible results.'
    },
    strengths: {
      zh: '有耐心、实际、可靠、忠诚。',
      en: 'Patient, practical, reliable, and loyal.'
    },
    weaknesses: {
      zh: '固执、缺乏变化、过于依赖舒适区。',
      en: 'Stubborn, resistant to change, overly reliant on comfort zones.'
    },
    love_style: {
      zh: '稳重体贴，重视承诺，喜欢稳定而深情的关系。',
      en: 'Caring and committed, they prefer stable and affectionate relationships.'
    },
    work_style: {
      zh: '有条理且耐力强，适合稳定、细致的工作环境。',
      en: 'Organized and enduring, suitable for stable and detail-oriented work settings.'
    },
    family_style: {
      zh: '重视家庭责任，是可以依靠的家庭支柱。',
      en: 'Values family responsibility and serves as a reliable pillar of support.'
    },
    suitable_jobs: {
      zh: ['会计', '艺术家', '建筑师', '银行职员', '厨师'],
      en: ['Accountant', 'Artist', 'Architect', 'Bank Clerk', 'Chef']
    },
    famous_people: {
      zh: ['莎士比亚', '奥黛丽·赫本', '马克·扎克伯格', '张国荣'],
      en: ['Shakespeare', 'Audrey Hepburn', 'Mark Zuckerberg', 'Leslie Cheung']
    },
    keywords: {
      zh: ['稳重', '务实', '固执', '享受', '忠诚'],
      en: ['Steady', 'Practical', 'Stubborn', 'Pleasure-seeking', 'Loyal']
    }
  }
]
