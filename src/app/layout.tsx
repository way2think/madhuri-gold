import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import NavHeader from '@/components/layouts/NavHeader';
import Footer from '@/components/layouts/Footer';
import FirebaseAnalytics from '@/components/layouts/FirebaseAnalytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Madhuri Gold',
  description: 'Madhuri Gold',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <FirebaseAnalytics />
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
