import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Stoic Journal',
  description: 'Mindful journaling app'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
