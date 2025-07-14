export interface CompatibilityResult {
    signs: [string, string] // 英文 symbol，例如 ['aries', 'taurus']
    title: {
      zh: string
      en: string
    }
    summary: {
      zh: string
      en: string
    }
    ratings: {
      love: number        // 1~5，代表爱情指数
      friendship: number  // 1~5，代表友情指数
      communication: number // 1~5，沟通指数
      longevity: number   // 1~5，长期发展潜力
    }
    strengths: {
      zh: string
      en: string
    }
    challenges: {
      zh: string
      en: string
    }
    advice: {
      zh: string
      en: string
    }
    keywords: {
      zh: string[]
      en: string[]
    }
  }
  