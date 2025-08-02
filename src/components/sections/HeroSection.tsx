"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay } },
  });

  return (
    <section className="relative flex-1 flex flex-col justify-center items-center text-center overflow-hidden py-32 md:py-48 min-h-screen">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Circuit Background"
        fill
        className="object-cover opacity-5 mix-blend-soft-light"
        data-ai-hint="circuit board dark"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center container px-4"
      >
        <motion.div variants={itemVariants(0)} className="w-full max-w-lg h-48 md:h-64 relative mb-[-2rem] md:mb-[-4rem]">
          <Image
            src="https://placehold.co/600x400.png"
            alt="3D Laptop Render"
            fill
            className="object-contain"
            data-ai-hint="3d laptop dark"
            priority
          />
        </motion.div>
        
        <motion.h1
          variants={itemVariants(0.4)}
          className="font-playfair text-6xl sm:text-8xl lg:text-[10rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 py-2"
        >
          KAZI
        </motion.h1>

        <motion.p 
          variants={itemVariants(0.8)}
          className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          Elegant Code. Bold Solutions. Crafting bespoke web experiences that are as functional as they are beautiful.
        </motion.p>
        
        <motion.div 
          variants={itemVariants(1.2)}
          className="mt-10"
        >
          <Button size="lg" asChild className="text-lg py-7 px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#work">Explore My Work</a>
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
}
