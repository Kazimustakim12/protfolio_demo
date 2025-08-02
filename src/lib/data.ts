import type { Project, Skill, NavLinkItem } from '@/types';

// Data is simplified for the new minimal design.
// It can be expanded later for Works/Services sections.

export const navLinks: NavLinkItem[] = [
  { name: 'Works', href: '#works' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const projectsData: Project[] = [];
export const skillsData: Skill[] = [];
