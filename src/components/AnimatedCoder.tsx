"use client";

import React from 'react';

export function AnimatedCoder() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      <style jsx>{`
        .glow {
          filter: drop-shadow(0 0 10px hsl(var(--accent) / 0.7));
        }
        .soft-glow {
            filter: drop-shadow(0 0 15px hsl(var(--primary) / 0.1));
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes orbit-reverse {
          from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          to { transform: rotate(-360deg) translateX(150px) rotate(360deg); }
        }
        @keyframes draw-line {
            to {
                stroke-dashoffset: 0;
            }
        }

        .fade-in { animation: fadeIn 2s ease-out forwards; }
        .pulse { animation: pulse 4s ease-in-out infinite; }
        .orbit { animation: orbit 20s linear infinite; }
        .orbit-reverse { animation: orbit-reverse 30s linear infinite; }
        .line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-line 3s ease-out forwards;
        }
      `}</style>
      <svg viewBox="0 0 400 400" className="w-full h-full fade-in" preserveAspectRatio="xMidYMid meet">
        <defs>
            <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Background Grid */}
        <g opacity="0.1" className="soft-glow">
            <path d="M 50 0 V 400 M 100 0 V 400 M 150 0 V 400 M 200 0 V 400 M 250 0 V 400 M 300 0 V 400 M 350 0 V 400" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
            <path d="M 0 50 H 400 M 0 100 H 400 M 0 150 H 400 M 0 200 H 400 M 0 250 H 400 M 0 300 H 400 M 0 350 H 400" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
        </g>

        {/* Central Core */}
        <g transform="translate(200, 200)">
          <circle cx="0" cy="0" r="25" fill="hsl(var(--accent) / 0.2)" className="glow pulse" />
          <circle cx="0" cy="0" r="20" fill="hsl(var(--accent))" className="glow pulse" style={{animationDelay: '0.2s'}}/>
          
          {/* Orbiting Satellites */}
          <g className="orbit">
              <circle cx="0" cy="0" r="8" fill="hsl(var(--primary))" className="soft-glow" />
          </g>
          <g className="orbit-reverse" style={{animationDelay: '-5s'}}>
              <rect x="-7.5" y="-7.5" width="15" height="15" rx="4" fill="hsl(var(--primary))" className="soft-glow" />
          </g>
           <g className="orbit" style={{animationDuration: '15s', animationDelay: '-10s'}}>
              <path d="M0,-10 L10,10 L-10,10 Z" fill="hsl(var(--primary))" className="soft-glow" transform="translate(0, 50) scale(0.8)" />
          </g>

           {/* Connecting Lines */}
            <line x1="0" y1="0" x2="-86.6" y2="50" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.5" className="line" style={{animationDelay: '1s'}}/>
            <line x1="0" y1="0" x2="130" y2="-75" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.5" className="line" style={{animationDelay: '1.5s'}}/>
            <line x1="0" y1="0" x2="-20" y2="-98" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.5" className="line" style={{animationDelay: '2s'}}/>
        </g>
      </svg>
    </div>
  );
}
