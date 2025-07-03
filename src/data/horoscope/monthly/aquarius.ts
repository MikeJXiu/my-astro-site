import { MonthlyHoroscopeTemplate } from '@/types/horoscope'

export const aquariusMonthlyHoroscope: MonthlyHoroscopeTemplate[] = [
  {
    id: 1,
    summary: {
      zh: '创意流动，走出舒适圈，探索新路径。',
      en: 'Creativity flows–break conventions and explore new paths.',
    },
    career: {
      zh: '适合提出创新的新方案或加入新团队。',
      en: 'Pitch innovative ideas or join new teams.',
    },
    love: {
      zh: '恋情变化较快，保持开放心态更轻松。',
      en: 'Romantic changes may occur–stay open-minded.',
    },
    finance: {
      zh: '适合尝试投资方式或数字理财工具。',
      en: 'Try new investment styles or digital financial tools.',
    },
    health: {
      zh: '注意神经系统与睡眠质量，宜适度放松。',
      en: 'Take care of your nervous system and get good rest.',
    },
    advice: {
      zh: '打破框架，探索创新之路。',
      en: 'Break the mold and explore new innovations.',
    },
    reminder: {
      zh: '灵感稍纵即逝，记得及时记录。',
      en: 'Inspiration fades quickly–be sure to capture it.',
    },
    keywords: {
      zh: ['创意', '突破', '灵感', '自由'],
      en: ['innovation', 'breakthrough', 'inspiration', 'freedom'],
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

