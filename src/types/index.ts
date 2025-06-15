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

// Updated NavLinkItem to include an optional icon
export type NavLinkItem = {
  name: string;
  href: string;
  icon?: LucideIcon | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>; // Allow for various Lucide icon types
};

// New type for Social Links
export type SocialLinkItem = {
  name: string;
  url: string;
  icon: LucideIcon | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

// New type for Service Items
export type ServiceItem = {
  id: string;
  title: string;
  // description: string; // Description seems to be omitted in the new design's cards
  icon: LucideIcon | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  color?: string; // Optional color for icon/background accents
};

// New type for Education Items
export type EducationItem = {
  id: string;
  degreeOrCert: string;
  institution: string;
  period: string;
};
