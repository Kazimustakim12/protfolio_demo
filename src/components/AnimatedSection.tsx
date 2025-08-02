"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const clipMask = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current || !clipMask.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'center center',
        end: '+=1000 center',
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(clipMask.current, {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  }, { scope: container });

  return (
    <div ref={container} className="animated-section">
      <div ref={clipMask} className="clip-mask"></div>
      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  );
}
