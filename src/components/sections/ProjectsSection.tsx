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
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export function ProjectsSection() {
  return (
    <motion.section 
      id="work" 
      className="section-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="section-heading mb-12 text-center">
        <span className="text-accent font-sans text-xl font-medium">02.</span> Some Things I’ve Built
      </h2>
      <div className="space-y-24">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            variants={projectVariants}
            className={`group grid grid-cols-1 md:grid-cols-12 gap-8 items-center`}
          >
            <div className={`relative h-80 w-full rounded-lg overflow-hidden shadow-2xl md:col-span-7 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
              <p className="text-sm text-accent font-medium mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
              <div className="bg-card p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-muted-foreground text-left">{project.description}</p>
              </div>
              <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className={`flex items-center space-x-4 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink className="w-5 h-5"/>
                  </a>
                )}
                {project.githubRepoUrl && (
                  <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Github className="w-5 h-5"/>
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
