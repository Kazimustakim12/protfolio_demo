"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ProjectsSection() {
  return (
    <motion.section 
      id="work" 
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-primary mb-12 text-center">
        Selected Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            variants={projectVariants}
            className="group relative flex flex-col overflow-hidden rounded-lg shadow-2xl bg-card border border-white/10 transition-all hover:shadow-accent/20 hover:-translate-y-1"
          >
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-white/10">
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2"/>
                    Live Demo
                  </a>
                )}
                {project.githubRepoUrl && (
                  <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4 mr-2"/>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
