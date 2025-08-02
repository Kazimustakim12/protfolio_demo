"use client";

export function BackgroundGradient({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
       <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 50% 40%, hsl(var(--secondary) / 0.1), transparent 70%),
              radial-gradient(ellipse at 20% 60%, hsl(var(--primary) / 0.05), transparent 70%),
              radial-gradient(ellipse at 80% 70%, hsl(var(--accent) / 0.05), transparent 70%)
            `,
          }}
        />
        <div className="relative z-10">
            {children}
        </div>
    </div>
  );
}
