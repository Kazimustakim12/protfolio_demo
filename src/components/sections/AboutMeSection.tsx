"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Zap, Users, Lightbulb } from 'lucide-react';

export function AboutMeSection() {
  const coreTechStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 md:py-32 bg-card text-card-foreground"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight"
          variants={itemVariants}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative group"
            variants={itemVariants}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://placehold.co/400x400.png"
              alt="Your Name - Profile Photo"
              width={400}
              height={400}
              className="rounded-lg shadow-xl object-cover mx-auto relative"
              data-ai-hint="developer portrait"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-primary">Hello! I&apos;m Your Name.</h3>
            <p className="text-lg leading-relaxed">
              I&apos;m a dedicated Frontend Developer with X years of experience in crafting beautiful, high-performing, and user-centric web applications. My journey in web development started with a fascination for how code translates into interactive digital experiences, and this passion continues to drive me every day.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of web development. My expertise lies in translating design mockups into pixel-perfect, responsive UIs and building robust frontend architectures.
            </p>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Core Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {coreTechStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1 bg-secondary/70 text-secondary-foreground hover:bg-secondary transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div className="flex items-start space-x-3 p-3 bg-background rounded-md shadow-sm" variants={itemVariants}>
                    <Briefcase className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                        <h5 className="font-semibold">Experience</h5>
                        <p className="text-sm text-muted-foreground">X+ years in frontend development</p>
                    </div>
                </motion.div>
                <motion.div className="flex items-start space-x-3 p-3 bg-background rounded-md shadow-sm" variants={itemVariants}>
                    <Zap className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                        <h5 className="font-semibold">Focus</h5>
                        <p className="text-sm text-muted-foreground">Performance & Scalability</p>
                    </div>
                </motion.div>
                <motion.div className="flex items-start space-x-3 p-3 bg-background rounded-md shadow-sm" variants={itemVariants}>
                    <Users className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                        <h5 className="font-semibold">Collaboration</h5>
                        <p className="text-sm text-muted-foreground">Agile teams & Git workflows</p>
                    </div>
                </motion.div>
                <motion.div className="flex items-start space-x-3 p-3 bg-background rounded-md shadow-sm" variants={itemVariants}>
                    <Lightbulb className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                        <h5 className="font-semibold">Passion</h5>
                        <p className="text-sm text-muted-foreground">Clean code & innovative solutions</p>
                    </div>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
