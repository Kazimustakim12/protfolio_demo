"use client";

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const ProjectCard = ({ project, index, range, progress, targetScale }: { 
    project: typeof projectsData[0], 
    index: number,
    range: [number, number],
    progress: MotionValue<number>,
    targetScale: number,
}) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const isMobile = useIsMobile();

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [index * SCALE_FACTOR + 1, targetScale]);

    return (
        <div ref={container} className="h-auto md:h-[100vh] md:sticky top-0 flex items-center justify-center my-16 md:my-0">
            <motion.div 
                className="group relative w-full max-w-4xl h-[60vh] min-h-[500px] rounded-3xl overflow-hidden"
                style={{
                    scale: isMobile ? 1 : scale,
                    top: isMobile ? 0 : `calc(-5vh + ${index * 25}px)`
                }}
            >
                <CardContent project={project} imageScale={imageScale} />
            </motion.div>
        </div>
    )
}

const CardContent = ({ project, imageScale }: { project: typeof projectsData[0], imageScale: any }) => (
    <motion.div className="w-full h-full" style={{scale: imageScale}}>
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
)

export function ProjectsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end']
    });
    const isMobile = useIsMobile();

  return (
    <section id="work" className="section-container relative md:h-auto">
    <div className="text-center mb-16">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
        These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
        </p>
    </div>

    <div ref={ref} className={cn("relative", !isMobile && 'h-[300vh]')}>
        {projectsData.map((project, index) => {
            const targetScale = 1 - ( (projectsData.length - index) * 0.05);
            return <ProjectCard key={project.id} project={project} index={index} progress={scrollYProgress} range={[index * .25, 1]} targetScale={targetScale}/>
        })}
    </div>
    </section>
  );
}
