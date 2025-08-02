"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/types';
import { motion } from 'framer-motion';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative w-full h-48 md:h-56 overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              data-ai-hint="programming blog"
            />
          </div>
        </Link>
        <CardHeader className="p-4">
          <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
          <CardTitle className="text-xl font-semibold text-primary leading-snug">
            <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
              {post.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 border-t border-border/50 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
           <Link href={`/blog/${post.slug}`}>
            <Button variant="link" size="sm" className="text-xs text-primary">
              Read More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
