'use client';
import { useEffect, useState } from 'react';

export default function SettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [reminder, setReminder] = useState('08:00');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data.theme) setTheme(data.theme);
        if (data.reminder_time) setReminder(data.reminder_time);
      });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const save = async () => {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme, reminder_time: reminder }),
    });
    setStatus('Saved');
  };

  return (
    <section>
      <h1>Settings</h1>
      {status && <p role="status">{status}</p>}
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Reminder Time:
        <input type="time" value={reminder} onChange={(e) => setReminder(e.target.value)} />
      </label>
      <button onClick={save}>Save</button>
    </section>
  );
}

