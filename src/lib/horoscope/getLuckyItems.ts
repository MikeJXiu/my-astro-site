import type { LangText, LuckyItem } from '@/types/horoscope'
import seedrandom from 'seedrandom'

// 工具函数：从数组中使用 seed 随机挑选一个元素
const pick = <T>(arr: T[], rng: () => number): T => arr[Math.floor(rng() * arr.length)]

// 扩展版颜色选项
const colors: LangText[] = [
  { zh: '红色', en: 'Red' },
  { zh: '蓝色', en: 'Blue' },
  { zh: '黄色', en: 'Yellow' },
  { zh: '绿色', en: 'Green' },
  { zh: '紫色', en: 'Purple' },
  { zh: '橙色', en: 'Orange' },
  { zh: '粉红色', en: 'Pink' },
  { zh: '黑色', en: 'Black' },
  { zh: '白色', en: 'White' },
  { zh: '灰色', en: 'Gray' },
  { zh: '金色', en: 'Gold' },
  { zh: '银色', en: 'Silver' },
  { zh: '青色', en: 'Cyan' },
  { zh: '棕色', en: 'Brown' },
  { zh: '米色', en: 'Beige' },
]

// 扩展版幸运方向
const directions: LangText[] = [
  { zh: '东方', en: 'East' },
  { zh: '西方', en: 'West' },
  { zh: '南方', en: 'South' },
  { zh: '北方', en: 'North' },
  { zh: '东南方', en: 'Southeast' },
  { zh: '西南方', en: 'Southwest' },
  { zh: '东北方', en: 'Northeast' },
  { zh: '西北方', en: 'Northwest' },
]

// 扩展版幸运物品
const items: LangText[] = [
  { zh: '水晶手链', en: 'Crystal Bracelet' },
  { zh: '星座项链', en: 'Zodiac Necklace' },
  { zh: '香薰蜡烛', en: 'Aromatic Candle' },
  { zh: '幸运硬币', en: 'Lucky Coin' },
  { zh: '绿植盆栽', en: 'Green Plant' },
  { zh: '护身符', en: 'Amulet' },
  { zh: '无线耳机', en: 'Bluetooth Earphones' },
  { zh: '红绳手链', en: 'Red String Bracelet' },
  { zh: '星星吊坠', en: 'Star Pendant' },
  { zh: '手写日记本', en: 'Notebook' },
  { zh: '书签', en: 'Bookmark' },
  { zh: '幸运钥匙圈', en: 'Lucky Keychain' },
  { zh: '星空图案笔记本', en: 'Starry Notebook' },
]

// 12 星座英文索引（也可以用 LangText）
const zodiacConstellations: LangText[] = [
  { zh: '白羊座', en: 'Aries' },
  { zh: '金牛座', en: 'Taurus' },
  { zh: '双子座', en: 'Gemini' },
  { zh: '巨蟹座', en: 'Cancer' },
  { zh: '狮子座', en: 'Leo' },
  { zh: '处女座', en: 'Virgo' },
  { zh: '天秤座', en: 'Libra' },
  { zh: '天蝎座', en: 'Scorpio' },
  { zh: '射手座', en: 'Sagittarius' },
  { zh: '摩羯座', en: 'Capricorn' },
  { zh: '水瓶座', en: 'Aquarius' },
  { zh: '双鱼座', en: 'Pisces' },
]

/**
 * 根据传入 seed（如 '2-2025-07-10'）生成幸运项，保证每天每个星座唯一但一致
 */
export function getLuckyItems(seed: string): LuckyItem {
  const rng = seedrandom(seed)

  const hour = Math.floor(rng() * 24)
  const time = `${hour.toString().padStart(2, '0')}:00`

  return {
    color: pick(colors, rng),
    number: Array.from({ length: 3 }, () => (Math.floor(rng() * 9) + 1).toString()),
    direction: pick(directions, rng),
    time: { zh: time, en: time },
    item: pick(items, rng),
    constellation: pick(zodiacConstellations, rng),
  }
}
