"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { KaziLogo } from '../KaziLogo';
import { navLinks } from '@/lib/data';

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <AnimatePresence>
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: hasScrolled ? 0 : -100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute top-0 left-0 right-0"
        >
          <div className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between rounded-xl border border-border/50 bg-background/80 px-4 shadow-sm backdrop-blur-md">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground transition-colors">
                <KaziLogo className="w-6 h-6" />
                <span>KAZI</span>
              </Link>

              <div className="hidden md:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Button key={link.name} variant="ghost" asChild>
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                ))}
              </div>

              <Button asChild>
                <Link href="#contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
    </header>
  );
}
