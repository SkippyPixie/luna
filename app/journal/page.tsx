'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function JournalPage() {
  const { data } = useSWR('/api/entries', fetcher);
  return (
    <section>
      <h1>Journal</h1>
      <ul>
        {data?.map((e: any) => (
          <li key={e.id}>
            <a href={`/entry/${e.id}`}>{e.content}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
