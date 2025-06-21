import zodiacData from '../../../data/zodiac';

export async function GET() {
  return new Response(JSON.stringify(zodiacData), {
    headers: { 'Content-Type': 'application/json' }
  });
}
