// This file replaces the previous WorksSection, ServicesSection, etc.
// to create a new, premium "About" section as per the new design brief.
"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            A bit about me
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Based in Malta, I'm a freelance web developer with a passion for building exceptional digital experiences. I focus on creating websites that are not only beautiful but also high-performing and user-friendly.
            <br /><br />
            My goal is to help businesses grow by crafting modern, fast, and results-driven web solutions.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-6">My Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {skillsData.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 bg-secondary p-3 rounded-lg">
                {skill.icon && <skill.icon className="w-6 h-6 text-primary" />}
                <span className="font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
