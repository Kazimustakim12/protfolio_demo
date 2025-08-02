"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimate, useIsomorphicLayoutEffect } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  text?: string;
  className?: string;
};

export function AnimatedCounter({ value, text, className }: AnimatedCounterProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useIsomorphicLayoutEffect(() => {
    if (isInView) {
      animate(
        (progress) => {
          scope.current.textContent = `${Math.round(value * progress)}${text || ''}`;
        },
        { duration: 1.5, ease: 'easeOut' }
      );
    }
  }, [isInView, value, text, animate, scope]);

  return (
    <motion.span 
        ref={scope} 
        className={`text-5xl font-bold text-accent font-serif ${className}`}
    >
        {`0${text || ''}`}
    </motion.span>
  );
}
