"use client";

import { motion } from "framer-motion";
import { KaziLogo } from "@/components/KaziLogo";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background KAZI logo */}
        <KaziLogo className="absolute inset-0 w-full h-full object-cover text-foreground/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg font-medium tracking-widest uppercase text-primary mb-4"
            >
                Mustakim Kazi
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter uppercase"
            >
                Creative Developer
                <br/>
                & <span className="text-primary">Web</span> Architect
            </motion.h1>
        </div>
      </div>
    </section>
  );
}
