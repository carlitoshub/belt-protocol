import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BELT | Safety Beyond Protocols',
  description: 'The ultimate protocol for increasing security inside a factory environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
