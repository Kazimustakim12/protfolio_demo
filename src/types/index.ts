import type { LucideIcon } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubRepoUrl?: string;
};

export type Skill = {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms' | 'Databases' | 'Design';
  icon?: LucideIcon; 
};
