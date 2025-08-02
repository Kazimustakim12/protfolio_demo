import type { Project, Skill, SocialLinkItem, PricingPlan, Service, Stat } from '@/types';
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
    { value: 4, text: '', label: 'Years of Experience' },
    { value: 7, text: '', label: 'Completed Projects' },
    { value: 15, text: '+', label: 'Clients on Worldwide' },
];
