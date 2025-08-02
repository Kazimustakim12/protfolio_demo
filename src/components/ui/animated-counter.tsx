"use client";

import { useEffect } from 'react';
import { motion, useInView, useAnimate } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  text?: string;
  className?: string;
};

export function AnimatedCounter({ value, text, className }: AnimatedCounterProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
        animate(
            scope.current,
            { opacity: 1 },
            { duration: 0.3, delay: 0.2 }
        )
        animate(
            0,
            value,
            {
                duration: 1.5,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (scope.current) {
                        scope.current.textContent = `${Math.round(latest)}${text || ''}`;
                    }
                }
            }
        )
    }
  }, [isInView, value, text, animate, scope]);

  return (
    <motion.span 
        ref={scope} 
        className={`text-5xl font-bold text-accent font-serif ${className}`}
        initial={{ opacity: 0 }}
    >
        {`0${text || ''}`}
    </motion.span>
  );
}
