import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card';
import { Question, AnswerRecord, FeedbackType } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LittleLantern } from './FestiveIcons';

interface GameScreenProps {
  questions: Question[];
  onEnd: (answers: AnswerRecord[]) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ questions, onEnd }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [feedback, setFeedback] = useState<FeedbackType>(null);
  const [isLocked, setIsLocked] = useState(false);

  const currentQ = questions[currentIdx];
  const progress = ((currentIdx) / questions.length) * 100;

  const handleAnswer = (userSaysTrue: boolean) => {
    if (isLocked) return;
    setIsLocked(true);

    const isCorrect = userSaysTrue === currentQ.isTrue;
    
    // Play sound effect logic could go here
    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#8ac926', '#ffbd00']
      });
    }

    setFeedback(isCorrect ? 'correct' : 'incorrect');

    const record: AnswerRecord = {
      questionId: currentQ.id,
      questionText: currentQ.text,
      isCorrect,
      userChoice: userSaysTrue,
      explanation: currentQ.explanation
    };

    setAnswers(prev => [...prev, record]);

    // Auto advance delay
    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setFeedback(null);
        setCurrentIdx(prev => prev + 1);
        setIsLocked(false);
      } else {
        onEnd([...answers, record]);
      }
    }, 2200); // 2.2s to read the explanation
  };

  return (
    <div className="flex flex-col h-full w-full max-w-md mx-auto p-4 relative">
      
      {/* Decorative Lantern top right */}
      <motion.div 
        initial={{ y: -50 }} animate={{ y: 0 }}
        className="absolute -top-2 -right-2 z-0 opacity-80"
      >
        <LittleLantern className="w-16 h-auto" />
      </motion.div>

      {/* Progress Bar */}
      <div className="w-full h-4 bg-white/50 rounded-full mb-6 border-2 border-ink/10 overflow-hidden relative z-10">
        <motion.div 
          className="h-full bg-festive-orange rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
        <div className="absolute right-2 top-0 text-[10px] text-ink/60 font-bold leading-4">
          {currentIdx + 1} / {questions.length}
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex flex-col justify-center items-center py-4 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ x: 300, opacity: 0, rotate: 10 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            exit={{ x: -300, opacity: 0, rotate: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="w-full"
          >
            <Card 
              text={currentQ.text} 
              feedback={feedback}
              explanation={currentQ.explanation}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-auto mb-6 grid grid-cols-2 gap-6 w-full z-10">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer(true)}
          disabled={isLocked}
          className="flex flex-col items-center justify-center h-24 bg-festive-orange rounded-2xl shadow-[0_6px_0_rgb(180,83,9)] border-2 border-orange-700 active:shadow-none active:translate-y-[6px] transition-all disabled:opacity-50 disabled:grayscale"
        >
          <CheckCircle2 className="text-white mb-1" size={32} />
          <span className="text-white font-cute text-xl">这是实话</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer(false)}
          disabled={isLocked}
          className="flex flex-col items-center justify-center h-24 bg-ink rounded-2xl shadow-[0_6px_0_rgb(20,20,20)] border-2 border-black active:shadow-none active:translate-y-[6px] transition-all disabled:opacity-50 disabled:grayscale"
        >
          <XCircle className="text-white mb-1" size={32} />
          <span className="text-white font-cute text-xl">这是瞎话</span>
        </motion.button>
      </div>

    </div>
  );
};