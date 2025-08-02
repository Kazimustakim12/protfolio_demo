import type { LucideIcon, LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

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

export type NavLinkItem = {
  name: string;
  href: string;
  icon?: LucideIcon | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export type SocialLinkItem = {
  name: string;
  url: string;
  icon: LucideIcon | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export type ServiceItem = {
  id: string;
  title: string;
  icon: LucideIcon | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  color?: string;
};

export type EducationItem = {
  id: string;
  degreeOrCert: string;
  institution: string;
  period: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Will contain HTML content
  imageUrl: string;
  date: string;
  category: string;
};
