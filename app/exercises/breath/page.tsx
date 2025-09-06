'use client';
import { useEffect, useState } from 'react';

const phases = ['Inhale', 'Hold', 'Exhale', 'Hold'];

export default function BreathPage() {
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c > 1) return c - 1;
        setPhase((p) => (p + 1) % 4);
        return 4;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <h1>Box Breathing</h1>
      <button style={{ fontSize: '2rem', padding: '4rem' }}>
        {phases[phase]} {count}
      </button>
    </section>
  );
}

