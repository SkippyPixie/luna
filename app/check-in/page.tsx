'use client';
import { useState } from 'react';

export default function CheckInPage() {
  const [text, setText] = useState('');

  const submit = async () => {
    await fetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: text })
    });
    setText('');
  };

  return (
    <section>
      <h1>Check In</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you feeling?"
      />
      <button onClick={submit}>Save</button>
    </section>
  );
}
