import type { Project, Service, Skill, NavLinkItem, SocialLinkItem } from '@/types';
import { 
  Cpu, Database, Figma, Framer, GitBranch, Globe, Palette, PenTool, Server, Smartphone, Webhook,
  Home, User, Briefcase, Layers, Mail, Twitter, Linkedin, Instagram
} from 'lucide-react';

export const navLinks: NavLinkItem[] = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Services', href: '#services', icon: Layers },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const socialLinks: SocialLinkItem[] = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Framer', href: '#', icon: Framer },
];

export const projectsData: Project[] = [
  {
      id: 'proj-1',
      title: 'Agency Landing Page',
      description: 'A sleek and modern landing page for a digital agency, built with Next.js and Tailwind CSS.',
      imageUrl: 'https://placehold.co/1200x900.png',
      imageHint: 'digital agency',
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveDemoUrl: '#',
      githubRepoUrl: '#',
  },
  {
      id: 'proj-2',
      title: 'SaaS Platform Dashboard',
      description: 'A comprehensive dashboard for a SaaS product, featuring complex data visualizations and user management.',
      imageUrl: 'https://placehold.co/1200x900.png',
      imageHint: 'saas dashboard',
      techStack: ['React', 'TypeScript', 'Recharts', 'Firebase'],
      liveDemoUrl: '#',
      githubRepoUrl: '#',
  },
];

export const servicesData: Service[] = [
  {
      title: 'Modern Websites',
      description: 'I create stunning, high-performance websites using the latest technologies like Next.js and React.',
      icon: Globe
  },
  {
      title: 'WordPress Builds',
      description: 'Custom WordPress themes and plugins, providing a powerful and easy-to-use CMS for your content.',
      icon: PenTool
  },
  {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic with technical SEO and on-page strategies.',
      icon: Server
  }
];

export const skillsData: Skill[] = [
  { name: 'Next.js', icon: Globe },
  { name: 'React', icon: Globe },
  { name: 'WordPress', icon: PenTool },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Figma', icon: Figma },
  { name: 'Firebase', icon: Database },
  { name: 'Node.js', icon: Server },
  { name: 'Git', icon: GitBranch },
  { name: 'TypeScript', icon: Code },
  { name: 'JavaScript', icon: Code },
];

// Add Code icon to the import from lucide-react in the future if needed. For now, this is a placeholder.
function Code(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}
