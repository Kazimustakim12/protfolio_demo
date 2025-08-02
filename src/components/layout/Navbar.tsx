"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <motion.div
        className={`transition-all duration-300 ${
          isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold">
            KAZI
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>
                  <span className="text-primary mr-2">0{index + 1}.</span>
                  {link.name}
                </Link>
              </Button>
            ))}
          </nav>
          <Button asChild>
            <a href="mailto:contact@example.com">Contact</a>
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
