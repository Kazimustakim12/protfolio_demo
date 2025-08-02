"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, Gem, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Choice = 'rock' | 'paper' | 'scissors';
type GameResult = 'win' | 'lose' | 'draw' | null;

const choices: Choice[] = ['rock', 'paper', 'scissors'];
const ICONS = {
    rock: <Hand className="w-10 h-10 transform -rotate-90" />,
    paper: <Hand className="w-10 h-10" />,
    scissors: <Scissors className="w-10 h-10 transform -scale-x-100" />,
};

const rules: { [key in Choice]: { beats: Choice } } = {
    rock: { beats: 'scissors' },
    paper: { beats: 'rock' },
    scissors: { beats: 'paper' },
};

export function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<GameResult>(null);
    const [score, setScore] = useState({ player: 0, computer: 0 });
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePlayerChoice = (choice: Choice) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setPlayerChoice(choice);
        setResult(null);

        const computerChosen = choices[Math.floor(Math.random() * choices.length)];

        setTimeout(() => {
            setComputerChoice(computerChosen);
            determineWinner(choice, computerChosen);
            setTimeout(() => setIsAnimating(false), 1000);
        }, 1000);
    };

    const determineWinner = (player: Choice, computer: Choice) => {
        if (player === computer) {
            setResult('draw');
        } else if (rules[player].beats === computer) {
            setResult('win');
            setScore(s => ({ ...s, player: s.player + 1 }));
        } else {
            setResult('lose');
            setScore(s => ({ ...s, computer: s.computer + 1 }));
        }
    };
    
    const resetGame = () => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult(null);
        setScore({ player: 0, computer: 0 });
        setIsAnimating(false);
    }

    const ChoiceDisplay = ({ choice, title }: { choice: Choice | null, title: string }) => {
        const variants = {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
        };
        
        return (
            <div className="flex flex-col items-center gap-4">
                <h4 className="text-lg font-medium text-muted-foreground">{title}</h4>
                <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center text-foreground shadow-inner-lg">
                    <AnimatePresence mode="wait">
                        {choice ? (
                             <motion.div key={choice} variants={variants} initial="initial" animate="animate" exit="exit">
                                {ICONS[choice]}
                             </motion.div>
                        ) : (
                            <motion.div key="placeholder" variants={variants} initial="initial" animate="animate" exit="exit">
                                <Gem className="w-10 h-10 text-muted-foreground/50"/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        )
    }

    const ResultDisplay = () => {
        const messages = {
            win: 'You Win!',
            lose: 'You Lose!',
            draw: 'It\'s a Draw!',
        }
        const colors = {
            win: 'text-green-400',
            lose: 'text-red-400',
            draw: 'text-yellow-400',
        }
        if(!result) return <div className="h-10" />;
        return (
            <motion.div 
                key={result}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className={cn("text-4xl font-bold font-playfair", colors[result])}
            >
                {messages[result]}
            </motion.div>
        )
    }


    return (
        <div className="w-[480px] bg-card p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-6 border border-white/10">
            <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-bold text-foreground font-playfair">Rock, Paper, Scissors</h3>
                 <div className="text-sm font-mono bg-background px-4 py-2 rounded-lg flex gap-4">
                    <span>Player: <span className="font-bold text-accent">{score.player}</span></span>
                    <span>CPU: <span className="font-bold text-accent">{score.computer}</span></span>
                </div>
            </div>

            <div className="flex justify-around items-center w-full my-4">
                <ChoiceDisplay choice={playerChoice} title="You" />
                 <div className="text-2xl font-bold text-muted-foreground">vs</div>
                <ChoiceDisplay choice={computerChoice} title="CPU" />
            </div>

            <div className="h-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {result && <ResultDisplay />}
                </AnimatePresence>
            </div>


            <div className="flex items-center gap-4 mt-4">
                {choices.map((choice) => (
                    <Button
                        key={choice}
                        variant="outline"
                        size="lg"
                        className="w-28 h-28 flex-col gap-2 capitalize text-lg rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        onClick={() => handlePlayerChoice(choice)}
                        disabled={isAnimating}
                    >
                        {ICONS[choice]}
                        {choice}
                    </Button>
                ))}
            </div>

            <Button variant="ghost" size="sm" onClick={resetGame} className="mt-4 text-muted-foreground">
                Reset Score
            </Button>
        </div>
    );
}
