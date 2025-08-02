"use client";

import { socialLinks } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 mt-24 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold font-playfair">
                KAZI
            </Link>
            <p className="text-sm text-muted-foreground mt-2">Creative Developer</p>
        </div>
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Mustakim Kazi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
