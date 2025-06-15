import type { Project, Skill, NavLinkItem, SocialLinkItem, ServiceItem, EducationItem } from '@/types';
import { 
  Cpu, Database, Figma, Framer, GitBranch, Globe, Palette, PenTool, Server, Smartphone, Webhook,
  Home, User, Briefcase, Layers, Mail, Twitter, Linkedin, Instagram, Cube, Search, GraduationCap, Award, FileText
} from 'lucide-react';

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
];

export const skillsData: Skill[] = [
  { name: 'HTML5', category: 'Languages', icon: Globe },
  { name: 'CSS3', category: 'Languages', icon: Palette },
  { name: 'JavaScript (ES6+)', category: 'Languages', icon: Webhook },
  { name: 'TypeScript', category: 'Languages', icon: Webhook },
  { name: 'React', category: 'Frameworks & Libraries', icon: Framer },
  { name: 'Next.js', category: 'Frameworks & Libraries', icon: Framer },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', icon: PenTool },
];

// Updated navLinks for the new sidebar
export const navLinks: NavLinkItem[] = [
  { name: 'Home', href: '#home', icon: Home }, // or '/' if it's a separate page
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Stack', href: '#skills', icon: Layers }, // Assuming 'Stack' maps to the 'Skills' section
  { name: 'Contact', href: '#contact', icon: Mail },
];

// New data for social media links
export const socialLinks: SocialLinkItem[] = [
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Framer', url: 'https://framer.com/yourprofile', icon: Framer },
  { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: Instagram },
];

// New data for service cards
export const serviceItems: ServiceItem[] = [
  { id: '1', title: 'UI/UX Designer', icon: Cube, color: 'hsl(150 60% 50%)' }, // Green
  { id: '2', title: 'Web Designer', icon: Palette, color: 'hsl(200 70% 60%)' }, // Blue
  { id: '3', title: 'SEO Specialist', icon: Search, color: 'hsl(280 60% 65%)' }, // Purple
];

// New data for education section
export const educationDataAcademic: EducationItem[] = [
  {
    id: 'acad1',
    degreeOrCert: 'Master of Arts (MA) in User Experience Design',
    institution: 'University of the Arts London - London College of Communication',
    period: '2020 - 2022',
  },
  // Add more academic education items if needed
];

export const educationDataNonFormal: EducationItem[] = [
  {
    id: 'nonform1',
    degreeOrCert: 'UX Certification Program',
    institution: 'Nielsen Norman Group [NNG]',
    period: 'March - June 2023',
  },
  // Add more non-formal education items if needed
];
