"use client";

import React from 'react';

export function AnimatedCoder() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      <style jsx>{`
        .glow {
          filter: drop-shadow(0 0 8px hsl(var(--accent) / 0.8));
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes typing {
          0% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        .float { animation: float 6s ease-in-out infinite; }
        .fade-in { animation: fadeIn 2s ease-out; }
        .pulse { animation: pulse 2.5s ease-in-out infinite; }
        .typing-1 { animation: typing 0.8s ease-in-out infinite 0.1s; }
        .typing-2 { animation: typing 0.8s ease-in-out infinite 0.3s; }
        .typing-3 { animation: typing 0.8s ease-in-out infinite 0.2s; }
      `}</style>
      <svg viewBox="0 0 200 200" className="w-full h-full fade-in" preserveAspectRatio="xMidYMid meet">
        {/* Main floating island */}
        <g className="float">
          <path d="M 50,130 Q 100,160 150,130 T 50,130" fill="hsl(var(--card))" className="glow" />
          <path d="M 50,130 L 50,140 Q 100,170 150,140 L 150,130 Q 100,160 50,130" fill="hsl(var(--border))" />
          
          {/* Person */}
          <g transform="translate(0, -25)">
            <rect x="92" y="90" width="16" height="25" rx="8" fill="hsl(var(--muted-foreground))" />
            <circle cx="100" cy="80" r="10" fill="hsl(var(--muted-foreground))" />
            {/* Screen glow on person */}
            <path d="M92 80 a 12 12 0 0 1 0 25" fill="hsl(var(--accent))" className="pulse" style={{ opacity: 0.3 }} />
          </g>

          {/* Laptop */}
          <g transform="translate(0, -5)">
             {/* keyboard */}
            <path d="M 70,125 l 60,0 l 10,8 l -80,-2 z" fill="hsl(var(--border))"/>
             {/* screen */}
            <rect x="78" y="85" width="44" height="30" rx="3" fill="hsl(var(--border))" />
            <rect x="80" y="87" width="40" height="26" rx="2" fill="hsl(var(--background))" />
            <rect x="80" y="87" width="40" height="26" rx="2" fill="hsl(var(--accent))" className="pulse" style={{ opacity: 0.1 }} />
            
            {/* Code on screen */}
            <g fill="hsl(var(--accent))">
                <rect x="85" y="92" width="10" height="2" rx="1" className="typing-1"/>
                <rect x="100" y="92" width="15" height="2" rx="1" className="typing-1"/>
                <rect x="85" y="98" width="25" height="2" rx="1" className="typing-2"/>
                <rect x="85" y="104" width="20" height="2" rx="1" className="typing-3"/>
            </g>
          </g>
        </g>

        {/* Floating elements */}
        <g fill="hsl(var(--accent))" className="glow" opacity="0.7">
            <circle cx="40" cy="80" r="3" className="float pulse" style={{ animationDelay: '1s' }} />
            <rect x="160" y="100" width="6" height="6" rx="2" className="float pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M 50 170 l 5 5 l -5 5 Z" className="float pulse" style={{ animationDelay: '1.5s' }} />
        </g>
      </svg>
    </div>
  );
}
