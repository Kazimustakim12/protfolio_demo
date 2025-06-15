"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceItem } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = service.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col justify-between p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border group relative overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: service.color || 'hsl(var(--accent))' }}></div>
        <CardHeader className="p-0 mb-4 z-10">
          {IconComponent && React.createElement(IconComponent, { className: "w-12 h-12 mb-4", style: { color: service.color || 'hsl(var(--accent))' } })}
          <CardTitle className="text-xl font-semibold text-card-foreground">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow z-10">
          {/* <p className="text-sm text-muted-foreground">{service.description}</p> */}
        </CardContent>
        <div className="pt-4 text-right z-10">
           <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </Card>
    </motion.div>
  );
}
