'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import BirthChartResultClient from '@/components/birthchart/BirthChartResultClient'

export default function BirthChartResultPage() {
  const searchParams = useSearchParams()!
  const [result, setResult] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let called = false
    const fetchChart = async () => {
      if (called) return
      called = true

      const params = {
        year: searchParams.get('year'),
        month: searchParams.get('month'),
        day: searchParams.get('day'),
        hour: searchParams.get('hour'),
        minute: searchParams.get('minute'),
        timezoneOffset: searchParams.get('timezoneOffset'),
      }

      const res = await fetch('/api/birthchart', {
        method: 'POST',
        body: JSON.stringify(params),
      })

      try {
        const data = await res.json()
        setResult(data.results) // ✅ 正确使用 data.results
      } catch (error) {
        console.error('解析失败:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchChart()
  }, []) // ✅ 空依赖，避免重复触发

  return (
    <BirthChartResultClient
      result={result}
      loading={loading}
      name={searchParams.get('name') || ''}
      birthDate={searchParams.get('birthDate') || ''}
      birthTime={searchParams.get('birthTime') || ''}
      birthPlace={searchParams.get('birthPlace') || ''}
    />
  )
}
