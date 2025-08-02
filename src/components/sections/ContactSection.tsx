"use client";

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import { socialLinks } from '@/lib/data';
import { Button } from '../ui/button';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight" variants={itemVariants}>
            Let's build something great together
        </motion.h2>
        <motion.p className="mt-4 text-lg text-muted-foreground" variants={itemVariants}>
          Have a project in mind? I'd love to hear about it.
        </motion.p>
      </div>
      
      <div className="mt-16 max-w-2xl mx-auto">
        <motion.div className="mb-12" variants={itemVariants}>
          <ContactForm />
        </motion.div>
        
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-muted-foreground mb-4">Or connect with me on social media</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} asChild variant="ghost" size="icon">
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
