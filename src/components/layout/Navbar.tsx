"use client";

import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Navbar() {

  const navLinks = [
    { name: 'Work', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <div
        className={'transition-all duration-300 py-6'}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Code2 className="w-6 h-6 text-secondary" />
            <span>KAZI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
