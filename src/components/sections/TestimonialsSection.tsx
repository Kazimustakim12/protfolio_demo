"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      className="section-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center mb-16">
        <h2 className="section-title">WHAT MY CLIENTS SAY</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground text-balance">
          Here's what my clients have shared about their experiences working
          with me. Their trust and satisfaction motivate me to continue
          delivering designs that make an impact.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={sectionVariants}
      >
        {testimonialsData.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={cardVariants}
            className={cn(
              "lg:col-span-1",
              (testimonial.id === "testimonial-2" ||
                testimonial.id === "testimonial-3") &&
                "md:col-span-1",
              (testimonial.id === "testimonial-1" ||
                testimonial.id === "testimonial-4" ||
                testimonial.id === "testimonial-5" ||
                testimonial.id === "testimonial-6") &&
                "md:col-span-1",
              testimonial.type === "metric" && "md:col-span-1 lg:col-span-1",
              testimonial.id === "metric-1" && "lg:row-span-2",
              testimonial.id === "metric-2" && "lg:row-span-2"
            )}
          >
            <Card
              className={cn(
                "h-full flex flex-col justify-center p-6 text-left",
                testimonial.type === "metric" && "text-center items-center",
                testimonial.id === "metric-1" && "bg-highlight text-black",
                testimonial.id === "metric-2" &&
                  "bg-primary text-primary-foreground"
              )}
            >
              {testimonial.type === "testimonial" && (
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground flex-1 mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    {/* <Image
                      src={testimonial.avatarUrl!}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                      data-ai-hint={testimonial.avatarHint}
                    /> */}
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              )}
              {testimonial.type === "metric" && (
                <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                  <p className="text-lg mb-4">{testimonial.content}</p>
                  <p className="text-8xl font-bold font-serif">
                    {testimonial.metricValue}
                  </p>
                  <p className="text-lg font-medium">
                    {testimonial.metricLabel}
                  </p>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
