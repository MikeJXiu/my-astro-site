import tzLookup from 'tz-lookup'

/**
 * 根据经纬度获取时区字符串（如 'Asia/Shanghai'、'America/New_York'）
 * @param lat 纬度
 * @param lng 经度
 * @returns 时区 ID（用于时间换算）
 */
export function getTimeZoneByLatLng(lat: number, lng: number): string {
  try {
    return tzLookup(lat, lng)
  } catch (error) {
    console.error('时区查找失败:', error)
    return 'UTC' // 默认 UTC，防止程序中断
  }
}
