"use client";

import { motion } from 'framer-motion';
import { servicesData } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        What I Offer
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AccordionItem value={`item-${index}`} className="border-b-border/20">
                <AccordionTrigger className="text-xl md:text-2xl font-semibold text-left hover:no-underline">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
