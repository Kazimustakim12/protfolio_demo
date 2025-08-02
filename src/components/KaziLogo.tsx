// This component is simplified for the new design.
"use client";

import { motion } from 'framer-motion';

export function KaziLogo({ className }: { className?: string }) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = i * 0.2;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };

    return (
        <motion.svg
            viewBox="0 0 200 100" // Adjusted for a more rectangular logo
            initial="hidden"
            animate="visible"
            className={className}
        >
            {/* Base K shape */}
            <motion.path
                d="M30 10 L30 90" // Vertical stem
                stroke="currentColor"
                strokeWidth="10"
                fill="none"
                custom={0}
                variants={draw}
            />
            <motion.path
                d="M30 50 L80 10" // Top diagonal
                stroke="currentColor"
                strokeWidth="10"
                fill="none"
                custom={1}
                variants={draw}
            />
            <motion.path
                d="M30 50 L80 90" // Bottom diagonal
                stroke="currentColor"
                strokeWidth="10"
                fill="none"
                custom={1.5}
                variants={draw}
            />
        </motion.svg>
    );
}
