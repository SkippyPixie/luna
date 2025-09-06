'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const moods = ['great', 'good', 'neutral', 'bad', 'awful'];
const tagOptions = ['work', 'family', 'health', 'gratitude'];

export default function CheckInPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [body, setBody] = useState('');
  const [toast, setToast] = useState('');

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const save = async () => {
    const res = await fetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: new Date().toISOString().slice(0, 10),
        mood,
        tags: tags.join(','),
        body,
      }),
    });
    const data = await res.json();
    setToast('Saved!');
    setTimeout(() => router.push(`/entry/${data.id}`), 1000);
  };

  return (
    <section>
      <h1>Check In</h1>
      {toast && <div role="alert">{toast}</div>}
      {step === 1 && (
        <div>
          <p>How are you feeling?</p>
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => {
                setMood(m);
                setStep(2);
              }}
            >
              {m}
            </button>
          ))}
        </div>
      )}
      {step === 2 && (
        <div>
          <p>Any tags?</p>
          {tagOptions.map((t) => (
            <button
              key={t}
              aria-pressed={tags.includes(t)}
              onClick={() => toggleTag(t)}
            >
              {t}
            </button>
          ))}
          <div>
            <button onClick={() => setStep(3)}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <p>Write about it</p>
          <textarea
            value={body}
            maxLength={500}
            onChange={(e) => setBody(e.target.value)}
          />
          <div>{body.length}/500</div>
          <button onClick={save} disabled={!body}>Save</button>
        </div>
      )}
    </section>
  );
}

