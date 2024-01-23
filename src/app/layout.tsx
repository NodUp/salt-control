import type { Metadata } from 'next';
//import { Inter as FontSans } from 'next/font/google';

import { Maven_Pro as FontSans } from 'next/font/google';

const maven = FontSans({
  weight: '400',
  subsets: ['latin'],
});

import '../styles/globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt'>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          maven.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
