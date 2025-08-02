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

export type Service = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type Skill = {
  name: string;
};

export type NavLinkItem = {
  name: string;
  href: string;
};

export type SocialLinkItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};
