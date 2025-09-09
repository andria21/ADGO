import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'დროა, თქვენი ბრენდი ამოძრაოთ! | ADGO Taxi Advertising',
  description: 'Revolutionary taxi advertising solutions. Transform your brand visibility with digital displays on moving taxis across the city.',
  keywords: 'taxi advertising, digital displays, mobile advertising, outdoor advertising, brand visibility, ADGO',
  authors: [{ name: 'ADGO' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ka_GE',
    alternateLocale: 'en_US',
    title: 'დროა, თქვენი ბრენდი ამოძრაოთ!',
    description: 'Revolutionary taxi advertising solutions with digital displays.',
    siteName: 'ADGO Taxi Advertising',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'დროა, თქვენი ბრენდი ამოძრაოთ!',
    description: 'Revolutionary taxi advertising solutions with digital displays.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body className={inter.className}>{children}</body>
    </html>
  );
}