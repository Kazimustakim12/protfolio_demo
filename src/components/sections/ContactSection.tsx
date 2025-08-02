"use client";

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';

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
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-2xl mx-auto text-center" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Have a project in mind or just want to say hello? Drop me a line.
        </p>
      </motion.div>
      <motion.div className="max-w-2xl mx-auto" variants={itemVariants}>
        <ContactForm />
      </motion.div>
    </motion.section>
  );
}
