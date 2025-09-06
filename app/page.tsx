import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <h1>Stoic Journal</h1>
      <nav aria-label="Primary">
        <Link href="/check-in">Check In</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/exercises/breath">Breathing</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </section>
  );
}
