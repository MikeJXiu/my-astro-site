'use client'

import React from 'react'
import Image from 'next/image'
import { zodiacSigns } from '@/data/zodiacSigns'
import { ZodiacDetail } from '@/types/zodiacDetail'
import { useLanguage } from '@/contexts/LanguageContext'

interface ZodiacSelectorProps {
  selectedSign: ZodiacDetail | null
  onSelect: (sign: ZodiacDetail) => void
  disabledSign?: ZodiacDetail | null
}

const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({
  selectedSign,
  onSelect,
  disabledSign,
}) => {
  const { language } = useLanguage()

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 justify-items-center my-4">
      {zodiacSigns.map((sign) => {
        const isSelected = selectedSign?.symbol === sign.symbol
        const isDisabled = disabledSign?.symbol === sign.symbol

        return (
          <button
            key={sign.symbol}
            onClick={() => onSelect(sign)}
            disabled={isDisabled}
            className={`flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 p-2 rounded-xl border backdrop-blur-md transition duration-300
              ${
                isSelected
                  ? 'border-pink-400 bg-pink-400/10 shadow-inner'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }
              ${isDisabled ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl'}
            `}
          >
            <Image
              src={`/images/zodiac/${sign.symbol}.png`}
              alt={language === 'zh' ? sign.name_zh : sign.name_en}
              width={32}
              height={32}
              className="mb-1"
            />
            <div className="text-[13px] sm:text-sm font-semibold text-purple-100 text-center drop-shadow-sm">
              {language === 'zh' ? sign.name_zh : sign.name_en}
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default ZodiacSelector
