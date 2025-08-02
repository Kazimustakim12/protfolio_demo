"use client";

import { KaziLogo } from "@/components/KaziLogo";
import { navLinks, socialLinks } from "@/lib/data";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4">
            <KaziLogo className="w-8 h-8 text-primary" />
            <p className="text-sm text-muted-foreground">
              Crafting fast, modern websites for bold ideas.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold tracking-wider uppercase">Menu</h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button key={link.name} variant="link" className="p-0 justify-start" asChild>
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold tracking-wider uppercase">Social</h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                 <Button key={link.name} variant="link" className="p-0 justify-start" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KAZI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
