"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardHoverVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 },
  },
};

export function WorksSection() {
  return (
    <motion.section
      id="works"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        variants={itemVariants}
      >
        Selected Works
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={sectionVariants}
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <motion.div variants={cardHoverVariants} whileHover="hover">
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/20 rounded-xl overflow-hidden shadow-lg">
                <CardHeader>
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  {project.githubRepoUrl && (
                    <Button asChild variant="ghost" size="icon">
                      <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {project.liveDemoUrl && (
                    <Button asChild variant="ghost" size="icon">
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
