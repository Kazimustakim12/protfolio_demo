"use client";

import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="sticky top-0 z-50 transition-all duration-300"
    >
      <div className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold group">
            <Code2 className="w-6 h-6 text-accent group-hover:animate-pulse" />
            <span className="font-playfair">KAZI</span>
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
    </motion.header>
  );
}
