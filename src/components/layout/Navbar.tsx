"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#work' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="flex items-center gap-4 bg-card/50 backdrop-blur-lg border border-white/10 rounded-full p-2">
        <Link href="/">
            <Image 
                src="https://placehold.co/40x40.png" 
                alt="Mustakim Kazi"
                width={40}
                height={40}
                className="rounded-full border-2 border-transparent hover:border-accent transition-colors"
                data-ai-hint="profile picture"
            />
        </Link>

        <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                </Link>
            </Button>
            ))}
        </div>

        <Button asChild>
            <Link href="#contact">Contact</Link>
        </Button>
      </nav>
    </motion.header>
  );
}
