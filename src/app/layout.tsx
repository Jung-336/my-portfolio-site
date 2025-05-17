import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LLM & Multi-Agent Specialist Portfolio',
  description: 'Portfolio showcasing expertise in LLM and Multi-Agent systems development',
  keywords: 'LLM, Multi-Agent, AI, Data Science, Machine Learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 