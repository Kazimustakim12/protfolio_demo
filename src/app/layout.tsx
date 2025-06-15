import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nicole Harper | Creative Designer',
  description: 'Nicole Harper, a passionate Creative Designer specializing in UI/UX, web design, and SEO.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 flex flex-col overflow-y-auto">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
