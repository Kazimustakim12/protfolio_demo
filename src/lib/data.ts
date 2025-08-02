import type { Project, Skill, SocialLinkItem, PricingPlan, Service, Stat, Testimonial, FaqItem } from '@/types';
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
      imageHint: 'futuristic man vr',
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
  {
    id: 'proj-4',
    title: 'Creative Portfolio',
    description: 'A personal portfolio website for a creative professional, designed to showcase their work in a visually stunning and interactive way. Includes a blog and case studies.',
    imageUrl: 'https://placehold.co/1280x720.png',
    imageHint: 'portfolio website creative',
    techStack: ['Framer Motion', 'React', 'GSAP', 'Contentful'],
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

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-1',
    name: 'Starter',
    price: '$499',
    description: 'For small projects & startups',
    features: [
      '3-5 Page Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form',
      '2 Rounds of Revisions',
    ],
    isFeatured: false,
  },
  {
    id: 'plan-2',
    name: 'Business',
    price: '$1299',
    description: 'For growing businesses',
    features: [
      '5-10 Page Website',
      'Custom Design & Features',
      'CMS Integration',
      'Advanced SEO',
      '4 Rounds of Revisions',
      'Priority Support',
    ],
    isFeatured: true,
  },
  {
    id: 'plan-3',
    name: 'Enterprise',
    price: "Let's Talk",
    description: 'For large-scale applications',
    features: [
      'Unlimited Pages',
      'Full-stack Application',
      'E-commerce Functionality',
      'API Integrations',
      'Ongoing Maintenance',
      'Dedicated Support',
    ],
    isFeatured: false,
  },
];

export const servicesData: Service[] = [
  {
    id: 'service-1',
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that are a joy to use.',
    features: [
        'User Persona & Journey Mapping',
        'Wireframing & Prototyping',
        'Usability Testing & Feedback',
        'Interaction Design & Micro-animations'
    ],
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'ui ux design',
  },
  {
    id: 'service-2',
    title: 'Graphic Design',
    description: 'Creating stunning visuals that communicate your brand\'s message effectively.',
    features: [
        'Logo & Brand Identity Design',
        'Marketing & Advertising Materials',
        'Social Media Graphics',
        'Illustration & Iconography'
    ],
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'graphic design abstract',
  },
  {
    id: 'service-3',
    title: 'Web Design',
    description: 'Designing and building responsive, modern websites that look great on all devices.',
    features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Custom CMS Development',
        'Website Maintenance & Support'
    ],
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'web design code',
  },
  {
    id: 'service-4',
    title: 'Branding',
    description: 'Developing a strong and consistent brand identity that resonates with your audience.',
    features: [
        'Brand Strategy & Development',
        'Visual Style Guide Creation',
        'Typography & Color Scheme Selection',
        'Brand Storytelling & Messaging'
    ],
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'branding mood board',
  },
];

export const aboutStats: Stat[] = [
    { value: 4, label: 'Years of Experience' },
    { value: 8, label: 'Completed Projects' },
    { value: 10, text: '+', label: 'Clients on Worldwide' },
];

export const testimonialsData: Testimonial[] = [
    {
        id: 'testimonial-1',
        type: 'testimonial',
        content: 'Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!',
        name: 'John Harris',
        title: 'Marketing Director',
        avatarUrl: 'https://placehold.co/96x96.png',
        avatarHint: 'man portrait',
    },
    {
        id: 'testimonial-2',
        type: 'testimonial',
        content: 'He took the time to understand our goals and delivered a design that resonated perfectly with our audience.',
        name: 'Michael Lee',
        title: 'Product Manager',
        avatarUrl: 'https://placehold.co/96x96.png',
        avatarHint: 'man portrait professional',
    },
    {
        id: 'metric-2',
        type: 'metric',
        content: 'I\'ve worked with 50+ happy clients',
        name: 'Satisfied Clients',
        metricValue: '98%',
        metricLabel: 'Satisfaction Rate',
    },
    {
        id: 'metric-1',
        type: 'metric',
        content: 'My work helped clients grow their revenue by 200%',
        name: 'Revenue Growth',
        metricValue: '200%',
        metricLabel: 'Growth',
    },
    {
        id: 'testimonial-4',
        type: 'testimonial',
        content: 'His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.',
        name: 'Sarah Johnson',
        title: 'CEO',
        avatarUrl: 'https://placehold.co/96x96.png',
        avatarHint: 'woman portrait professional',
    },
    {
        id: 'testimonial-5',
        type: 'testimonial',
        content: 'As a small business owner, I appreciated how stress-free Duncan made the process.',
        name: 'Laura Bennett',
        title: 'Small Business Owner',
        avatarUrl: 'https://placehold.co/96x96.png',
        avatarHint: 'woman portrait casual',
    },
];

export const faqData: FaqItem[] = [
    {
        id: 'faq-1',
        question: 'What services do you offer?',
        answer: 'I offer a range of services including UI/UX design, graphic design, web design, and branding. My goal is to provide a complete solution for your digital presence.',
    },
    {
        id: 'faq-2',
        question: 'How does the design process work?',
        answer: 'My process is collaborative and iterative. We start with a discovery phase to understand your needs, followed by wireframing, prototyping, design, and development. You\'ll be involved at every stage to ensure the final product meets your expectations.',
    },
    {
        id: 'faq-3',
        question: 'How long does a project usually take?',
        answer: 'The timeline for a project depends on its scope and complexity. A simple landing page might take a couple of weeks, while a full-featured web application could take several months. I provide a detailed timeline after our initial consultation.',
    },
    {
        id: 'faq-4',
        question: 'What do I need to provide before starting a project?',
        answer: 'To get started, I\'ll need a clear brief outlining your goals, target audience, and any specific features you require. Any existing brand assets, such as logos or color palettes, are also helpful.',
    },
    {
        id: 'faq-5',
        question: 'Do you offer revisions?',
        answer: 'Yes, all of my pricing plans include a set number of revision rounds. I believe in working together to get the design just right, and your feedback is a crucial part of the process.',
    },
    {
        id: 'faq-6',
        question: 'How do I get started?',
        answer: 'The first step is to get in touch! You can use the contact form on this site to send me a message. We can then schedule a free consultation to discuss your project in detail.',
    },
];
