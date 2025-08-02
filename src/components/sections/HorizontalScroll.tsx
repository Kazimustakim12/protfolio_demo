"use client";

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type HorizontalScrollProps = {
  sections: { component: ReactNode; id: string }[];
};

export const HorizontalScroll = ({ sections }: HorizontalScrollProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${100 * (sections.length - 1)}%`]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className="w-screen h-screen flex-shrink-0">
              {section.component}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
