"use client";

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import Image from 'next/image';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-primary">
            About Me
          </h2>
          <div className="mt-6 space-y-6 text-muted-foreground text-lg">
            <p>
              Hello! I&apos;m Mustakim Kazi, a passionate creative developer with a knack for building beautiful, high-performance websites and applications. My journey into code began with a fascination for how things work, and it has evolved into a career dedicated to crafting seamless digital experiences.
            </p>
            <p>
              I believe in the power of clean code, elegant design, and user-centric thinking. Whether I&apos;m architecting a complex backend or perfecting a pixel-perfect animation, my goal is always the same: to deliver solutions that not only meet business objectives but also delight users.
            </p>
             <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>
          <motion.ul 
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 text-muted-foreground"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillsData.map((skill) => (
              <motion.li key={skill.name} className="flex items-center" variants={itemVariants}>
                <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                {skill.name}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="md:col-span-2 flex justify-center">
            <motion.div 
              className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-secondary/50 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
                <Image
                    src="https://placehold.co/400x400.png"
                    alt="Mustakim Kazi Profile Picture"
                    fill
                    className="object-cover"
                    data-ai-hint="developer portrait"
                />
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
