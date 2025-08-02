"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};


export function HeroSection() {

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div variants={itemVariants} className="text-right">
              <p className="font-sans text-muted-foreground">MUSTAKIM KAZI</p>
              <h1 className="text-8xl lg:text-9xl font-bold font-serif tracking-tighter text-foreground">
                CREATIVE
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} custom={2}>
              <div className="relative w-48 h-64 md:w-64 md:h-80 mx-auto">
                <Image
                  src="https://placehold.co/400x600.png"
                  alt="Mustakim Kazi"
                  width={400}
                  height={600}
                  className="rounded-3xl object-cover"
                  data-ai-hint="man portrait professional"
                />
                 <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8"
                >
                  <div className="bg-green-400/80 backdrop-blur-sm text-black font-semibold rounded-full w-24 h-24 flex items-center justify-center text-2xl shadow-lg">
                    Hi
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-left">
              <h1 className="text-8xl lg:text-9xl font-bold font-serif tracking-tighter text-foreground">
                DEVELOPER
              </h1>
              <p className="font-sans text-muted-foreground max-w-xs mt-2">
                I'm a developer focused on building beautiful and functional web experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

       <motion.div
          initial={{ y: '50vh', x: '50vw', scale: 0 }}
          animate={{ y: Math.random() * -300 -50, x: Math.random() * 200 + 100, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.5, type: 'spring' }}
          className="absolute w-4 h-4 rounded-full bg-green-400/80"
      />
    </section>
  );
}
