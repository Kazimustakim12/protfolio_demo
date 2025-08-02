"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="flex-1 flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.p 
          variants={itemVariants}
          className="text-lg text-accent font-medium font-sans mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
        >
          Mustakim Kazi.
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-muted-foreground mt-2"
        >
          I build things for the web.
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          I'm a creative developer focused on crafting beautiful, functional, and high-performance web experiences. Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12"
        >
          <Button size="lg" asChild className="text-lg py-7 px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#work">Check out my work!</a>
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
}
