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
  name:string;
};

export type SocialLinkItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};
