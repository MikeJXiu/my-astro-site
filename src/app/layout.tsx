import './globals.css';
import type { Metadata } from 'next';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

export const metadata: Metadata = {
  title: '星座网站',
  description: '一个由Mike独立开发的星座网站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="flex flex-col min-h-screen">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>

        <footer className="bg-gray-200 text-center p-4">
          &copy; 2025 Mike Xiu 版权所有
        </footer>
      </body>
    </html>
  );
}
