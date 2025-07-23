// src/lib/geolocation/tencent.ts
import axios from 'axios'

const TENCENT_KEY = process.env.TENCENT_MAP_KEY

if (!TENCENT_KEY) {
  throw new Error('TENCENT_MAP_KEY is not defined in environment variables.')
}

/**
 * 腾讯位置服务：根据地点文字，获取经纬度与行政信息
 * @param place 出生地（中文城市名或地址）
 * @returns 包含经纬度、城市、省份等信息
 */
export async function geocodePlace(place: string) {
  const url = `https://apis.map.qq.com/ws/geocoder/v1/`

  try {
    const response = await axios.get(url, {
      params: {
        address: place,
        key: TENCENT_KEY,
      },
    })

    const data = response.data

    if (data.status !== 0) {
      throw new Error(data.message || 'Geocoding failed.')
    }

    const {
      location: { lat, lng },
      address_components: { province, city, district },
    } = data.result

    return {
      lat,
      lng,
      province,
      city,
      district,
    }
  } catch (error) {
    console.error('腾讯地图解析失败:', error)
    throw new Error('Failed to parse location from Tencent API.')
  }
}
