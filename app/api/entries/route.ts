import { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET() {
  const { env } = getRequestContext();
  const { results } = await env.DB.prepare('SELECT id, content FROM entries ORDER BY created_at DESC').all();
  return Response.json(results);
}

export async function POST(request: NextRequest) {
  const { content } = await request.json();
  const { env } = getRequestContext();
  await env.DB.prepare('INSERT INTO entries (content) VALUES (?)').bind(content).run();
  return new Response(null, { status: 201 });
}
