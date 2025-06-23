// src/app/api/zodiac/[sign]/route.ts
import { NextResponse } from 'next/server';
import zodiacSigns from '@/data/zodiac';

export async function GET(_: Request, { params }: { params: { sign: string } }) {
  const signData = zodiacSigns.find(
    (s) => s.nameEn.toLowerCase() === params.sign.toLowerCase()
  );
  if (!signData) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(signData);
}
