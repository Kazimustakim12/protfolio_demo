// This file is being repurposed for the new design.
"use client";

import { motion } from 'framer-motion';
import { servicesData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight"
          variants={itemVariants}
        >
          What I Can Do For You
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-muted-foreground"
          variants={itemVariants}
        >
          I offer a range of services to help you achieve your business goals.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full bg-secondary border-none text-center p-4">
              <CardHeader>
                {service.icon && (
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-background mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                )}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
