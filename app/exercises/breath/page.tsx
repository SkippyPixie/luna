'use client';
import { useEffect, useState } from 'react';

export default function BreathPage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount((c) => (c + 1) % 8), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section>
      <h1>Breathing Exercise</h1>
      <p>Count: {count}</p>
    </section>
  );
}
