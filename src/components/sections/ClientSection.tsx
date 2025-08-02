"use client";

import { motion } from "framer-motion";

const clients = [
  "Google", "Vercel", "Stripe", "Framer", "Linear"
];

export function ClientSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by forward-thinking companies
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {clients.map((client) => (
              <p key={client} className="text-xl font-bold text-muted-foreground/60 filter grayscale hover:grayscale-0 transition-all duration-300">
                {client}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
