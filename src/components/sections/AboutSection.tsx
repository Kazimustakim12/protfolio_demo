"use client";

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import Image from 'next/image';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="section-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="section-heading mb-12 text-center">
        <span className="text-accent font-sans text-xl font-medium">01.</span> About Me
      </h2>
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <motion.div 
            className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            variants={sectionVariants}
            custom={1}
          >
            <p>
              Hello! I'm Mustakim, a developer with a deep-seated passion for crafting beautiful, functional, and user-centric digital experiences. My journey into web development started with a simple "Hello, World!" and has since blossomed into a career where I get to build amazing things for the web.
            </p>
            <p>
              I specialize in front-end development, but I'm comfortable working across the full stack. My philosophy is that good design is as much about how it works as how it looks. I thrive on turning complex problems into simple, elegant solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest trends in technology, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </motion.div>
        </div>
        <div className="md:col-span-2">
            <motion.div 
              className="space-y-4"
              variants={sectionVariants}
              custom={2}
            >
                <p className="text-lg font-semibold text-foreground">Here are a few technologies I've been working with recently:</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                    {skillsData.map((skill) => (
                    <li key={skill.name} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        {skill.name}
                    </li>
                    ))}
                </ul>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
