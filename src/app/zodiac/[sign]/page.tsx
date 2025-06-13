import ZodiacDetailClient from './ZodiacDetailClient';
import { zodiacSigns } from '@/data/zodiac';

export async function generateStaticParams() {
  return zodiacSigns.map((sign) => ({
    sign: sign.nameEn.toLowerCase(),
  }));
}

export default function ZodiacDetailPage({ params }: { params: { sign: string } }) {
  return <ZodiacDetailClient sign={params.sign} />;
}
