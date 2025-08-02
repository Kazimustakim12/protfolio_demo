import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Mustakim Kazi - Creative Developer',
  description: 'Personal portfolio of Mustakim Kazi, a creative developer focused on building beautiful and functional web experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="flex-1 flex flex-col px-6 sm:px-8 md:px-12">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
