import type { Project, Skill, SocialLinkItem } from '@/types';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const socialLinks: SocialLinkItem[] = [
  { name: 'GitHub', href: 'https://github.com/mustakimkazi', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
];

export const projectsData: Project[] = [
  {
      id: 'proj-1',
      title: 'Agency Landing Page',
      description: 'A sleek and modern landing page for a digital agency, built with Next.js and Tailwind CSS. Features a fully responsive design, smooth animations, and a focus on converting visitors into clients.',
      imageUrl: 'https://placehold.co/1280x720.png',
      imageHint: 'digital agency dark',
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      liveDemoUrl: '#',
      githubRepoUrl: '#',
  },
  {
      id: 'proj-2',
      title: 'SaaS Platform Dashboard',
      description: 'A comprehensive dashboard for a SaaS product, featuring complex data visualizations, user management, and real-time updates. Built for performance and scalability.',
      imageUrl: 'https://placehold.co/1280x720.png',
      imageHint: 'saas dashboard dark',
      techStack: ['React', 'TypeScript', 'Recharts', 'Firebase'],
      liveDemoUrl: '#',
      githubRepoUrl: '#',
  },
   {
      id: 'proj-3',
      title: 'E-commerce Store',
      description: 'A feature-rich e-commerce store with a custom CMS, payment gateway integration via Stripe, and a seamless user experience from browsing to checkout.',
      imageUrl: 'https://placehold.co/1280x720.png',
      imageHint: 'ecommerce online store dark',
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
  { name: 'Framer Motion' },
  { name: 'Firebase' },
  { name: 'GraphQL' },
];
