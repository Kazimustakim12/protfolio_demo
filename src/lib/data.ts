import type { Project, Skill, NavLinkItem, SocialLinkItem, ServiceItem, EducationItem, BlogPost } from '@/types';
import { 
  Cpu, Database, Figma, Framer, GitBranch, Globe, Palette, PenTool, Server, Smartphone, Webhook,
  Home, User, Briefcase, Layers, Mail, Twitter, Linkedin, Instagram, Box, Search, GraduationCap, Award, FileText, Newspaper, Code
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
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with a focus on performance and aesthetics.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'developer portfolio',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    liveDemoUrl: '#',
    githubRepoUrl: '#',
  }
];

export const skillsData: Skill[] = [
  { name: 'HTML5', category: 'Languages', icon: Globe },
  { name: 'CSS3', category: 'Languages', icon: Palette },
  { name: 'JavaScript (ES6+)', category: 'Languages', icon: Code },
  { name: 'TypeScript', category: 'Languages', icon: Code },
  { name: 'React', category: 'Frameworks & Libraries', icon: Framer },
  { name: 'Next.js', category: 'Frameworks & Libraries', icon: Framer },
  { name: 'Node.js', category: 'Frameworks & Libraries', icon: Server },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', icon: PenTool },
  { name: 'Redux', category: 'Frameworks & Libraries', icon: Cpu },
  { name: 'Framer Motion', category: 'Frameworks & Libraries', icon: Framer },
  { name: 'Git & GitHub', category: 'Tools & Platforms', icon: GitBranch },
  { name: 'Firebase', category: 'Tools & Platforms', icon: Database },
  { name: 'MongoDB', category: 'Databases', icon: Database },
  { name: 'Figma', category: 'Design', icon: Figma },
  { name: 'UI/UX Design', category: 'Design', icon: Palette },
];

export const navLinks: NavLinkItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLinkItem[] = [
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Framer', url: 'https://framer.com/yourprofile', icon: Framer },
  { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: Instagram },
];

export const serviceItems: ServiceItem[] = [
  { id: '1', title: 'UI/UX Designer', icon: Box, color: 'hsl(150 60% 50%)' },
  { id: '2', title: 'Web Designer', icon: Palette, color: 'hsl(200 70% 60%)' },
  { id: '3', title: 'SEO Specialist', icon: Search, color: 'hsl(280 60% 65%)' },
];

export const educationDataAcademic: EducationItem[] = [
  {
    id: 'acad1',
    degreeOrCert: 'Master of Arts (MA) in User Experience Design',
    institution: 'University of the Arts London - London College of Communication',
    period: '2020 - 2022',
  },
];

export const educationDataNonFormal: EducationItem[] = [
  {
    id: 'nonform1',
    degreeOrCert: 'UX Certification Program',
    institution: 'Nielsen Norman Group [NNG]',
    period: 'March - June 2023',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive into useState and useEffect',
    excerpt: 'Explore the two most fundamental React Hooks, useState and useEffect, with practical examples and best practices that will elevate your component design.',
    content: '<h2>Introduction to Hooks</h2><p>React Hooks revolutionized how we write components. Forget class components and `this.setState`, hooks provide a more direct and functional way to manage state and side effects...</p><h3>Understanding useState</h3><p>Let\'s break down the `useState` hook. It allows you to add state to functional components. When you call `useState`, you get back a pair: the current state value and a function that lets you update it.</p><pre><code>const [count, setCount] = useState(0);</code></pre><p>Here, `count` is our state variable, and `setCount` is the function to update it. We initialized it to 0.</p><h3>Diving into useEffect</h3><p>The `useEffect` hook lets you perform side effects in functional components. What are side effects? Things like data fetching, subscriptions, or manually changing the DOM. `useEffect` runs after every render, including the first one.</p><pre><code>useEffect(() => {\n  document.title = `You clicked ${count} times`;\n});</code></pre><p>This is just the tip of the iceberg. We\'ll cover dependency arrays, cleanup functions, and more advanced patterns in the full post.</p>',
    imageUrl: 'https://placehold.co/600x400.png',
    date: 'July 22, 2024',
    category: 'React',
  },
  {
    id: '2',
    slug: 'tailwind-css-for-modern-ui',
    title: 'Why Tailwind CSS is a Game-Changer for Modern UI Development',
    excerpt: 'Discover how Tailwind CSS, a utility-first CSS framework, can drastically speed up your development workflow and help you build consistent, custom designs.',
    content: '<h2>The Utility-First Approach</h2><p>Unlike component-based frameworks like Bootstrap, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p><h3>Rapid Prototyping</h3><p>With classes like `flex`, `pt-4`, `text-center`, you can take a design from concept to reality in record time. No more switching between your markup and your stylesheet.</p><h3>Consistency and Constraints</h3><p>Tailwind\'s configuration file is the single source of truth for your design system. Colors, spacing, typography—it\'s all defined in one place, ensuring consistency across your entire application.</p>',
    imageUrl: 'https://placehold.co/600x400.png',
    date: 'July 15, 2024',
    category: 'CSS',
  },
];
