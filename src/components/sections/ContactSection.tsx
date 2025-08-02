"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="max-w-xl mx-auto text-center py-24 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-lg font-mono text-primary mb-4">04. What’s Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h3>
      <p className="text-muted-foreground mb-8">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <Button asChild size="lg">
        <a href="mailto:contact@example.com">Say Hello</a>
      </Button>
    </motion.section>
  );
}
