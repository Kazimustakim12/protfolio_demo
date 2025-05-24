"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border">
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={project.imageHint}
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5 bg-secondary/80 text-secondary-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 border-t border-border/50 flex justify-end space-x-2">
          {project.liveDemoUrl && (
            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-xs border-primary text-primary hover:bg-primary/10">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
              </Button>
            </a>
          )}
          {project.githubRepoUrl && (
            <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-xs hover:bg-accent/10 text-accent-foreground">
                <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
