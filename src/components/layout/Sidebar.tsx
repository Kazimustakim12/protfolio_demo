"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { navLinks, socialLinks } from '@/lib/data'; // Assuming socialLinks will be added to data.ts
import type { NavLinkItem, SocialLinkItem } from '@/types'; // Assuming types will be updated/created

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-sidebar-background text-sidebar-foreground flex flex-col p-6 border-r border-sidebar-border fixed top-0 left-0 h-full">
      <div className="mb-8 text-center">
        <Avatar className="w-20 h-20 mx-auto mb-3 ring-2 ring-primary ring-offset-2 ring-offset-sidebar-background">
          <AvatarImage src="https://placehold.co/100x100.png" alt="Nicole Harper" data-ai-hint="woman portrait" />
          <AvatarFallback>NH</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold">Nicole Harper</h1>
        <p className="text-sm text-muted-foreground">Creative Designer</p>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2">
          {navLinks.map((link: NavLinkItem) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            const IconComponent = link.icon;
            return (
              <li key={link.name}>
                <Link href={link.href} legacyBehavior>
                  <a
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                      ${isActive
                        ? 'bg-sidebar-active-background text-sidebar-active-foreground shadow-sm'
                        : 'hover:bg-sidebar-active-background/50 hover:text-sidebar-active-foreground'
                      }`}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                    <span>{link.name}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto">
        <ul className="space-y-3">
          {socialLinks.map((social: SocialLinkItem) => {
             const IconComponent = social.icon;
            return (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-primary transition-colors text-muted-foreground"
                aria-label={social.name}
              >
                {IconComponent && <IconComponent className="h-5 w-5" />}
                <span>{social.name}</span>
              </a>
            </li>
          )})}
        </ul>
      </div>
    </aside>
  );
}
