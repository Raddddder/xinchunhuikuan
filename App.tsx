import React, { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { ResultScreen } from './components/ResultScreen';
import { GameState, AnswerRecord } from './types';
import { QUESTIONS } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [userAnswers, setUserAnswers] = useState<AnswerRecord[]>([]);

  // Randomize questions slightly or just take 5 random ones? 
  // For this demo, let's take a random subset of 5 questions or use all of them.
  // The prompt implies a loop, let's use all of them for a full challenge but shuffled.
  const [gameQuestions, setGameQuestions] = useState(QUESTIONS);

  const startGame = () => {
    // Shuffle questions
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    setGameQuestions(shuffled);
    setGameState('playing');
    setUserAnswers([]);
  };

  const endGame = (answers: AnswerRecord[]) => {
    setUserAnswers(answers);
    setGameState('result');
  };

  const restartGame = () => {
    setGameState('start');
  };

  return (
    <div className="min-h-screen w-full bg-paper bg-texture bg-fixed font-sans text-ink overflow-hidden selection:bg-festive-orange/30">
      <div className="h-full w-full max-w-lg mx-auto relative shadow-2xl min-h-screen bg-[#fdf6d8]">
        {/* Global Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-festive-red z-50"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cloud.png')] opacity-20 pointer-events-none"></div>
        
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-screen w-full"
            >
              <StartScreen onStart={startGame} />
            </motion.div>
          )}

          {gameState === 'playing' && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-screen w-full"
            >
              <GameScreen questions={gameQuestions} onEnd={endGame} />
            </motion.div>
          )}

          {gameState === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="h-screen w-full"
            >
              <ResultScreen answers={userAnswers} onRestart={restartGame} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;