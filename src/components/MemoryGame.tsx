"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GameState = 'waiting' | 'sequence' | 'playing' | 'gameover';

const COLORS = ['green', 'red', 'yellow', 'blue'];
const PAD_CLASSES: { [key: string]: string } = {
  green: 'bg-green-500/60 hover:bg-green-500/90',
  red: 'bg-red-500/60 hover:bg-red-500/90',
  yellow: 'bg-yellow-500/60 hover:bg-yellow-500/90',
  blue: 'bg-blue-500/60 hover:bg-blue-500/90',
};
const ACTIVE_PAD_CLASSES: { [key: string]: string } = {
    green: 'bg-green-500 scale-105 shadow-[0_0_20px_5px_rgba(52,211,153,0.7)]',
    red: 'bg-red-500 scale-105 shadow-[0_0_20px_5px_rgba(239,68,68,0.7)]',
    yellow: 'bg-yellow-500 scale-105 shadow-[0_0_20px_5px_rgba(234,179,8,0.7)]',
    blue: 'bg-blue-500 scale-105 shadow-[0_0_20px_5px_rgba(59,130,246,0.7)]',
};


export function MemoryGame() {
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [sequence, setSequence] = useState<string[]>([]);
  const [playerSequence, setPlayerSequence] = useState<string[]>([]);
  const [activePad, setActivePad] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const startNewGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setScore(0);
    setGameState('sequence');
  };

  useEffect(() => {
    if (gameState === 'sequence') {
      const nextColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      const newSequence = [...sequence, nextColor];
      setSequence(newSequence);
      setPlayerSequence([]);
      
      setTimeout(() => showSequence(newSequence), 800);
    }
  }, [gameState, sequence]);
  
  const showSequence = (seq: string[]) => {
      let i = 0;
      const interval = setInterval(() => {
          if(i < seq.length) {
              setActivePad(seq[i]);
              setTimeout(() => setActivePad(null), 400);
              i++;
          } else {
              clearInterval(interval);
              setGameState('playing');
          }
      }, 800);
  }

  const handlePadClick = (color: string) => {
    if (gameState !== 'playing') return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    // Check if the current move is correct
    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      setGameState('gameover');
      return;
    }

    // Check if the sequence is complete
    if (newPlayerSequence.length === sequence.length) {
      setScore(score + 1);
      setGameState('sequence');
    }
  };

  const getStatusMessage = () => {
    switch (gameState) {
        case 'waiting': return 'Click Start to Play';
        case 'sequence': return 'Watch carefully...';
        case 'playing': return 'Your turn!';
        case 'gameover': return 'Game Over! Click to Restart';
        default: return '';
    }
  }

  return (
    <div className="w-[450px] h-[450px] bg-card p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-between w-full">
            <h3 className="text-xl font-bold text-foreground font-playfair">Memory Game</h3>
            <div className="text-lg font-mono bg-background px-4 py-2 rounded-lg">
                Score: <span className="font-bold text-accent">{score}</span>
            </div>
        </div>
      
        <div className="grid grid-cols-2 gap-4 w-full h-full">
            {COLORS.map((color) => (
            <button
                key={color}
                onClick={() => handlePadClick(color)}
                disabled={gameState !== 'playing'}
                className={cn(
                    'w-full h-full rounded-xl transition-all duration-200 ease-in-out transform focus:outline-none',
                    PAD_CLASSES[color],
                    activePad === color && ACTIVE_PAD_CLASSES[color],
                    gameState !== 'playing' && 'cursor-not-allowed'
                )}
                aria-label={`Pad for ${color}`}
            />
            ))}
        </div>

        <div className="w-full">
            {gameState === 'waiting' || gameState === 'gameover' ? (
                <Button onClick={startNewGame} className="w-full" size="lg">
                    {gameState === 'waiting' ? 'Start Game' : 'Restart Game'}
                </Button>
            ) : (
                <div className="text-center h-12 flex items-center justify-center text-muted-foreground font-medium">
                    {getStatusMessage()}
                </div>
            )}
        </div>
    </div>
  );
}
