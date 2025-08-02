"use client";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const stats = [
  { rating: 5, source: 'Sortlist' },
  { rating: 5, source: 'Google' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8,
      },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center gap-1 text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
    );
};

export function StatsSection() {
  return (
    <motion.section 
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex justify-center items-center gap-12 md:gap-24">
        {stats.map((stat, index) => (
          <motion.div key={index} className="text-center" variants={itemVariants}>
            {renderStars(stat.rating)}
            <p className="text-sm text-muted-foreground mt-1 mb-2">
              {stat.rating}-star rated
            </p>
            <p className="text-2xl font-semibold">{stat.source}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
