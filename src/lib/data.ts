import type { Project, Skill, NavLinkItem, SocialLinkItem } from '@/types';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const navLinks: NavLinkItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

export const socialLinks: SocialLinkItem[] = [
  { name: 'GitHub', href: 'https://github.com/mustakimkazi', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
];

export const projectsData: Project[] = [
  {
      id: 'proj-1',
      title: 'Agency Landing Page',
      description: 'A sleek and modern landing page for a digital agency, built with Next.js and Tailwind CSS. Features a fully responsive design and smooth animations.',
      imageUrl: 'https://placehold.co/1280x720.png',
      imageHint: 'digital agency',
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      liveDemoUrl: '#',
      githubRepoUrl: '#',
  },
  {
      id: 'proj-2',
      title: 'SaaS Platform Dashboard',
      description: 'A comprehensive dashboard for a SaaS product, featuring complex data visualizations and user management. Built with performance and scalability in mind.',
      imageUrl: 'https://placehold.co/1280x720.png',
      imageHint: 'saas dashboard',
      techStack: ['React', 'TypeScript', 'Recharts', 'Firebase'],
      liveDemoUrl: '#',
      githubRepoUrl: '#',
  },
   {
      id: 'proj-3',
      title: 'E-commerce Store',
      description: 'A feature-rich e-commerce store with a custom CMS, payment gateway integration, and a seamless user experience from browsing to checkout.',
      imageUrl: 'https://placehold.co/1280x720.png',
      imageHint: 'ecommerce online store',
      techStack: ['Next.js', 'Stripe', 'GraphQL', 'Sanity'],
      liveDemoUrl: '#',
      githubRepoUrl: '#',
  },
];

export const skillsData: Skill[] = [
  { name: 'JavaScript (ES6+)' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'Tailwind CSS' },
];
