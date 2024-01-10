import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/shared/providers/theme-provider';
import { Header } from '@/widgets/header/header';
import ReactQueryProvider from '@/shared/providers/reactQueryProvider';
import React from 'react';
import { ConfigProvider } from '@/shared/providers/configStorageProvider';
import { Toaster } from '@/shared/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-hash dark:bg-darkSpace`}>
        <ReactQueryProvider>
          <ConfigProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Header />
              {children}
              <Toaster />
            </ThemeProvider>
          </ConfigProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
