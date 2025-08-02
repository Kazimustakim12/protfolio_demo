"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  const availableVariants = {
    visible: { y: "100%", opacity: 0 },
    hidden: { y: 0, opacity: 1 },
  }

  return (
    <motion.header
      className="fixed top-4 w-full flex justify-center z-50"
    >
      <div className="relative w-[500px] h-16 bg-card/50 backdrop-blur-lg border border-white/10 rounded-full overflow-hidden">
        {/* Main Navbar Content */}
        <motion.div
          variants={navVariants}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-between gap-4 py-2 px-4"
        >
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
          </div>

          <Button asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </motion.div>

        {/* Sticky "Available for work" bar */}
        <motion.div
           variants={availableVariants}
           animate={hidden ? "hidden" : "visible"}
           transition={{ duration: 0.35, ease: "easeInOut" }}
           className="absolute inset-0"
        >
            <div className="h-full flex items-center justify-center">
                <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-sm font-medium text-foreground">Available for work</p>
                </div>
            </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
