"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHoveringLink(true);
    const handleMouseLeave = () => setIsHoveringLink(false);

    window.addEventListener('mousemove', updateMousePosition);

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: 'hsla(80, 80%, 70%, 0.7)',
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'hsla(80, 80%, 70%, 0.4)',
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
  };

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]',
        'mix-blend-difference'
      )}
      variants={cursorVariants}
      animate={isHoveringLink ? 'hover' : 'default'}
    />
  );
}
