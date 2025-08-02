"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Works', href: '#works' },
  { name: 'Services', href: '#services' },
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-muted-foreground transition-colors">
            Mustakim Kazi
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </motion.a>
            ))}
            <Button asChild>
                <Link href="#contact">CONTACT</Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            {/* Minimalist design might not need a mobile menu, but can be added here */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
