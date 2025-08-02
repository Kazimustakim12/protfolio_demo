"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export function ContactSection() {
  return (
    <motion.section 
      id="contact" 
      className="section-container text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-5xl font-bold font-serif text-primary mb-6">
        Get In Touch
      </h2>
      <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
        My inbox is always open. Whether you have a question or a project proposal, or just want to say hello, I'll get back to you!
      </p>
      <Button size="lg" asChild className="text-lg py-7 px-8 bg-accent text-accent-foreground hover:bg-accent/90">
        <a href="mailto:contact@mustakimkazi.com">Say Hello</a>
      </Button>
    </motion.section>
  );
}
