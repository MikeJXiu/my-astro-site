// src/app/layout.tsx
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '蓝恩星语 | LanEn Zodiac',
  description: '基于专业星座算法与浪漫美学的星座网站',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="min-h-screen flex flex-col bg-black text-white font-sans">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
