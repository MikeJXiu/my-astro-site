import { DailyHoroscopeTemplate } from '@/types/horoscope'

export const dailyHoroscope: DailyHoroscopeTemplate[] = [
  {
    id: 1,
    date: '2025-06-30',
    summary: {
      zh: '你的领导力将发光发热，适合展现个人魅力。',
      en: "Your leadership will shine—it's a great day to showcase your charisma.",
    },
    love: {
      zh: '感情需要保持平衡，别太过主导。',
      en: 'In love, try not to dominate—balance is key.',
    },
    career: {
      zh: '你将是焦点人物，勇敢发言赢得尊重。',
      en: "You'll have the spotlight—speak up to gain respect.",
    },
    finance: {
      zh: '财务一般，注意避免冲动消费。',
      en: 'Money flow is average—avoid impulsive spending.',
    },
    health: {
      zh: '精神力充沛，适合进行强度较大的运动。',
      en: 'You’re energetic—good for high-intensity workouts.',
    },
    advice: {
      zh: '不要害怕出风头，你的光芒值得被看见。',
      en: "Don't be afraid to stand out—your light deserves to be seen.",
    },
    reminder: {
      zh: '记得给需要帮助的人包容和接纳的空间。',
      en: 'Make space for others—tolerance strengthens you.',
    },
    keywords: {
      zh: ['领导力', '自信', '包容性'],
      en: ['leadership', 'confidence', 'tolerance'],
    },
    lucky_items: {
      color: {
        zh: '橄榄绿',
        en: 'Olive Green',
      },
      number: 1,
      date: '2025-06-30',
      constellation: {
        zh: '射手座',
        en: 'Sagittarius',
      },
    },
  },
]
