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

const waveAnimation = {
  rotate: [0, 14, -8, 14, -4, 10, 0, 0],
  transition: {
    duration: 2.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1,
  },
};


export function HeroSection() {

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
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
                  <div className="bg-green-400/80 backdrop-blur-sm text-black font-semibold rounded-full w-24 h-24 flex items-center justify-center text-4xl shadow-lg">
                    <motion.div
                      animate={waveAnimation}
                      style={{ originX: "70%", originY: "70%" }}
                    >
                      👋
                    </motion.div>
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
    </section>
  );
}
