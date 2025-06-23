// /data/zodiacSigns.ts
import { ZodiacDetail } from '@/types/zodiacDetail'

const zodiacSigns: ZodiacDetail[] = [
  {
    name_zh: '白羊座',
    name_en: 'Aries',
    date_range_zh: '3月21日 - 4月19日',
    date_range_en: 'March 21 – April 19',
    element_zh: '火象',
    element_en: 'Fire',
    modality_zh: '基本宫',
    modality_en: 'Cardinal',
    ruling_planet_zh: '火星',
    ruling_planet_en: 'Mars',
    symbol: 'aries',

    description_zh: '白羊座是黄道十二宫的第一个星座，象征着开始和活力。他们天生勇敢、行动力强，是天生的开拓者。',
    description_en: 'Aries is the first sign of the zodiac, symbolizing beginnings and energy. Aries individuals are brave, action-oriented, and natural pioneers.',

    strengths_zh: ['热情', '勇敢', '充满活力', '直率'],
    strengths_en: ['Passionate', 'Brave', 'Energetic', 'Straightforward'],

    weaknesses_zh: ['冲动', '急躁', '缺乏耐性', '好胜'],
    weaknesses_en: ['Impulsive', 'Impatient', 'Lack of patience', 'Competitive'],

    career_zh: '适合需要领导力和快速决策的工作，如企业家、军官、销售等。',
    career_en: 'Ideal for roles requiring leadership and quick decisions, such as entrepreneur, officer, or sales executive.',

    love_zh: '在爱情中热情主动，有强烈占有欲，喜欢追求而非被追求。',
    love_en: 'Passionate and assertive in love, Aries likes to pursue rather than be pursued and may show possessiveness.',

    lucky_color_zh: '红色',
    lucky_color_en: 'Red',

    lucky_number_zh: '九',
    lucky_number_en: 'Nine',

    lucky_day_zh: '星期二',
    lucky_day_en: 'Tuesday',

    compatibility_zh: ['狮子座', '射手座'],
    compatibility_en: ['Leo', 'Sagittarius']
  },
  {
    name_zh: '金牛座',
    name_en: 'Taurus',
    date_range_zh: '4月20日 - 5月20日',
    date_range_en: 'April 20 – May 20',
    element_zh: '土象',
    element_en: 'Earth',
    modality_zh: '固定宫',
    modality_en: 'Fixed',
    ruling_planet_zh: '金星',
    ruling_planet_en: 'Venus',
    symbol: 'taurus',

    description_zh: '金牛座象征稳定和持久，追求舒适生活和物质安全。他们有耐性，重视实际。',
    description_en: 'Taurus symbolizes stability and endurance, seeking comfort and material security. They are patient and pragmatic.',

    strengths_zh: ['可靠', '务实', '有耐性', '忠诚'],
    strengths_en: ['Reliable', 'Practical', 'Patient', 'Loyal'],

    weaknesses_zh: ['固执', '占有欲强', '过于保守'],
    weaknesses_en: ['Stubborn', 'Possessive', 'Overly conservative'],

    career_zh: '适合需要专注与稳定的职业，如金融、农业、艺术设计等。',
    career_en: 'Suitable for careers requiring focus and stability, such as finance, agriculture, or design.',

    love_zh: '爱情中忠诚稳定，喜欢有安全感的关系，不轻易改变。',
    love_en: 'Loyal and stable in love, Taurus values security and is slow to change once committed.',

    lucky_color_zh: '绿色',
    lucky_color_en: 'Green',

    lucky_number_zh: '六',
    lucky_number_en: 'Six',

    lucky_day_zh: '星期五',
    lucky_day_en: 'Friday',

    compatibility_zh: ['处女座', '摩羯座'],
    compatibility_en: ['Virgo', 'Capricorn']
  },
  {
    name_zh: '双子座',
    name_en: 'Gemini',
    date_range_zh: '5月21日 - 6月20日',
    date_range_en: 'May 21 – June 20',
    element_zh: '风象',
    element_en: 'Air',
    modality_zh: '变动宫',
    modality_en: 'Mutable',
    ruling_planet_zh: '水星',
    ruling_planet_en: 'Mercury',
    symbol: 'gemini',

    description_zh: '双子座思维敏捷，擅长沟通，喜欢变化和新鲜事物，是黄道中最具好奇心的星座。',
    description_en: 'Gemini is quick-witted, communicative, and curious, thriving on change and new experiences.',

    strengths_zh: ['聪明', '机智', '多才多艺', '善于交流'],
    strengths_en: ['Intelligent', 'Witty', 'Versatile', 'Communicative'],

    weaknesses_zh: ['多变', '容易分心', '情绪不稳'],
    weaknesses_en: ['Inconsistent', 'Easily distracted', 'Emotionally unstable'],

    career_zh: '适合需要沟通技巧和快速反应的行业，如媒体、公关、教育。',
    career_en: 'Ideal for roles in media, PR, education, or any field requiring communication and adaptability.',

    love_zh: '爱情中喜欢刺激和新鲜感，喜欢有趣和充满变化的伴侣。',
    love_en: 'Gemini enjoys excitement in love and seeks fun, stimulating relationships.',

    lucky_color_zh: '黄色',
    lucky_color_en: 'Yellow',

    lucky_number_zh: '五',
    lucky_number_en: 'Five',

    lucky_day_zh: '星期三',
    lucky_day_en: 'Wednesday',

    compatibility_zh: ['天秤座', '水瓶座'],
    compatibility_en: ['Libra', 'Aquarius']
  },
  {
    name_zh: '巨蟹座',
    name_en: 'Cancer',
    date_range_zh: '6月21日 - 7月22日',
    date_range_en: 'June 21 – July 22',
    element_zh: '水象',
    element_en: 'Water',
    modality_zh: '基本宫',
    modality_en: 'Cardinal',
    ruling_planet_zh: '月亮',
    ruling_planet_en: 'Moon',
    symbol: 'cancer',

    description_zh: '巨蟹座情感丰富，重视家庭与安全感，内心柔软但保护意识强。',
    description_en: 'Cancer is emotional and nurturing, valuing family and security. Though soft inside, they are fiercely protective.',

    strengths_zh: ['体贴', '有同理心', '忠诚', '敏感'],
    strengths_en: ['Caring', 'Empathetic', 'Loyal', 'Sensitive'],

    weaknesses_zh: ['多愁善感', '依赖性强', '情绪化'],
    weaknesses_en: ['Moody', 'Dependent', 'Overly emotional'],

    career_zh: '适合教育、护理、家庭相关的职业，如教师、护士、心理咨询师。',
    career_en: 'Suited for caregiving, education, and family-oriented careers such as teaching or counseling.',

    love_zh: '在爱情中温柔体贴，渴望稳定和深度的情感联结。',
    love_en: 'Gentle and loyal in love, Cancer seeks emotional depth and long-term security.',

    lucky_color_zh: '银白色',
    lucky_color_en: 'Silver',

    lucky_number_zh: '二',
    lucky_number_en: 'Two',

    lucky_day_zh: '星期一',
    lucky_day_en: 'Monday',

    compatibility_zh: ['双鱼座', '天蝎座'],
    compatibility_en: ['Pisces', 'Scorpio']
  },
  {
    name_zh: '狮子座',
    name_en: 'Leo',
    date_range_zh: '7月23日 - 8月22日',
    date_range_en: 'July 23 – August 22',
    element_zh: '火象',
    element_en: 'Fire',
    modality_zh: '固定宫',
    modality_en: 'Fixed',
    ruling_planet_zh: '太阳',
    ruling_planet_en: 'Sun',
    symbol: 'leo',

    description_zh: '狮子座热情大方，具有领导魅力，喜欢被关注和认可。',
    description_en: 'Leo is passionate and generous, with natural leadership qualities and a love for recognition.',

    strengths_zh: ['自信', '慷慨', '有魅力', '忠诚'],
    strengths_en: ['Confident', 'Generous', 'Charismatic', 'Loyal'],

    weaknesses_zh: ['自我中心', '固执', '爱面子'],
    weaknesses_en: ['Self-centered', 'Stubborn', 'Prideful'],

    career_zh: '适合需要表现力和领导力的岗位，如演艺、管理、销售。',
    career_en: 'Excels in roles requiring charisma and leadership, such as entertainment, management, or sales.',

    love_zh: '爱情中热情洋溢，喜欢成为关系的主导者和保护者。',
    love_en: 'In love, Leo is passionate and likes to lead and protect their partner.',

    lucky_color_zh: '金色',
    lucky_color_en: 'Gold',

    lucky_number_zh: '一',
    lucky_number_en: 'One',

    lucky_day_zh: '星期日',
    lucky_day_en: 'Sunday',

    compatibility_zh: ['白羊座', '射手座'],
    compatibility_en: ['Aries', 'Sagittarius']
  },
  {
    name_zh: '处女座',
    name_en: 'Virgo',
    date_range_zh: '8月23日 - 9月22日',
    date_range_en: 'August 23 – September 22',
    element_zh: '土象',
    element_en: 'Earth',
    modality_zh: '变动宫',
    modality_en: 'Mutable',
    ruling_planet_zh: '水星',
    ruling_planet_en: 'Mercury',
    symbol: 'virgo',

    description_zh: '处女座追求完美，擅长分析与细节，是十二星座中最注重实用与效率的星座。',
    description_en: 'Virgo seeks perfection, excels at analysis and details, and values practicality and efficiency.',

    strengths_zh: ['细心', '理性', '勤奋', '可靠'],
    strengths_en: ['Detail-oriented', 'Rational', 'Diligent', 'Reliable'],

    weaknesses_zh: ['挑剔', '焦虑', '过于保守'],
    weaknesses_en: ['Critical', 'Anxious', 'Overly cautious'],

    career_zh: '适合医学、编辑、数据分析等需要精确与逻辑的职业。',
    career_en: 'Well-suited for fields requiring precision and logic such as medicine, editing, or data analysis.',

    love_zh: '爱情中追求稳定理性，细致体贴但不易表露情感。',
    love_en: 'Rational and stable in love, Virgo is caring but reserved in emotional expression.',

    lucky_color_zh: '灰色',
    lucky_color_en: 'Gray',

    lucky_number_zh: '五',
    lucky_number_en: 'Five',

    lucky_day_zh: '星期三',
    lucky_day_en: 'Wednesday',

    compatibility_zh: ['金牛座', '摩羯座'],
    compatibility_en: ['Taurus', 'Capricorn']
  },
  {
    name_zh: '天秤座',
    name_en: 'Libra',
    date_range_zh: '9月23日 - 10月22日',
    date_range_en: 'September 23 – October 22',
    element_zh: '风象',
    element_en: 'Air',
    modality_zh: '基本宫',
    modality_en: 'Cardinal',
    ruling_planet_zh: '金星',
    ruling_planet_en: 'Venus',
    symbol: 'libra',

    description_zh: '天秤座重视和谐与公平，擅长人际交往，是天生的和平调解者。',
    description_en: 'Libra values harmony and fairness, excels in social situations, and is a natural peacemaker.',

    strengths_zh: ['优雅', '公正', '社交能力强', '平衡'],
    strengths_en: ['Graceful', 'Fair-minded', 'Sociable', 'Balanced'],

    weaknesses_zh: ['犹豫不决', '过于追求和平', '逃避冲突'],
    weaknesses_en: ['Indecisive', 'Overly peace-seeking', 'Conflict avoidant'],

    career_zh: '适合法律、艺术、外交等讲求平衡与沟通的职业。',
    career_en: 'Ideal for law, art, or diplomacy—fields where balance and communication are key.',

    love_zh: '爱情中温和体贴，注重关系的和谐与美感。',
    love_en: 'Gentle and considerate in love, Libra values harmony and aesthetics in relationships.',

    lucky_color_zh: '粉色',
    lucky_color_en: 'Pink',

    lucky_number_zh: '六',
    lucky_number_en: 'Six',

    lucky_day_zh: '星期五',
    lucky_day_en: 'Friday',

    compatibility_zh: ['双子座', '水瓶座'],
    compatibility_en: ['Gemini', 'Aquarius']
  },
  {
    name_zh: '天蝎座',
    name_en: 'Scorpio',
    date_range_zh: '10月23日 - 11月21日',
    date_range_en: 'October 23 – November 21',
    element_zh: '水象',
    element_en: 'Water',
    modality_zh: '固定宫',
    modality_en: 'Fixed',
    ruling_planet_zh: '冥王星',
    ruling_planet_en: 'Pluto',
    symbol: 'scorpio',

    description_zh: '天蝎座神秘而深沉，情感强烈，具有强大的洞察力与控制力。',
    description_en: 'Scorpio is intense and mysterious, with deep emotions, powerful insight, and strong will.',

    strengths_zh: ['意志坚定', '有洞察力', '忠诚', '专注'],
    strengths_en: ['Determined', 'Insightful', 'Loyal', 'Focused'],

    weaknesses_zh: ['占有欲强', '猜忌', '报复心重'],
    weaknesses_en: ['Possessive', 'Suspicious', 'Vengeful'],

    career_zh: '适合心理学、研究、侦探等需要深入分析与保密的职业。',
    career_en: 'Suited for psychology, research, investigation, or other fields requiring discretion and depth.',

    love_zh: '爱情中热情而深沉，追求灵魂层次的情感联结。',
    love_en: 'Scorpio seeks deep, soulful connections in love and loves with intense passion.',

    lucky_color_zh: '深红色',
    lucky_color_en: 'Dark Red',

    lucky_number_zh: '八',
    lucky_number_en: 'Eight',

    lucky_day_zh: '星期二',
    lucky_day_en: 'Tuesday',

    compatibility_zh: ['巨蟹座', '双鱼座'],
    compatibility_en: ['Cancer', 'Pisces']
  },
  {
    name_zh: '射手座',
    name_en: 'Sagittarius',
    date_range_zh: '11月22日 - 12月21日',
    date_range_en: 'November 22 – December 21',
    element_zh: '火象',
    element_en: 'Fire',
    modality_zh: '变动宫',
    modality_en: 'Mutable',
    ruling_planet_zh: '木星',
    ruling_planet_en: 'Jupiter',
    symbol: 'sagittarius',

    description_zh: '射手座热爱自由、乐观开朗，是天生的冒险家与哲学家。',
    description_en: 'Sagittarius is freedom-loving, optimistic, and a natural adventurer and philosopher.',

    strengths_zh: ['乐观', '坦率', '爱冒险', '幽默感强'],
    strengths_en: ['Optimistic', 'Honest', 'Adventurous', 'Humorous'],

    weaknesses_zh: ['鲁莽', '不拘小节', '不负责任'],
    weaknesses_en: ['Reckless', 'Careless', 'Irresponsible'],

    career_zh: '适合旅游、教育、媒体等需要广阔视野与表达能力的职业。',
    career_en: 'Great for travel, education, media—any field that values broad vision and communication.',

    love_zh: '爱情中充满热情但不喜束缚，渴望自由与心灵契合。',
    love_en: 'Passionate but freedom-loving in love, Sagittarius seeks soulful yet open relationships.',

    lucky_color_zh: '紫色',
    lucky_color_en: 'Purple',

    lucky_number_zh: '三',
    lucky_number_en: 'Three',

    lucky_day_zh: '星期四',
    lucky_day_en: 'Thursday',

    compatibility_zh: ['白羊座', '狮子座'],
    compatibility_en: ['Aries', 'Leo']
  },
  {
    name_zh: '摩羯座',
    name_en: 'Capricorn',
    date_range_zh: '12月22日 - 1月19日',
    date_range_en: 'December 22 – January 19',
    element_zh: '土象',
    element_en: 'Earth',
    modality_zh: '基本宫',
    modality_en: 'Cardinal',
    ruling_planet_zh: '土星',
    ruling_planet_en: 'Saturn',
    symbol: 'capricorn',

    description_zh: '摩羯座踏实稳重，有远大目标，是最具责任感与耐力的星座。',
    description_en: 'Capricorn is grounded and goal-oriented, known for responsibility, endurance, and long-term vision.',

    strengths_zh: ['有责任感', '坚持不懈', '实际', '自律'],
    strengths_en: ['Responsible', 'Persistent', 'Practical', 'Disciplined'],

    weaknesses_zh: ['固执', '悲观', '情感压抑'],
    weaknesses_en: ['Stubborn', 'Pessimistic', 'Emotionally reserved'],

    career_zh: '适合需要长期规划与权威管理的职业，如金融、政治、建筑。',
    career_en: 'Ideal for finance, politics, and architecture—fields requiring planning and authority.',

    love_zh: '爱情中表现克制，但非常忠诚可靠，重视长远关系。',
    love_en: 'Reserved in love, but loyal and dependable, Capricorn values long-term commitment.',

    lucky_color_zh: '黑色',
    lucky_color_en: 'Black',

    lucky_number_zh: '四',
    lucky_number_en: 'Four',

    lucky_day_zh: '星期六',
    lucky_day_en: 'Saturday',

    compatibility_zh: ['处女座', '金牛座'],
    compatibility_en: ['Virgo', 'Taurus']
  },
  {
    name_zh: '水瓶座',
    name_en: 'Aquarius',
    date_range_zh: '1月20日 - 2月18日',
    date_range_en: 'January 20 – February 18',
    element_zh: '风象',
    element_en: 'Air',
    modality_zh: '固定宫',
    modality_en: 'Fixed',
    ruling_planet_zh: '天王星',
    ruling_planet_en: 'Uranus',
    symbol: 'aquarius',

    description_zh: '水瓶座思想前卫，崇尚自由，是黄道中最具创造力与独立精神的星座。',
    description_en: 'Aquarius is visionary and independent, known for originality and a progressive mindset.',

    strengths_zh: ['创新', '独立', '博爱', '理性'],
    strengths_en: ['Innovative', 'Independent', 'Humanitarian', 'Rational'],

    weaknesses_zh: ['疏离', '冷漠', '叛逆'],
    weaknesses_en: ['Detached', 'Aloof', 'Rebellious'],

    career_zh: '适合科技、艺术、社会改革等充满变革与创造的领域。',
    career_en: 'Best suited for technology, arts, or social innovation—fields valuing change and creativity.',

    love_zh: '爱情中追求精神共鸣，需要给予足够空间与自由。',
    love_en: 'Aquarius seeks intellectual connection and values freedom in romantic relationships.',

    lucky_color_zh: '蓝色',
    lucky_color_en: 'Blue',

    lucky_number_zh: '七',
    lucky_number_en: 'Seven',

    lucky_day_zh: '星期三',
    lucky_day_en: 'Wednesday',

    compatibility_zh: ['双子座', '天秤座'],
    compatibility_en: ['Gemini', 'Libra']
  },
  {
    name_zh: '双鱼座',
    name_en: 'Pisces',
    date_range_zh: '2月19日 - 3月20日',
    date_range_en: 'February 19 – March 20',
    element_zh: '水象',
    element_en: 'Water',
    modality_zh: '变动宫',
    modality_en: 'Mutable',
    ruling_planet_zh: '海王星',
    ruling_planet_en: 'Neptune',
    symbol: 'pisces',

    description_zh: '双鱼座感性浪漫，富有同情心，是最具幻想与艺术气质的星座。',
    description_en: 'Pisces is emotional, compassionate, and artistically gifted, often immersed in dreams and intuition.',

    strengths_zh: ['富有想象力', '善解人意', '浪漫', '牺牲奉献'],
    strengths_en: ['Imaginative', 'Empathetic', 'Romantic', 'Selfless'],

    weaknesses_zh: ['逃避现实', '敏感', '容易受伤'],
    weaknesses_en: ['Escapist', 'Overly sensitive', 'Easily hurt'],

    career_zh: '适合艺术、心理、医疗等需要感性与同理的领域。',
    career_en: 'Ideal for arts, counseling, and healing—fields that require empathy and sensitivity.',

    love_zh: '爱情中温柔体贴，容易沉溺于情感中，追求梦幻般的爱情体验。',
    love_en: 'Gentle and romantic in love, Pisces seeks dreamy, emotional connections.',

    lucky_color_zh: '海蓝色',
    lucky_color_en: 'Sea Blue',

    lucky_number_zh: '九',
    lucky_number_en: 'Nine',

    lucky_day_zh: '星期四',
    lucky_day_en: 'Thursday',

    compatibility_zh: ['巨蟹座', '天蝎座'],
    compatibility_en: ['Cancer', 'Scorpio']
  }
]

export default zodiacSigns