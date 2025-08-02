
"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqData } from '@/lib/data';
import { cn } from '@/lib/utils';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export function FaqSection() {
  return (
    <motion.section
      id="faq"
      className="section-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div variants={itemVariants} className="md:sticky md:top-24">
          <h2 className="section-heading mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Here are answers to some of the most common questions I receive as a freelance designer. If you don’t see your question here, feel free to reach out — I’m happy to help!
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="group py-6 text-left text-lg hover:no-underline">
                   <span className="flex items-start gap-4">
                    <span className="text-accent font-serif text-2xl mt-1">0{index + 1}.</span>
                    <span className="transition-colors duration-300 group-data-[state=open]:text-accent">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-12 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
