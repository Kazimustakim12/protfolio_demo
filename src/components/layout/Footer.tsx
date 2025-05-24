import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Github, Linkedin, Twitter, CodeXml } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center space-x-2 text-xl font-bold text-primary">
             <CodeXml size={28} />
            <span>Portfolio Pro</span>
          </div>
          
          <div className="flex flex-col md:items-center space-y-2">
            <p className="text-sm">&copy; {currentYear} Portfolio Pro. All rights reserved.</p>
            <p className="text-xs">Built with Next.js & Tailwind CSS</p>
          </div>

          <div className="flex md:justify-end space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
