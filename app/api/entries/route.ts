import { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET() {
  const { env } = getRequestContext();
  const { results } = await env.DB.prepare(
    'SELECT id, date, mood, tags, body, created_at FROM entries ORDER BY date DESC',
  ).all();
  return Response.json(results);
}

export async function POST(request: NextRequest) {
  const { date, mood, tags, body } = await request.json();
  const { env } = getRequestContext();
  const id = crypto.randomUUID();
  await env.DB.prepare(
    'INSERT INTO entries (id, date, mood, tags, body) VALUES (?, ?, ?, ?, ?)',
  )
    .bind(id, date, mood, tags, body)
    .run();
  return Response.json({ id }, { status: 201 });
}
