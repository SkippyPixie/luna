import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

interface Params {
  params: { id: string };
}

export async function GET(_: Request, { params }: Params) {
  const { env } = getRequestContext();
  const entry = await env.DB.prepare(
    'SELECT id, date, mood, tags, body, created_at FROM entries WHERE id = ?',
  )
    .bind(params.id)
    .first();
  return Response.json(entry);
}
