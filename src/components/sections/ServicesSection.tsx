
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/lib/data';
import Image from 'next/image';
import { Check, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BackgroundGradient } from '../layout/BackgroundGradient';

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

const accordionContentVariants = {
    collapsed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
    }
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <BackgroundGradient>
        <motion.section
        id="services"
        className="section-container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        >
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
            <motion.div variants={itemVariants}>
                <h2 className="text-5xl font-bold font-serif mb-4">WHAT I CAN DO FOR YOU</h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-lg">
                As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
                </p>
            </motion.div>

            <div 
                className="relative"
                onMouseMove={handleMouseMove}
            >
                {servicesData.map((service, index) => (
                <motion.div
                    key={service.id}
                    className="border-b border-border last:border-b-0 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleItemClick(index)}
                    variants={itemVariants}
                >
                    <div >
                    <div className="flex justify-between items-center py-6">
                        <span className="text-2xl font-medium flex items-center gap-6">
                        <span className="text-accent text-4xl font-serif">0{index + 1}</span>
                        <span className={cn("transition-colors", activeIndex === index && "text-accent")}>{service.title}</span>
                        </span>
                        <ChevronUp
                        className={cn(
                            "transition-transform duration-300",
                            activeIndex === index ? "rotate-0 text-accent" : "rotate-180"
                        )}
                        />
                    </div>
                    </div>
                    <AnimatePresence initial={false}>
                    {activeIndex === index && (
                        <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={accordionContentVariants}
                        className="overflow-hidden"
                        >
                        <ul className="pb-6 pl-20 space-y-3 text-muted-foreground">
                            {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
                                <span>{feature}</span>
                            </li>
                            ))}
                        </ul>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </motion.div>
                ))}

                <AnimatePresence>
                    {hoveredIndex !== null && servicesData[hoveredIndex] && (
                        <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            x: mousePosition.x - 20, 
                            y: mousePosition.y - 20,
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
                        className="absolute top-0 left-0 w-64 h-40 pointer-events-none z-10"
                        >
                            <Image
                                src={servicesData[hoveredIndex].imageUrl}
                                alt={servicesData[hoveredIndex].title}
                                width={256}
                                height={160}
                                className="rounded-lg object-cover shadow-2xl"
                                data-ai-hint={servicesData[hoveredIndex].imageHint}
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
    </BackgroundGradient>
  );
}
