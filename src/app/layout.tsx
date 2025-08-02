import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Toaster } from "@/components/ui/toaster";
import { Footer } from '@/components/layout/Footer';

const antonio = localFont({
  src: '../../public/fonts/Antonio-VariableFont_wght.ttf',
  variable: '--font-antonio',
  display: 'swap',
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
    <html lang="en" className="dark">
      <body className={`${antonio.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />