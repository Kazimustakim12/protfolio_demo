"use client";
import { motion } from 'framer-motion';
import { Smartphone, Code, BarChart, Zap, ShoppingCart, Bot } from 'lucide-react';

const highlights = [
  { icon: Smartphone, title: "Mobile-first design" },
  { icon: Code, title: "Custom functionality" },
  { icon: BarChart, title: "SEO implementation" },
  { icon: Zap, title: "API Integrations" },
  { icon: ShoppingCart, title: "E-commerce" },
  { icon: Bot, title: "AI/Gen-AI" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServiceHighlightsSection() {
  return (
    <motion.section 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-lg transition-colors duration-300"
            variants={itemVariants}
          >
            <highlight.icon className="h-10 w-10 mb-4 text-accent" />
            <h3 className="font-semibold text-lg">{highlight.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
