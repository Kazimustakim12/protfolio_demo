import type { Project, Skill } from '@/types';
import { Cpu, Database, Figma, Framer, GitBranch, Globe, Palette, PenTool, Server, Smartphone, Webhook } from 'lucide-react';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with modern UI/UX, product listings, cart functionality, and user accounts.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Firebase'],
    liveDemoUrl: '#',
    githubRepoUrl: '#',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool to help teams organize, track, and manage their work efficiently.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'productivity app',
    techStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
    liveDemoUrl: '#',
    githubRepoUrl: '#',
  },
  {
    id: '3',
    title: 'Portfolio Website V1',
    description: 'My previous personal portfolio website showcasing earlier projects and skills. Built with vanilla HTML, CSS, and JavaScript.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'personal website',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveDemoUrl: '#',
    githubRepoUrl: '#',
  },
   {
    id: '4',
    title: 'Weather Dashboard',
    description: 'A sleek weather dashboard providing real-time weather information for cities worldwide using a third-party API.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'weather forecast',
    techStack: ['Vue.js', 'OpenWeatherMap API', 'CSS Animations'],
    liveDemoUrl: '#',
    githubRepoUrl: '#',
  },
];

export const skillsData: Skill[] = [
  // Languages
  { name: 'HTML5', category: 'Languages', icon: Globe },
  { name: 'CSS3', category: 'Languages', icon: Palette },
  { name: 'JavaScript (ES6+)', category: 'Languages', icon: Webhook },
  { name: 'TypeScript', category: 'Languages', icon: Webhook },
  
  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks & Libraries', icon: Framer },
  { name: 'Next.js', category: 'Frameworks & Libraries', icon: Framer },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', icon: PenTool },
  { name: 'Redux', category: 'Frameworks & Libraries', icon: Cpu },
  { name: 'Framer Motion', category: 'Frameworks & Libraries', icon: Framer },
  
  // Tools & Platforms
  { name: 'Git & GitHub', category: 'Tools & Platforms', icon: GitBranch },
  { name: 'VS Code', category: 'Tools & Platforms', icon: Smartphone }, // Placeholder icon
  { name: 'npm/Yarn', category: 'Tools & Platforms', icon: Server }, // Placeholder icon
  { name: 'Webpack', category: 'Tools & Platforms', icon: Server }, // Placeholder icon
  { name: 'Vercel', category: 'Tools & Platforms', icon: Globe },

  // Databases
  { name: 'Firebase', category: 'Databases', icon: Database },
  { name: 'MongoDB', category: 'Databases', icon: Database },

  // Design
  { name: 'Figma', category: 'Design', icon: Figma },
  { name: 'Responsive Design', category: 'Design', icon: Smartphone },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
