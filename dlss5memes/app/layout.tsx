import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DLSS 5 MEMES — GTA Vibes on Solana',
  description: 'The most gangsta meme coin on Solana. Low poly. High gains. GTA San Andreas energy.',
  openGraph: {
    title: 'DLSS 5 MEMES',
    description: 'Low poly. High gains. GTA San Andreas energy on Solana.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
