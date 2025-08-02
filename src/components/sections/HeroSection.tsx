"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="home"
      className="min-h-[calc(100vh-8rem)] flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl">
        <motion.p variants={itemVariants} className="text-lg text-primary mb-4 font-mono">
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
        >
          Mustakim Kazi.
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="mt-2 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-muted-foreground"
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          I'm a creative developer focused on building beautiful and functional web experiences. I specialize in creating modern websites with a focus on performance, design, and results.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10">
          <Button asChild size="lg">
            <a href="#projects">Check out my work!</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
