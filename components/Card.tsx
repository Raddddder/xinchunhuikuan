import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Check, X } from 'lucide-react';
import { FeedbackType } from '../types';

interface CardProps {
  text: string;
  feedback: FeedbackType;
  explanation: string;
}

export const Card: React.FC<CardProps> = ({ text, feedback, explanation }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto perspective-1000">
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm rotate-2 z-20 shadow-sm" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)' }} />

      <motion.div
        className={clsx(
          "relative bg-[#fffdf0] p-8 rounded-xl shadow-xl border-2 border-ink/10 text-center min-h-[320px] flex flex-col items-center justify-center gap-4",
          "before:absolute before:inset-0 before:bg-texture before:opacity-50 before:rounded-xl"
        )}
        initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          rotate: feedback === 'incorrect' ? [-2, -5, 5, -5, 5, -2] : 0, // Shake on error
          borderColor: feedback === 'correct' ? '#8ac926' : feedback === 'incorrect' ? '#e63946' : 'rgba(44, 36, 32, 0.1)'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 text-festive-red opacity-80 text-2xl font-cute rotate-[-15deg]">福</div>
        <div className="absolute bottom-4 right-4 text-festive-red opacity-80 text-2xl font-cute rotate-[15deg]">囍</div>

        {/* Content */}
        <div className="relative z-10 w-full">
          {feedback === null ? (
            <motion.h3 
              className="text-2xl font-cute text-ink leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {text}
            </motion.h3>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <div className={clsx(
                "rounded-full p-4 mb-4",
                feedback === 'correct' ? "bg-soft-green text-white" : "bg-festive-red text-white"
              )}>
                {feedback === 'correct' ? <Check size={48} strokeWidth={4} /> : <X size={48} strokeWidth={4} />}
              </div>
              <h4 className={clsx(
                "text-2xl font-cute mb-2",
                feedback === 'correct' ? "text-soft-green" : "text-festive-red"
              )}>
                {feedback === 'correct' ? "回答正确！" : "回答错误！"}
              </h4>
              <p className="text-ink/80 font-brush text-lg leading-snug">
                {explanation}
              </p>
            </motion.div>
          )}
        </div>

        {/* Folded corner effect */}
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-paper-dark rounded-tl-lg shadow-inner z-10" 
             style={{ 
               background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)',
               borderTopLeftRadius: '10px'
             }} 
        />
      </motion.div>
    </div>
  );
};