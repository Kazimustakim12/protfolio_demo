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

export type Service = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type Skill = {
  name: string;
  icon?: LucideIcon | ((props: any) => JSX.Element);
};

export type NavLinkItem = {
  name: string;
  href: string;
  icon?: LucideIcon | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export type SocialLinkItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};
