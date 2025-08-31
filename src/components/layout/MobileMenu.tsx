"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/#work", label: "Projects" },
    { href: "/#pricing", label: "Pricing" },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-4xl font-serif text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full"
              onClick={onClose}
            >
              <Link href="#contact">Contact</Link>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
