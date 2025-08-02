import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mustakim Kazi | Creative Developer & Web Architect',
  description: 'Portfolio of Mustakim Kazi, a creative developer specializing in building beautiful, high-performance web experiences that drive results.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
