"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const ProjectCard = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div ref={ref} style={{opacity}} className="h-screen flex items-center justify-center">
            <motion.div 
                style={{ scale, top: `${(index * 2)}rem` }}
                className="group sticky w-full max-w-4xl h-[60vh] min-h-[500px] rounded-3xl overflow-hidden"
            >
                <Link href={project.liveDemoUrl || '#'} target='_blank' className="block w-full h-full">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
                        <Badge variant="secondary" className="bg-secondary/80 text-secondary-foreground mb-4 backdrop-blur-sm">
                            {project.techStack[0]}
                        </Badge>
                        <h3 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                            {project.title}
                        </h3>
                        <p className="max-w-md text-base text-white/80">
                            {project.description}
                        </p>
                    </div>

                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                            <ArrowUpRight className="w-8 h-8 text-accent-foreground" />
                        </div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export function ProjectsSection() {
  return (
    <motion.section 
      id="work" 
      className="section-container relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center mb-16">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
        </p>
      </div>

      <div>
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
