'use client';
import { useEffect, useRef, useState } from 'react';
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
  const firstMoodRef = useRef<HTMLButtonElement>(null);
  const firstTagRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (step === 1) firstMoodRef.current?.focus();
    if (step === 2) (firstTagRef.current || nextRef.current)?.focus();
    if (step === 3) bodyRef.current?.focus();
  }, [step]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push('/');
      } else if (e.key === 'Enter') {
        const target = e.target as HTMLElement;
        if (step === 1 && mood && target.tagName !== 'BUTTON') {
          e.preventDefault();
          setStep(2);
        } else if (step === 2 && target.tagName !== 'BUTTON') {
          e.preventDefault();
          setStep(3);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [step, mood, router]);

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
    <section role="dialog" aria-modal="true" aria-labelledby="checkin-title">
      <h1 id="checkin-title">Check In</h1>
      {toast && <div role="alert">{toast}</div>}
      {step === 1 && (
        <div role="radiogroup" aria-labelledby="mood-label">
          <p id="mood-label">How are you feeling?</p>
          {moods.map((m, i) => (
            <button
              key={m}
              role="radio"
              aria-checked={mood === m}
              ref={i === 0 ? firstMoodRef : null}
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
        <div role="group" aria-labelledby="tags-label">
          <p id="tags-label">Any tags?</p>
          {tagOptions.map((t, i) => (
            <button
              key={t}
              aria-pressed={tags.includes(t)}
              ref={i === 0 ? firstTagRef : null}
              onClick={() => toggleTag(t)}
            >
              {t}
            </button>
          ))}
          <div>
            <button ref={nextRef} onClick={() => setStep(3)}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <label htmlFor="body">Write about it</label>
          <textarea
            id="body"
            ref={bodyRef}
            value={body}
            maxLength={500}
            aria-describedby="body-count"
            onChange={(e) => setBody(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (body) save();
              }
            }}
          />
          <div id="body-count" aria-live="polite">{body.length}/500</div>
          <button onClick={save} disabled={!body}>Save</button>
        </div>
      )}
    </section>
  );
}

