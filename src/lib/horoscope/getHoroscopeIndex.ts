// 获取一个简单 hash 值用于种子
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0 // 转换为32位整数
  }
  return Math.abs(hash)
}

// 主函数：根据日期和星座索引，计算 index
export function getHoroscopeIndex<T>(
  signIndex: number,
  type: 'daily' | 'monthly' | 'yearly',
  data: T[]
): number {
  const today = new Date()
  const dateStr =
    type === 'daily'
      ? today.toISOString().split('T')[0] // yyyy-mm-dd
      : type === 'monthly'
      ? `${today.getFullYear()}-${today.getMonth() + 1}` // yyyy-mm
      : `${today.getFullYear()}` // yearly: yyyy

  const baseStr = `${type}-${dateStr}-${signIndex}`
  const hash = hashString(baseStr)
  const index = hash % data.length

  return index
}
