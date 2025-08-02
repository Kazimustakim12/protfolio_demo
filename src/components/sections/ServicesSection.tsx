"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/lib/data';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="services"
      className="section-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl font-bold font-serif mb-4">WHAT I CAN DO FOR YOU</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
            </p>
          </motion.div>

          <div 
            className="relative space-y-2"
            onMouseLeave={() => setActiveIndex(null)}
          >
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="border-b border-white/10 last:border-b-0"
              >
                <motion.div variants={itemVariants}>
                  <div className="flex justify-between items-center py-6 cursor-pointer">
                    <span className="text-xl font-semibold">
                      <span className="text-accent text-3xl font-serif mr-4">0{index + 1}.</span>
                      <span className={cn(activeIndex === index && "text-accent")}>{service.title}</span>
                    </span>
                    <ChevronUp
                      className={cn(
                        "transition-transform duration-300",
                        activeIndex === index ? "rotate-0" : "rotate-180"
                      )}
                    />
                  </div>
                </motion.div>
              </div>
            ))}

            <AnimatePresence>
                {activeIndex !== null && servicesData[activeIndex] && (
                    <motion.div
                    initial={{ opacity: 0, x: 100, y: (activeIndex * 89) + 24, scale: 0.9 }}
                    animate={{ opacity: 1, x: 100, y: (activeIndex * 89) + 24, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="absolute top-0 left-1/2 w-64 h-40 pointer-events-none"
                    >
                        <Image
                            src={servicesData[activeIndex].imageUrl}
                            alt={servicesData[activeIndex].title}
                            width={256}
                            height={160}
                            className="rounded-lg object-cover shadow-2xl"
                            data-ai-hint={servicesData[activeIndex].imageHint}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div variants={itemVariants} className="h-[600px] w-full relative hidden md:block">
          <Image
            src="https://placehold.co/800x1000.png"
            alt="Designer's desk"
            fill
            className="object-cover rounded-3xl"
            data-ai-hint="designer desk setup"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
