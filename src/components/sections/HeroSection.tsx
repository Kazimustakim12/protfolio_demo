"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="relative flex-1 flex flex-col justify-center items-center text-center overflow-hidden py-20">
       <Image
          src="https://placehold.co/1920x1080.png"
          alt="Circuit Background Left"
          width={400}
          height={600}
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 mix-blend-screen -translate-x-1/4"
          data-ai-hint="circuit board"
        />
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Circuit Background Right"
          width={400}
          height={600}
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 mix-blend-screen translate-x-1/4"
          data-ai-hint="circuit board"
        />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-7xl sm:text-9xl lg:text-[12rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 py-4"
        >
          KAZI
        </motion.h1>

        <motion.div variants={itemVariants} className="relative w-full max-w-lg h-64 mt-[-2rem]">
            <Image
                src="https://placehold.co/600x400.png"
                alt="3D Laptop Render"
                fill
                className="object-contain"
                data-ai-hint="3d laptop"
            />
        </motion.div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="text-left">
                <p className="font-mono text-sm text-secondary">Clean. Crisp. Classic.</p>
                <h2 className="font-playfair text-4xl mt-2 leading-tight">Code the Spirit of Innovation</h2>
            </motion.div>
            <motion.div variants={itemVariants} className="text-left text-muted-foreground">
                <p>Every project is a blend of premium code, creative flair, and timeless design principles — crafted to delight your users.</p>
                <a href="#" className="inline-block mt-4 text-secondary font-medium hover:underline">View my work</a>
            </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
