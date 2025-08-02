"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isShrunken, setIsShrunken] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsShrunken(true);
    } else {
      setIsShrunken(false);
    }
  });

  const navContainerVariants = {
    expanded: { width: '500px' },
    shrunken: { width: '250px' },
  };
  
  return (
    <header
      className="fixed top-4 w-full flex justify-center z-50"
    >
      <motion.div
        layout
        variants={navContainerVariants}
        initial="expanded"
        animate={isShrunken ? 'shrunken' : 'expanded'}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative h-16 bg-card/50 backdrop-blur-lg border border-white/10 rounded-full flex items-center px-4 overflow-hidden"
      >
        <div className="w-full flex items-center justify-between">
            <motion.div layout>
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
            </motion.div>

          <motion.div
            initial={{ opacity: 1, display: 'flex' }}
            animate={{ opacity: isShrunken ? 0 : 1, display: isShrunken ? 'none' : 'flex' }}
            transition={{ duration: 0.2, delay: isShrunken ? 0 : 0.1 }}
            className="hidden md:flex items-center gap-2"
          >
            <Button variant="ghost" asChild>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, display: 'block' }}
            animate={{ opacity: isShrunken ? 0 : 1, display: isShrunken ? 'none' : 'block' }}
            transition={{ duration: 0.2, delay: isShrunken ? 0 : 0.1 }}
          >
            <Button asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </motion.div>

           <motion.div
             initial={{ opacity: 0, display: 'none' }}
             animate={{ opacity: isShrunken ? 1 : 0, display: isShrunken ? 'flex' : 'none' }}
             transition={{ duration: 0.3, delay: isShrunken ? 0.1 : 0 }}
             className="items-center gap-3 ml-4"
          >
              <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-sm font-medium text-foreground whitespace-nowrap">Available for work</p>
          </motion.div>

        </div>
      </motion.div>
    </header>
  );
}
