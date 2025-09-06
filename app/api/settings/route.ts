import { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET() {
  const { env } = getRequestContext();
  const { results } = await env.DB.prepare('SELECT key, value FROM settings').all();
  const data: Record<string, string> = {};
  for (const row of results as any[]) {
    data[row.key] = row.value;
  }
  return Response.json(data);
}

export async function POST(request: NextRequest) {
  const { env } = getRequestContext();
  const body = await request.json();
  for (const [key, value] of Object.entries(body)) {
    await env.DB.prepare(
      'INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value',
    )
      .bind(key, value as string)
      .run();
  }
  return new Response(null, { status: 204 });
}

