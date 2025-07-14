// /types/personality.ts

export interface ZodiacPersonality {
    symbol: string // 英文索引标识，如 'aries'
    name_zh: string
    name_en: string
  
    // 简要概述
    summary: {
      zh: string
      en: string
    }
  
    // 星座基础性格描述（综合）
    personality_traits: {
      zh: string
      en: string
    }
  
    // 优点与优势
    strengths: {
      zh: string
      en: string
    }
  
    // 缺点与挑战
    weaknesses: {
      zh: string
      en: string
    }
  
    // 爱情风格
    love_style: {
      zh: string
      en: string
    }
  
    // 职场性格 / 工作习惯
    work_style: {
      zh: string
      en: string
    }
  
    // 家庭角色倾向
    family_style: {
      zh: string
      en: string
    }
  
    // 适合职业列表
    suitable_jobs: {
      zh: string[]
      en: string[]
    }
  
    // 名人代表（可用于趣味性与信任感）
    famous_people: {
      zh: string[]
      en: string[]
    }
  
    // 标签关键词（用于展示气质 / 个性）
    keywords: {
      zh: string[]
      en: string[]
    }
  }
  