"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
          >
            Crafting fast, modern websites for bold ideas
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-muted-foreground"
          >
            Started in Malta. Focused on performance, design, and results.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg">
              <Link href="#projects">View Work</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Let’s Talk</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </motion.section>
  );
}
