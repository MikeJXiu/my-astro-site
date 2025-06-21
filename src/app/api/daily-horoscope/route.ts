import { NextResponse } from 'next/server';
import { dailyHoroscopeTemplates } from '@/data/dailyHoroscopeTemplates';

export async function GET() {
  const today = new Date();
  const day = today.getDate();

  // 动态构造每日运势
  const dailyData = dailyHoroscopeTemplates.map(signData => {
    const templates = signData.templates;
    const index = day % templates.length;
    const todayTemplate = templates[index];
    return {
      sign: signData.sign,
      ...todayTemplate
    };
  });

  return NextResponse.json(dailyData);
}
