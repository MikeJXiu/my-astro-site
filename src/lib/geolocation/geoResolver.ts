// /src/lib/geolocation/geoResolver.ts
import tzLookup from 'tz-lookup'

const TENCENT_MAP_KEY = process.env.TENCENT_MAP_KEY!

export interface GeoResult {
  lat: number
  lng: number
  timezone: string
  cityName: string
}

export async function resolveCityInfo(cityName: string, lang: 'zh' | 'en'): Promise<GeoResult | null> {
  try {
    // 调用腾讯位置服务的 geocoder 接口
    const url = `https://apis.map.qq.com/ws/geocoder/v1/?address=${encodeURIComponent(cityName)}&key=${TENCENT_MAP_KEY}`
    const res = await fetch(url)
    const data = await res.json()

    if (data.status !== 0 || !data.result?.location) {
      console.error('解析城市失败：', data.message)
      return null
    }

    const { lat, lng } = data.result.location
    const timezone = tzLookup(lat, lng)

    return {
      lat,
      lng,
      timezone,
      cityName: data.result.title || cityName
    }
  } catch (error) {
    console.error('地理解析异常:', error)
    return null
  }
}
