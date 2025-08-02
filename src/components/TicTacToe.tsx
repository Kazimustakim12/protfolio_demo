"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X, Circle, RotateCcw } from 'lucide-react';

type Player = 'X' | 'O';
type Square = Player | null;

const SquareComponent = ({ value, onClick }: { value: Square, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
        "w-32 h-32 flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out",
        "bg-card/50 hover:bg-card/80 text-foreground",
    )}
    aria-label={`Square ${value ? `with ${value}` : 'empty'}`}
  >
    {value === 'X' && <X className="w-16 h-16 text-primary" />}
    {value === 'O' && <Circle className="w-16 h-16 text-secondary" />}
  </button>
);

const calculateWinner = (squares: Square[]): Square | null => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export function TicTacToe() {
  const [board, setBoard] = useState<Square[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null);
  const gameStatus = winner ? `${winner} Wins!` : isBoardFull ? "It's a Draw!" : null;

  const handlePlayerMove = (index: number) => {
    if (board[index] || winner || !isPlayerTurn) {
        return;
    }
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };
  
  const computerMove = (currentBoard: Square[]) => {
      const availableMoves = currentBoard
        .map((square, index) => (square === null ? index : null))
        .filter((val): val is number => val !== null);
      
      // 1. Check for a winning move
      for (let move of availableMoves) {
          const nextBoard = [...currentBoard];
          nextBoard[move] = 'O';
          if (calculateWinner(nextBoard) === 'O') {
              return move;
          }
      }

      // 2. Block player's winning move
      for (let move of availableMoves) {
          const nextBoard = [...currentBoard];
          nextBoard[move] = 'X';
          if (calculateWinner(nextBoard) === 'X') {
              return move;
          }
      }

      // 3. Take a random available square
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      return availableMoves[randomIndex];
  }

  useEffect(() => {
    if (!isPlayerTurn && !winner && !isBoardFull) {
        const timeout = setTimeout(() => {
            const newBoard = [...board];
            const move = computerMove(newBoard);
            if(move !== undefined) {
                newBoard[move] = 'O';
                setBoard(newBoard);
                setIsPlayerTurn(true);
            }
        }, 800);
        return () => clearTimeout(timeout);
    }
  }, [isPlayerTurn, board, winner, isBoardFull]);


  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  return (
    <div className="w-[450px] h-[450px] bg-card p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4 border border-white/10">
        <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-bold text-foreground font-serif">Tic-Tac-Toe</h3>
            <div className="h-10 px-4 py-2 flex items-center justify-center rounded-lg bg-background text-lg font-mono">
                {gameStatus ? (
                    <span className={cn(winner === 'X' ? 'text-primary' : 'text-secondary')}>{gameStatus}</span>
                ) : (
                    <span>{isPlayerTurn ? "Your Turn (X)" : "Computer's Turn (O)"}</span>
                )}
            </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
            {board.map((square, index) => (
                <SquareComponent key={index} value={square} onClick={() => handlePlayerMove(index)} />
            ))}
        </div>

        <Button onClick={resetGame} variant="outline" className="w-full">
            <RotateCcw className="mr-2 h-4 w-4"/>
            Play Again
        </Button>
    </div>
  );
}
