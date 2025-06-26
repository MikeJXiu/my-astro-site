// /app/api/horoscope/daily/route.ts

import { NextResponse } from 'next/server';
import { dailyHoroscopeTemplates } from '@/data//horoscope/dailyHoroscopePool';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sign = searchParams.get('sign');

  if (!sign) {
    return NextResponse.json({ error: 'Missing sign parameter' }, { status: 400 });
  }

  const zodiacData = dailyHoroscopeTemplates.find(
    (item) =>
      item.sign.zh === sign || item.sign.en.toLowerCase() === sign.toLowerCase()
  );

  if (!zodiacData) {
    return NextResponse.json({ error: 'Sign not found' }, { status: 404 });
  }

  const randomIndex = Math.floor(Math.random() * zodiacData.templates.length);
  const horoscope = zodiacData.templates[randomIndex];

  return NextResponse.json({ sign: zodiacData.sign, horoscope });
}
