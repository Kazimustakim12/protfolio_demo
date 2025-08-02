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
  title: 'KAZI | Mustakim Kazi - Creative Developer',
  description: 'Portfolio of Mustakim Kazi, a creative developer specializing in web and software solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
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
