import { NextResponse } from 'next/server';
import { zodiacSigns } from '@/data/zodiac';

export async function GET() {
  return NextResponse.json(zodiacSigns);
}
