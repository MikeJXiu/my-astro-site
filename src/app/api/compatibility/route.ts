import { NextResponse } from 'next/server';
import { compatibilityData } from '@/data/compatibility';

export async function GET() {
  return NextResponse.json(compatibilityData);
}
