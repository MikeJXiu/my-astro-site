'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Compatibility {
  yourSign: { zh: string; en: string };
  partnerSign: { zh: string; en: string };
  matchLevel: { zh: string; en: string };
  description: { zh: string; en: string };
  elementCompatibility: { zh: string; en: string };
}

const zodiacSigns = [
  { zh: "白羊座", en: "Aries" },
  { zh: "金牛座", en: "Taurus" },
  { zh: "双子座", en: "Gemini" },
  { zh: "巨蟹座", en: "Cancer" },
  { zh: "狮子座", en: "Leo" },
  { zh: "处女座", en: "Virgo" },
  { zh: "天秤座", en: "Libra" },
  { zh: "天蝎座", en: "Scorpio" },
  { zh: "射手座", en: "Sagittarius" },
  { zh: "摩羯座", en: "Capricorn" },
  { zh: "水瓶座", en: "Aquarius" },
  { zh: "双鱼座", en: "Pisces" }
];

export default function CompatibilityPage() {
  const { language } = useLanguage();
  const [data, setData] = useState<Compatibility[]>([]);
  const [yourSign, setYourSign] = useState('');
  const [partnerSign, setPartnerSign] = useState('');
  const [result, setResult] = useState<Compatibility | null>(null);

  useEffect(() => {
    fetch('/api/compatibility')
      .then(res => res.json())
      .then(setData);
  }, []);

  useEffect(() => {
    if (yourSign && partnerSign) {
      const match = data.find(item =>
        item.yourSign.en === yourSign && item.partnerSign.en === partnerSign
      );
      setResult(match || null);
    }
  }, [yourSign, partnerSign, data]);

  const getDisplayName = (enName: string) => {
    const found = zodiacSigns.find(sign => sign.en === enName);
    return found ? found[language] : enName;
  };

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mt-12 mb-8 drop-shadow-lg">
        {language === 'zh' ? '星座配对查询' : 'Zodiac Compatibility'}
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <select className="p-3 rounded border border-purple-400 bg-white/10 text-white" value={yourSign} onChange={e => setYourSign(e.target.value)}>
          <option value="">{language === 'zh' ? '请选择你的星座' : 'Select Your Sign'}</option>
          {zodiacSigns.map(sign => (
            <option key={sign.en} value={sign.en}>{sign[language]}</option>
          ))}
        </select>

        <select className="p-3 rounded border border-purple-400 bg-white/10 text-white" value={partnerSign} onChange={e => setPartnerSign(e.target.value)}>
          <option value="">{language === 'zh' ? '请选择配对星座' : 'Select Partner Sign'}</option>
          {zodiacSigns.map(sign => (
            <option key={sign.en} value={sign.en}>{sign[language]}</option>
          ))}
        </select>
      </div>

      {result && (
        <div className="bg-white/10 p-8 rounded-2xl shadow-lg text-left backdrop-blur-lg w-full max-w-3xl mt-4 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {getDisplayName(result.yourSign.en)} & {getDisplayName(result.partnerSign.en)}
          </h2>
          <p className="mb-3"><b>{language === 'zh' ? '配对等级:' : 'Match Level:'}</b> {result.matchLevel[language]}</p>
          <p className="mb-3"><b>{language === 'zh' ? '配对描述:' : 'Description:'}</b> {result.description[language]}</p>
          <p><b>{language === 'zh' ? '元素相容性:' : 'Element Compatibility:'}</b> {result.elementCompatibility[language]}</p>
        </div>
      )}

      {(yourSign && partnerSign && !result) && (
        <p className="text-red-400 mt-4">{language === 'zh' ? '未找到配对结果' : 'No match found'}</p>
      )}
    </div>
  );
}
