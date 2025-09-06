'use client';
import { useEffect, useState } from 'react';

interface Entry {
  id: string;
  date: string;
  mood: string;
}

export default function StatsPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() => {
    fetch('/api/entries')
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  const entryCount = entries.length;

  const computeStreak = () => {
    const dates = new Set(entries.map((e) => e.date));
    let streak = 0;
    const d = new Date();
    while (dates.has(d.toISOString().slice(0, 10))) {
      streak += 1;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  };

  const streak = computeStreak();

  const moodDistribution = () => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);
    const counts: Record<string, number> = {};
    entries.forEach((e) => {
      if (new Date(e.date) >= cutoff) {
        counts[e.mood] = (counts[e.mood] || 0) + 1;
      }
    });
    return counts;
  };

  const moods = moodDistribution();

  return (
    <section>
      <h1>Stats</h1>
      <div>
        <h2>Streak</h2>
        <p>{streak} day(s)</p>
      </div>
      <div>
        <h2>Mood distribution (30d)</h2>
        <ul>
          {Object.entries(moods).map(([m, c]) => (
            <li key={m}>
              {m}: {c}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Total entries</h2>
        <p>{entryCount}</p>
      </div>
    </section>
  );
}

