import { NextResponse } from 'next/server';
import { zodiacSigns } from '@/data/zodiac';

export async function GET(
  request: Request,
  context: { params: { sign: string } }
) {
  const { sign } = context.params;

  // 在数据里查找匹配的星座（忽略大小写）
  const zodiac = zodiacSigns.find(
    (z) => z.nameEn.toLowerCase() === sign.toLowerCase()
  );

  if (!zodiac) {
    return NextResponse.json(
      { error: 'Zodiac sign not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(zodiac);
}
