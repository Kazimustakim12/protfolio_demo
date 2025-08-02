import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nicole Harper | Creative Designer & Developer',
  description: 'Portfolio of Nicole Harper, a passionate Creative Designer and Developer specializing in UI/UX, web design, and SEO.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 flex flex-col overflow-y-auto ml-64">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
