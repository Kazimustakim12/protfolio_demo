"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-24 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 
        className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-12"
        variants={itemVariants}
      >
        <span className="text-primary mr-2">02.</span>
        Some Things I’ve Built
      </motion.h2>

      <div className="space-y-28">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={itemVariants}
          >
            <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </a>
            </div>

            <div className={`text-left ${index % 2 === 1 ? 'md:text-right' : ''}`}>
              <p className="text-primary font-mono text-sm">Featured Project</p>
              <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
              <div className="bg-secondary p-6 rounded-lg shadow-md my-4">
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
              <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                {project.githubRepoUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {project.liveDemoUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
