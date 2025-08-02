"use client";
import { motion } from 'framer-motion';

export function KaziLogo({ className }: { className?: string }) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
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
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
            className={className}
        >
            {/* Base K shape */}
            <motion.path
                d="M50 30 L50 170" // Vertical stem
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                custom={0}
                variants={draw}
            />
            <motion.path
                d="M50 100 L150 30" // Top diagonal
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                custom={1}
                variants={draw}
            />
            <motion.path
                d="M50 100 L150 170" // Bottom diagonal
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                custom={2}
                variants={draw}
            />

            {/* Overlapping circle for abstract effect */}
            <motion.circle
                cx="85"
                cy="75"
                r="50"
                fill="currentColor"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ delay: 2, duration: 0.5 }}
                style={{ mixBlendMode: 'difference' }}
            />
        </motion.svg>
    );
}
