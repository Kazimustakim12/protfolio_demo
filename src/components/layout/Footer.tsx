"use client";

import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-6 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mustakim Kazi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
