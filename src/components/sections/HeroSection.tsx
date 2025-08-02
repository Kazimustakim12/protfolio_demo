"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative bg-background text-foreground py-20 md:py-32 min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {/* Subtle background pattern or image if desired */}
        {/* Example: <Image src="/path-to-subtle-pattern.svg" layout="fill" objectFit="cover" alt="Background pattern" /> */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              A passionate Frontend Developer transforming ideas into captivating web experiences.
            </p>
            <p className="text-lg text-foreground/80">
              I specialize in building modern, responsive, and user-friendly web applications using cutting-edge technologies like Next.js and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                 <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                  Contact Me
                </Button>
              </Link>
              {/* Optional: Download CV button */}
              {/* <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Download CV <Download className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block"
          >
            <Image 
              src="https://placehold.co/500x500.png" 
              alt="Developer illustration or abstract graphic" 
              width={500} 
              height={500} 
              className="rounded-lg shadow-2xl object-cover mx-auto"
              data-ai-hint="developer abstract"
            />
          </motion.div>
        </div>
      </div>
       {/* Optional: Decorative shapes or elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl -z-10"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full filter blur-2xl -z-10"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
}
