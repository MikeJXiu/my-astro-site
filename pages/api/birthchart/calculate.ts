// pages/api/birthchart/calculate.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { calculateChart } from '@/lib/astro/calculateChart'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }

  try {
    const { year, month, day, hour, minute, timezoneOffset } = req.body

    const chart = await calculateChart(
      Number(year),
      Number(month),
      Number(day),
      Number(hour),
      Number(minute),
      Number(timezoneOffset)
    )

    return res.status(200).json({ success: true, chart })
  } catch (error: any) {
    console.error('❌ 星盘计算失败:', error)
    return res.status(500).json({ success: false, message: error.message || '计算失败' })
  }
}
