"use client";

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import { socialLinks } from '@/lib/data';

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
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-primary">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? My inbox is always open.
          I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-16 max-w-xl mx-auto">
        <ContactForm />
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">Find me on other platforms:</p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:-translate-y-1"
              aria-label={link.name}
            >
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
