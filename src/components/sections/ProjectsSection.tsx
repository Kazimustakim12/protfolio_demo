"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const ProjectCard = ({ project, index, range, progress }: { 
    project: typeof projectsData[0], 
    index: number,
    range: [number, number],
    progress: any 
}) => {
    const scale = useTransform(progress, range, [1 - index * SCALE_FACTOR, 1 - (index - 1) * SCALE_FACTOR]);
    const translateY = useTransform(progress, range, [-index * CARD_OFFSET, 100]);
    const rotate = useTransform(progress, range, [0, -5]);
    
    if(index === 0) {
        return (
            <motion.div 
                className="group sticky top-32 w-full max-w-4xl h-[60vh] min-h-[500px] rounded-3xl overflow-hidden"
                style={{
                    zIndex: projectsData.length - index
                }}
            >
                <CardContent project={project} />
            </motion.div>
        )
    }

    return (
        <motion.div 
            className="group sticky top-32 w-full max-w-4xl h-[60vh] min-h-[500px] rounded-3xl overflow-hidden"
            style={{ 
                scale,
                translateY,
                rotate,
                zIndex: projectsData.length - index
            }}
        >
            <CardContent project={project} />
        </motion.div>
    )
}

const CardContent = ({ project }: { project: typeof projectsData[0] }) => (
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
)

export function ProjectsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end']
    });

  return (
    <section id="work" className="section-container relative">
      <div className="text-center mb-16">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
        </p>
      </div>

      <div ref={ref} className="relative h-[250vh]">
        <div className="sticky top-32 flex flex-col items-center">
            {projectsData.map((project, index) => {
                const start = index / projectsData.length;
                const end = start + (1 / projectsData.length);
                return <ProjectCard key={project.id} project={project} index={index} range={[start, end]} progress={scrollYProgress}/>
            })}
        </div>
      </div>
    </section>
  );
}
