import { notFound } from 'next/navigation'
import { CompatibilityResult } from '@/types/compatibility'
import { compatibilityResults } from '@/data/compatibility'
import CompatibilityResultCard from '@/components/compatibility/CompatibilityResultCard'
import { Suspense } from 'react'

interface Props {
  params: {
    pair: string // e.g. "aries-taurus"
  }
}

export default function CompatibilityPage({ params }: Props) {
  const [sign1, sign2] = params.pair.split('-')

  if (!sign1 || !sign2) {
    return notFound()
  }

  const result: CompatibilityResult | undefined = compatibilityResults.find(
    (entry) =>
      (entry.signs[0] === sign1 && entry.signs[1] === sign2) ||
      (entry.signs[0] === sign2 && entry.signs[1] === sign1)
  )

  if (!result) {
    return notFound()
  }

  return (
    <main className="min-h-screen px-4 py-8">
      <Suspense fallback={<p className="text-center text-white">Loading compatibility data...</p>}>
        <CompatibilityResultCard data={result} />
      </Suspense>
    </main>
  )
}
