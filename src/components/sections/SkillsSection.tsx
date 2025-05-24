
"use client";

import { skillsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion'; // Use direct import
import type { Skill } from '@/types';

export function SkillsSection() {
  const categories: Skill['category'][] = ['Languages', 'Frameworks & Libraries', 'Tools & Platforms', 'Databases', 'Design'];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  };

  // Capitalized aliases for motion components, derived directly from 'motion'
  const MotionSection = motion.section;
  const MotionH2 = motion.h2;
  const MotionDiv = motion.div;
  
  return (
    <MotionSection 
      id="skills" 
      className="py-20 md:py-32 bg-card text-card-foreground"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionH2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="text-primary">Skills</span>
        </MotionH2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categorySkills = skillsData.filter(skill => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <MotionDiv key={category} variants={cardVariants}>
                <Card className="h-full shadow-lg bg-background border-border hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary flex items-center">
                      {categorySkills[0]?.icon && <categorySkills[0].icon className="mr-2 h-5 w-5" />} 
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => (
                        <MotionDiv key={skill.name} custom={index} variants={badgeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                           <Badge variant="secondary" className="text-sm px-3 py-1.5 bg-secondary/70 text-secondary-foreground hover:bg-secondary transition-colors flex items-center gap-1.5">
                            {skill.icon && <skill.icon className="h-4 w-4" />}
                            {skill.name}
                          </Badge>
                        </MotionDiv>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
