// src/app/api/birthchart/route.ts
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req: Request) {
  const body = await req.json();
  const { year, month, day, hour, minute, timezoneOffset } = body;

  const scriptPath = path.join(process.cwd(), 'scripts', 'runSwissChild.js');

  return new Promise<Response>((resolve) => {
    const child = spawn('node', [
      scriptPath,
      year,
      month,
      day,
      hour,
      minute,
      timezoneOffset,
    ]);

    let result = '';
    let error = '';

    child.stdout.on('data', (data) => {
      result += data.toString();
    });

    child.stderr.on('data', (data) => {
      error += data.toString();
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve(
          new Response(result, {
            headers: { 'Content-Type': 'application/json' },
          })
        );
      } else {
        console.error('Child process error:', error);
        resolve(
          new Response(
            JSON.stringify({ error: '计算失败', details: error }),
            { status: 500 }
          )
        );
      }
    });
  });
}
