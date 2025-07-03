export default function getHoroscopeIndex(
  sign: string,
  seed: number,
  pool: any[]
): number {
  // 防止 sign 不是字符串时报错
  const signStr = typeof sign === 'string' ? sign : String(sign ?? '')

  const base = signStr
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)

  return (base + seed) % pool.length
}
