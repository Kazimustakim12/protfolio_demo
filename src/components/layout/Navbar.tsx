"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, CodeXml } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = '';
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) { // Adjusted offset for better accuracy
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkVariants = {
    hover: { scale: 1.1, color: "hsl(var(--primary))" },
    active: { color: "hsl(var(--primary))", fontWeight: 600 },
    inactive: { color: "hsl(var(--foreground))" }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors">
            <CodeXml size={32} />
            <span>Portfolio Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={linkVariants}
                whileHover="hover"
                animate={activeSection === link.href.substring(1) ? "active" : "inactive"}
                className="text-sm font-medium transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <a href="#contact">
            <Button variant="default" className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground">
              <Briefcase size={18} />
              Hire Me
            </Button>
          </a>
          

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? "text-primary font-semibold" : "text-foreground"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    <Button variant="default" className="w-full bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground">
                       Hire Me
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
