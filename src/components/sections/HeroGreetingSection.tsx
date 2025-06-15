"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function HeroGreetingSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-3 flex items-center"
            >
              Hey <motion.span initial={{ rotate: -10 }} animate={{ rotate: [0, -10, 10, -10, 0]}} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3, repeat: Infinity, repeatDelay: 2}} className="inline-block mx-2 text-3xl md:text-4xl">👋</motion.span>, I&apos;m Nicole!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              I&apos;m Nicole Harper, a passionate Creative Designer with multiple hats as you will see below. I focus on creating intuitive, user-friendly, and visually engaging digital experiences that solve real problems and deliver measurable results.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 md:mt-0 flex items-center space-x-4"
          >
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for Projects</span>
            </div>
            <Link href="#contact" passHref>
              <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
