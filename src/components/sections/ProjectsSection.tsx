// This file replaces the previous WorksSection.tsx to match the new design.
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="bg-secondary py-24 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into some of the projects I'm proud to have worked on.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariants}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group overflow-hidden rounded-xl border-none shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
