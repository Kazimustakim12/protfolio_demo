"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export function PricingSection() {
  return (
    <motion.section 
      id="pricing" 
      className="section-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="section-heading mb-4 text-center">
        <span className="text-accent font-sans text-xl font-medium">03.</span> My Pricing
      </h2>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Choose a plan that works for you. All plans are flexible and can be customized to meet your specific needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {pricingPlans.map((plan) => (
          <motion.div key={plan.id} variants={cardVariants}>
            <Card className={cn(
              "flex flex-col h-full", 
              plan.isFeatured && "border-2 border-accent shadow-accent/20 shadow-2xl bg-gradient-to-br from-card to-secondary/10"
            )}>
              <CardHeader className="text-center">
                {plan.isFeatured && (
                    <div className="text-accent font-semibold mb-2">Most Popular</div>
                )}
                <CardTitle className="text-3xl font-serif">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-center mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.name !== 'Enterprise' && <span className="text-muted-foreground">/project</span>}
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={cn("w-full text-lg py-6", !plan.isFeatured && 'bg-primary')}
                  variant={plan.isFeatured ? 'default' : 'secondary'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
