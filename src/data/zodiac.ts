import { ZodiacSign } from '@/types/zodiac';

const zodiacSigns: ZodiacSign[] = [
  {
    name: '白羊座',
    nameEn: 'Aries',
    dateRange: '3月21日 - 4月19日',
    dateRangeEn: 'March 21 - April 19',
    element: '火',
    elementEn: 'Fire',
    description:
      '白羊座象征新的开始，热情洋溢，永不退缩。他们富有冒险精神，热衷追求目标，总能激励周围的人前行。虽然有时显得冲动，但正是这种果敢让他们成为天然的领导者。',
    descriptionEn:
      'Aries represents new beginnings—passionate, fearless, and full of drive. They embrace challenges head-on and inspire others with their ambition and courage. Though impulsive at times, they’re born to lead and thrive on action.',
  },
  {
    name: '金牛座',
    nameEn: 'Taurus',
    dateRange: '4月20日 - 5月20日',
    dateRangeEn: 'April 20 - May 20',
    element: '土',
    elementEn: 'Earth',
    description:
      '金牛座沉稳而可靠，追求生活的品质与稳定。他们对美和舒适有着极高的敏感度，喜欢有计划地实现目标，是值得信赖的长期伙伴。',
    descriptionEn:
      'Taurus is grounded, dependable, and deeply appreciates comfort and beauty. They pursue stability with patience and perseverance, making them loyal partners who value long-term commitments.',
  },
  {
    name: '双子座',
    nameEn: 'Gemini',
    dateRange: '5月21日 - 6月20日',
    dateRangeEn: 'May 21 - June 20',
    element: '风',
    elementEn: 'Air',
    description:
      '双子座聪慧多变，思维敏捷，擅长沟通和学习新事物。他们拥有双重性格，善于适应不同场合，是社交场中的灵魂人物。',
    descriptionEn:
      'Gemini is intellectually curious and highly adaptable. Quick-witted and expressive, they thrive in conversation and bring charm and insight to every social interaction.',
  },
  {
    name: '巨蟹座',
    nameEn: 'Cancer',
    dateRange: '6月21日 - 7月22日',
    dateRangeEn: 'June 21 - July 22',
    element: '水',
    elementEn: 'Water',
    description:
      '巨蟹座情感细腻，家庭观念强，是典型的守护者角色。他们富有同理心，擅长关怀他人，为人际关系注入温度。',
    descriptionEn:
      'Cancer is intuitive, nurturing, and emotionally deep. Their strong sense of home and family makes them compassionate caretakers who offer unwavering support to loved ones.',
  },
  {
    name: '狮子座',
    nameEn: 'Leo',
    dateRange: '7月23日 - 8月22日',
    dateRangeEn: 'July 23 - August 22',
    element: '火',
    elementEn: 'Fire',
    description:
      '狮子座自信而具表现力，喜欢成为关注的中心。他们具有非凡的领导能力与艺术气质，散发着与生俱来的魅力。',
    descriptionEn:
      'Leo is confident, charismatic, and drawn to the spotlight. Natural leaders with creative flair, they inspire others with their boldness and warmth.',
  },
  {
    name: '处女座',
    nameEn: 'Virgo',
    dateRange: '8月23日 - 9月22日',
    dateRangeEn: 'August 23 - September 22',
    element: '土',
    elementEn: 'Earth',
    description:
      '处女座追求完美，注重细节，富有逻辑思维与实用精神。他们是解决问题的能手，工作中极具条理和效率。',
    descriptionEn:
      'Virgo is analytical, detail-oriented, and perfection-seeking. Their practical nature and organized mindset make them excellent problem-solvers in any situation.',
  },
  {
    name: '天秤座',
    nameEn: 'Libra',
    dateRange: '9月23日 - 10月22日',
    dateRangeEn: 'September 23 - October 22',
    element: '风',
    elementEn: 'Air',
    description:
      '天秤座热爱和谐与美感，擅长在人际中取得平衡。他们讲求公平，富有艺术气息，是社交场中的优雅代表。',
    descriptionEn:
      'Libra values balance, harmony, and aesthetics. With a strong sense of justice and charm, they navigate relationships with grace and seek mutual understanding.',
  },
  {
    name: '天蝎座',
    nameEn: 'Scorpio',
    dateRange: '10月23日 - 11月21日',
    dateRangeEn: 'October 23 - November 21',
    element: '水',
    elementEn: 'Water',
    description:
      '天蝎座神秘而富有洞察力，情感深邃且强烈。他们具有坚定的意志和强大的再生能力，是探索内心世界的行者。',
    descriptionEn:
      'Scorpio is intense, intuitive, and emotionally profound. With unmatched focus and resilience, they dive deep into life’s mysteries and emerge stronger.',
  },
  {
    name: '射手座',
    nameEn: 'Sagittarius',
    dateRange: '11月22日 - 12月21日',
    dateRangeEn: 'November 22 - December 21',
    element: '火',
    elementEn: 'Fire',
    description:
      '射手座乐观开朗，热爱自由与冒险，拥有哲学思维与远大理想。他们不断探索世界，追寻更高层次的意义。',
    descriptionEn:
      'Sagittarius is optimistic, adventurous, and driven by a thirst for knowledge. They seek truth and meaning, always looking toward the horizon with hope.',
  },
  {
    name: '摩羯座',
    nameEn: 'Capricorn',
    dateRange: '12月22日 - 1月19日',
    dateRangeEn: 'December 22 - January 19',
    element: '土',
    elementEn: 'Earth',
    description:
      '摩羯座务实坚韧，有强烈的责任感与自律精神。他们目标明确，擅长规划与管理，是值得依靠的奋斗者。',
    descriptionEn:
      'Capricorn is disciplined, responsible, and relentlessly driven. With a clear vision of success, they climb steadily toward their goals, often becoming pillars of stability.',
  },
  {
    name: '水瓶座',
    nameEn: 'Aquarius',
    dateRange: '1月20日 - 2月18日',
    dateRangeEn: 'January 20 - February 18',
    element: '风',
    elementEn: 'Air',
    description:
      '水瓶座思想前卫，富有创新精神，关注社会进步。他们独立自主，常以不同寻常的方式影响世界。',
    descriptionEn:
      'Aquarius is forward-thinking, inventive, and focused on the greater good. Their unique perspective and independence make them visionary changemakers.',
  },
  {
    name: '双鱼座',
    nameEn: 'Pisces',
    dateRange: '2月19日 - 3月20日',
    dateRangeEn: 'February 19 - March 20',
    element: '水',
    elementEn: 'Water',
    description:
      '双鱼座温柔敏感，拥有丰富的想象力与艺术天赋。他们富有同理心，常常扮演倾听者与疗愈者的角色。',
    descriptionEn:
      'Pisces is gentle, intuitive, and artistically gifted. Deeply empathetic, they offer comfort and creativity, often acting as emotional healers in their communities.',
  },
];

export default zodiacSigns;
