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

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageHint?: string;
};

export type SocialLinkItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured: boolean;
};

export type Stat = {
    value: number;
    text?: string;
    label: string;
}

export type Testimonial = {
    id: string;
    type: 'testimonial' | 'metric';
    content: string;
    name: string;
    title?: string;
    avatarUrl?: string;
    avatarHint?: string;
    metricValue?: string;
    metricLabel?: string;
};
