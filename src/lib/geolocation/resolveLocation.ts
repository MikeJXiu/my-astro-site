import { geocodePlace } from './tencent'
import { getTimeZoneByLatLng } from './getTimeZoneByLatLng'

/**
 * 根据城市名获取经纬度与时区
 * @param cityName 城市名称，如 "北京"、"New York"
 * @returns 包含经纬度和时区信息的对象
 */
export async function resolveLocation(cityName: string): Promise<{
  lat: number
  lng: number
  timeZone: string
}> {
  const { lat, lng } = await geocodePlace(cityName)
  const timeZone = getTimeZoneByLatLng(lat, lng)

  return { lat, lng, timeZone }
}
