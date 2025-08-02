"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { skillsData } from "@/lib/data";
import { Check } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },
};

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto py-24 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-12">
        <span className="text-primary mr-2">02.</span>
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 text-muted-foreground space-y-4">
            <p>
                Hello! I'm Mustakim, a creative developer based in Malta. My journey into web development started back in 2020 when I decided to build a custom plugin for a client — turns out hacking together a custom solution taught me a lot about HTML & CSS!
            </p>
            <p>
                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, and a large corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {skillsData.map(skill => (
                    <li key={skill.name} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="md:col-span-2 relative group">
          <div className="relative w-full h-80 rounded-lg overflow-hidden">
             <Image 
                src="https://placehold.co/400x500.png" 
                alt="Mustakim Kazi" 
                fill
                className="object-cover object-top"
                data-ai-hint="portrait man"
              />
          </div>
          <div className="absolute inset-0 border-2 border-primary rounded-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2 -z-10 top-4 left-4"></div>
        </div>
      </div>
    </motion.section>
  );
}
