"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { educationDataAcademic, educationDataNonFormal } from "@/lib/data"; // To be created in data.ts
import type { EducationItem } from "@/types"; // To be created in types.ts
import { GraduationCap, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const EducationCard = ({ title, icon: Icon, items, animationDelay }: { title: string; icon: React.ElementType; items: EducationItem[], animationDelay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: animationDelay }}
  >
    <Card className="bg-card border-border shadow-md h-full">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <Icon className="w-6 h-6 text-primary" />
        <CardTitle className="text-lg font-semibold text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="text-sm">
              <p className="font-medium text-foreground">{item.degreeOrCert}</p>
              <p className="text-muted-foreground">{item.institution}</p>
              <p className="text-xs text-muted-foreground/80">{item.period}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

export function NewAboutMeSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <EducationCard title="Academic Education" icon={GraduationCap} items={educationDataAcademic} animationDelay={0.1} />
          <EducationCard title="Non-Formal Education" icon={Award} items={educationDataNonFormal} animationDelay={0.25} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-right"
        >
          <Button variant="link" className="text-primary hover:text-primary/80">
            View Full Education <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
