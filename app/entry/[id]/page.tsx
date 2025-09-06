'use client';
import { useEffect, useState } from 'react';

interface EntryPageProps {
  params: { id: string };
}

export default function EntryPage({ params }: EntryPageProps) {
  const [entry, setEntry] = useState<any>(null);
  useEffect(() => {
    fetch(`/api/entries/${params.id}`).then(async (res) => setEntry(await res.json()));
  }, [params.id]);

  if (!entry) return <p>Loading...</p>;
  return (
    <article>
      <h1>{entry.date}</h1>
      <p>Mood: {entry.mood}</p>
      {entry.tags && <p>Tags: {entry.tags}</p>}
      <p>{entry.body}</p>
    </article>
  );
}
