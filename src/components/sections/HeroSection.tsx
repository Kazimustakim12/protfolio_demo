"use client";

import { motion } from "framer-motion";
import { KaziLogo } from "@/components/KaziLogo";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
             <KaziLogo className="w-64 h-64 md:w-96 md:h-96" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase leading-none">
              Your Freelance
              <br />
              Developer For
              <br />
              All Web And
              <br />
              Software Needs
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
