import type { Project, Service, Skill, NavLinkItem } from '@/types';

export const navLinks: NavLinkItem[] = [
  { name: 'Works', href: '#works' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const projectsData: Project[] = [
    {
        id: 'proj-1',
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with a custom CMS, product management, and Stripe integration.',
        imageUrl: 'https://placehold.co/1200x800.png',
        imageHint: 'online store',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe'],
        liveDemoUrl: '#',
        githubRepoUrl: '#',
    },
    {
        id: 'proj-2',
        title: 'AI Content Generator',
        description: 'A SaaS platform that uses generative AI to create marketing copy and blog posts for businesses.',
        imageUrl: 'https://placehold.co/1200x800.png',
        imageHint: 'artificial intelligence',
        techStack: ['React', 'Genkit', 'Node.js', 'Express', 'MongoDB'],
        liveDemoUrl: '#',
        githubRepoUrl: '#',
    },
    {
        id: 'proj-3',
        title: 'Portfolio Website',
        description: 'This very portfolio, designed with a minimal aesthetic and built with Next.js and Framer Motion.',
        imageUrl: 'https://placehold.co/1200x800.png',
        imageHint: 'personal website',
        techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
        liveDemoUrl: '#',
        githubRepoUrl: '#',
    },
];

export const servicesData: Service[] = [
    {
        title: 'Custom Web Application Development',
        description: 'I build bespoke web applications from the ground up, tailored to your unique business needs. From complex internal tools to customer-facing platforms, I deliver scalable, secure, and high-performance solutions.'
    },
    {
        title: 'AI Integration & GenAI Solutions',
        description: 'Leverage the power of Artificial Intelligence. I can integrate cutting-edge GenAI models into your existing applications or build new AI-powered features to automate tasks, generate content, and provide intelligent insights.'
    },
    {
        title: 'UI/UX Design & Prototyping',
        description: 'Good design is good business. I create intuitive, user-friendly interfaces that not only look beautiful but are also a joy to use. I provide interactive prototypes and a complete design system for your product.'
    },
    {
        title: 'API Development & Integration',
        description: 'I design and build robust, secure, and well-documented RESTful and GraphQL APIs. I can also integrate your application with third-party services to extend its functionality.'
    }
];


export const skillsData: Skill[] = [];
