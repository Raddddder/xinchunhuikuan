import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { LittleLantern, LuckyBag, GoldenCloud } from './FestiveIcons';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-8 relative overflow-hidden">
      
      {/* Hanging Lanterns - Adjusted for new shape */}
      <motion.div 
        initial={{ y: -100 }} animate={{ y: 0 }} 
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        className="absolute -top-10 left-6 z-10"
      >
        <LittleLantern className="w-24 h-auto" />
      </motion.div>
      <motion.div 
        initial={{ y: -100 }} animate={{ y: 0 }} 
        transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
        className="absolute -top-16 right-6 z-10"
      >
        <LittleLantern className="w-20 h-auto scale-90" style={{ transformOrigin: 'top center' }} />
      </motion.div>

      {/* Golden Clouds - Background decoration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 -left-10 z-0 opacity-80"
      >
        <GoldenCloud className="w-32 h-auto" />
      </motion.div>
      
      {/* Bottom Cloud - Moved down to avoid blocking text */}
       <motion.div
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-8 -right-12 z-0 opacity-80"
      >
        <GoldenCloud className="w-40 h-auto" />
      </motion.div>

      {/* Floating Lucky Bag - Moved to bottom corner */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 right-4 opacity-90 z-20"
      >
        <LuckyBag className="w-28 h-28" />
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-4 border-festive-red shadow-festive-red/30 shadow-xl relative">
            <h1 className="text-4xl md:text-5xl font-cute text-festive-red mb-2 tracking-wide">
                春节汇款<br/>安全挑战赛
            </h1>
            <div className="w-full h-1 bg-ink/10 rounded-full my-4"></div>
            <p className="text-ink font-brush text-xl">
                防坑指南 · 汇款不迷路
            </p>
            <div className="absolute -top-6 -right-6 bg-festive-orange text-white rounded-full p-3 shadow-lg rotate-12">
                <Sparkles size={24} />
            </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10"
      >
        <button
          onClick={onStart}
          className="group relative bg-festive-red text-white text-2xl font-cute px-12 py-5 rounded-full shadow-xl border-b-4 border-red-900 active:border-b-0 active:translate-y-1 transition-all overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            开始挑战 <Sparkles size={20} className="animate-pulse"/>
          </span>
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </motion.div>

      <p className="text-ink/60 font-brush text-lg mt-8 z-10 relative">
        挑战你的汇款安全知识，赢取“大明白”称号！
      </p>
    </div>
  );
};