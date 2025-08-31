"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunken, setIsShrunken] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsShrunken(true);
    } else {
      setIsShrunken(false);
    }
  });

  const navContainerVariants = {
    expanded: { width: "500px" },
    shrunken: { width: "230px" },
  };

  if (isMobile) {
    return (
      <>
        <header className="fixed top-4 w-full flex justify-center z-50">
          <div className="relative h-16 bg-card/50 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-between px-4 w-[90%]">
            <Link href="/" className="w-10 h-10">
              <Image
                src="/images/avatar-img.png"
                alt="Mustakim Kazi"
                width={40}
                height={40}
                className="rounded-full border-2 border-transparent hover:border-accent transition-colors"
                data-ai-hint="profile picture"
              />
            </Link>
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-foreground whitespace-nowrap">
                Available for work
              </p>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </header>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </>
    );
  }

  return (
    <header className="fixed top-4 w-full flex justify-center z-50">
      <motion.div
        layout
        variants={navContainerVariants}
        initial="expanded"
        animate={isShrunken ? "shrunken" : "expanded"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative h-16 bg-card/50 backdrop-blur-lg border border-foreground/10 dark:border-white/10 rounded-full flex items-center justify-between pl-3 pr-4 overflow-hidden "
      >
        <motion.div layout className="w-12 h-12 flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/avatar-img.png"
              alt="Mustakim Kazi"
              width={60}
              height={60}
              className="rounded-full border-2 border-transparent hover:border-accent transition-colors"
              data-ai-hint="profile picture"
            />
          </Link>
        </motion.div>

        {/* Expanded Content */}
        <motion.div
          initial={{ opacity: 1, display: "flex" }}
          animate={{
            opacity: isShrunken ? 0 : 1,
            display: isShrunken ? "none" : "flex",
          }}
          transition={{ duration: 0.2, delay: isShrunken ? 0 : 0.1 }}
          className="flex items-center gap-2"
        >
          <Button
            variant="ghost"
            asChild
            className="hover:text-primary hover:bg-transparent"
          >
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors"
            >
              Home
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="hover:text-primary hover:bg-transparent"
          >
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors"
            >
              About
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="hover:text-primary hover:bg-transparent"
          >
            <Link
              href="#work"
              className="text-sm font-medium text-muted-foreground transition-colors"
            >
              Projects
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="hover:text-primary hover:bg-transparent"
          >
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors"
            >
              Pricing
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, display: "flex" }}
          animate={{
            opacity: isShrunken ? 0 : 1,
            display: isShrunken ? "none" : "flex",
          }}
          transition={{ duration: 0.2, delay: isShrunken ? 0 : 0.1 }}
          className="flex items-center gap-2"
        >
          <Button asChild className="rounded-full">
            <Link href="#contact">Contact</Link>
          </Button>
        </motion.div>

        {/* Shrunken Content */}
        <motion.div
          initial={{ opacity: 0, display: "none" }}
          animate={{
            opacity: isShrunken ? 1 : 0,
            display: isShrunken ? "flex" : "none",
          }}
          transition={{ duration: 0.3, delay: isShrunken ? 0.1 : 0 }}
          className="items-center gap-3"
        >
          <p className="text-sm font-medium text-foreground whitespace-nowrap">
            Available for work
          </p>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </motion.div>
      </motion.div>
    </header>
  );
}
