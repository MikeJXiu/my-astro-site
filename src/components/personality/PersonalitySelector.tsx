'use client'

import { ZodiacDetail } from '@/types/zodiacDetail'
import { zodiacSigns } from '@/data/zodiacSigns'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

interface Props {
  selectedSign: ZodiacDetail | null
  onSelect: (sign: ZodiacDetail) => void
}

export default function PersonalitySelector({ selectedSign, onSelect }: Props) {
  const { language } = useLanguage()

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-center mb-6 px-2">
      {zodiacSigns.map((sign) => (
        <button
          key={sign.symbol}
          onClick={() => onSelect(sign)}
          className={`rounded-xl p-2 text-center shadow-md transition border
            ${selectedSign?.symbol === sign.symbol
              ? 'bg-pink-500 text-white border-pink-400'
              : 'bg-white/10 text-white hover:bg-white/20 border-white/10'}
          `}
        >
          <Image
            src={`/images/zodiac/${sign.symbol}.png`}
            alt={sign.name_en}
            width={40}
            height={40}
            className="mx-auto mb-1"
          />
          <span className="text-xs block whitespace-nowrap">
            {language === 'zh' ? sign.name_zh : sign.name_en}
          </span>
        </button>
      ))}
    </div>
  )
}
