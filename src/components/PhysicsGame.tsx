"use client"

import React, { useRef, useEffect } from 'react'
import Matter from 'matter-js'
import { Button } from '@/components/ui/button';

export function PhysicsGame() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create());
  const hasInitialized = useRef(false);

  const setup = () => {
    const engine = engineRef.current;
    const world = engine.world;
    if (!sceneRef.current) return;

    const canvasWidth = sceneRef.current.clientWidth;
    const canvasHeight = sceneRef.current.clientHeight;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    // Ground
    const ground = Matter.Bodies.rectangle(canvasWidth / 2, canvasHeight - 25, canvasWidth, 50, { 
      isStatic: true,
      render: { fillStyle: 'hsl(var(--muted))' }
    });

    // Box stack
    const boxStack = Matter.Composites.stack(canvasWidth * 0.65, canvasHeight - 250, 4, 4, 0, 0, (x, y) => {
        return Matter.Bodies.rectangle(x, y, 40, 40, {
            render: { fillStyle: 'hsl(var(--card))', strokeStyle: 'hsl(var(--accent))', lineWidth: 2 }
        });
    });

    // Slingshot elements
    const rock = Matter.Bodies.polygon(canvasWidth * 0.2, canvasHeight - 150, 8, 25, {
        density: 0.004,
        render: { fillStyle: 'hsl(var(--primary))' }
    });
    const anchor = { x: canvasWidth * 0.2, y: canvasHeight - 150 };
    const elastic = Matter.Constraint.create({
        pointA: anchor,
        bodyB: rock,
        stiffness: 0.05,
        length: 10,
        render: {
            lineWidth: 3,
            strokeStyle: 'hsl(var(--accent))'
        }
    });

    // Mouse constraint for aiming
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    let firing = false;
    Matter.Events.on(mouseConstraint, 'enddrag', (event) => {
      if(event.body === rock) {
        firing = true;
        Matter.Body.setStatic(rock, false);
      }
    });

    Matter.Events.on(engine, 'afterUpdate', () => {
      if (firing && Math.abs(rock.position.x - anchor.x) < 20 && Math.abs(rock.position.y - anchor.y) < 20) {
        Matter.Body.setPosition(rock, anchor);
        Matter.Body.setVelocity(rock, { x: 0, y: 0 });
        Matter.Body.setStatic(rock, true);
        firing = false;
      }
    });

    Matter.World.add(world, [ground, boxStack, rock, elastic, mouseConstraint]);
    
    Matter.Render.run(render);
    Matter.Runner.run(Matter.Runner.create(), engine);
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && sceneRef.current && !hasInitialized.current) {
        setup();
        hasInitialized.current = true;
    }

    return () => {
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
        const renderer = sceneRef.current?.querySelector('canvas');
        if (renderer) {
            renderer.remove();
        }
      }
    };
  }, []);
  
  const handleReset = () => {
    // A simple reset by reloading might be easiest here, or re-running setup
    if(engineRef.current && sceneRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
         const renderer = sceneRef.current?.querySelector('canvas');
        if (renderer) {
            renderer.remove();
        }
        setup();
    }
  }

  return (
    <div className="w-[500px] h-[450px] bg-card/50 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4 p-4 border border-white/10">
        <div ref={sceneRef} className="w-full h-full rounded-lg overflow-hidden relative">
           <div className="absolute top-2 left-2 text-xs text-muted-foreground p-2 rounded-md bg-background/50">
                Drag and release the ball to fire!
            </div>
        </div>
        <Button onClick={handleReset} variant="outline" size="sm">Reset</Button>
    </div>
  )
}
