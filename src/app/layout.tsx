import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"

import './globals.css';

export const metadata: Metadata = {
  title: 'Hüner Tesisat | Eskişehir Güvenilir Tesisatçı',
  description: 'Eskişehirde acil tesisat tamiri, su kaçağı tespiti, tıkanıklık açma ve kombi bakımı gibi profesyonel sıhhi tesisat hizmetleri. Hızlı ve güvenilir çözümler.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased flex flex-col'
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
