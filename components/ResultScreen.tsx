import React, { useRef, useState } from 'react';
import { AnswerRecord } from '../types';
import { getTitle } from '../constants';
import { RotateCcw, Download, Check, X } from 'lucide-react';
import html2canvas from 'html2canvas';
import { LuckyBag, LittleLantern, GoldenCloud } from './FestiveIcons';

interface ResultScreenProps {
  answers: AnswerRecord[];
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ answers, onRestart }) => {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const total = answers.length;
  const title = getTitle(correctCount, total);
  const posterRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePoster = async () => {
    if (!posterRef.current || isGenerating) return;
    setIsGenerating(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(posterRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fdf6d8',
      });

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `春节汇款挑战-马年版-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Poster generation failed", err);
      alert("海报生成失败，请截屏分享！");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden w-full max-w-md mx-auto">
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 pb-24">
        
        {/* The Poster Container */}
        <div ref={posterRef} className="bg-paper p-6 rounded-none flex flex-col items-center relative overflow-hidden">
          
          {/* Decorations on Poster */}
          <div className="absolute top-0 right-2 w-16"><LittleLantern /></div>
          <div className="absolute top-0 left-2 w-16"><LittleLantern /></div>
          <div className="absolute top-16 left-0 w-20 opacity-30"><GoldenCloud /></div>
          <div className="absolute bottom-20 right-0 w-24 opacity-30"><GoldenCloud /></div>
          
          {/* Header */}
          <div className="bg-festive-red text-white px-6 py-2 rounded-full font-cute text-xl mb-6 shadow-md border-2 border-red-900 z-10 mt-4">
             汇款安全成绩单
          </div>

          <div className="text-center mb-8 relative z-10 w-full">
            <h2 className="text-ink font-brush text-2xl mb-2">我的战绩</h2>
            
            <div className="relative inline-block">
              <div className="text-6xl font-cute text-festive-orange drop-shadow-sm">
                {correctCount}<span className="text-3xl text-ink">/{total}</span>
              </div>
            </div>

            <div className="mt-4 inline-block bg-white/60 px-6 py-3 border-2 border-ink rounded-lg transform -rotate-2 relative">
              <span className="text-festive-red font-cute text-2xl">{title}</span>
              {/* Lucky Bag decoration */}
              <div className="absolute -left-8 -top-6 transform -rotate-12">
                <LuckyBag className="w-16 h-16" />
              </div>
            </div>
          </div>

          {/* List of Key Q&A for sharing */}
          <div className="w-full space-y-4 z-10">
             <div className="w-full border-b-2 border-dashed border-ink/20 mb-4"></div>
             <p className="text-center font-brush text-ink/60 mb-2">马年防坑回顾：</p>
             
             {answers.map((ans, idx) => (
               <div key={idx} className="flex gap-3 text-left w-full bg-white/50 p-3 rounded-lg border border-ink/5">
                 <div className="mt-1 min-w-[24px]">
                   {ans.isCorrect ? (
                     <Check className="text-soft-green" size={20} strokeWidth={3} />
                   ) : (
                     <X className="text-festive-red" size={20} strokeWidth={3} />
                   )}
                 </div>
                 <div className="flex-1">
                   <p className="text-sm font-bold text-ink mb-1 font-cute leading-tight">{ans.questionText}</p>
                   <div className="flex gap-2 text-xs">
                      <span className="text-ink/50 bg-ink/5 px-1.5 py-0.5 rounded">我选: {ans.userChoice ? '实话' : '瞎话'}</span>
                      <span className={`px-1.5 py-0.5 rounded ${ans.isCorrect ? 'text-soft-green bg-green-50' : 'text-festive-red bg-red-50'}`}>
                        {ans.isCorrect ? '√ 正确' : '× 错误'}
                      </span>
                   </div>
                 </div>
               </div>
             ))}

             <div className="mt-8 flex flex-col items-center gap-2">
                <div className="w-24 h-24 bg-white border-4 border-ink rounded-xl flex items-center justify-center relative">
                    {/* Placeholder for QR Code */}
                    <div className="text-center p-2">
                        <div className="w-16 h-16 bg-ink/5 text-ink flex items-center justify-center text-xs p-1">
                          <span className="font-cute">二维码</span>
                        </div>
                    </div>
                    {/* Corner decoration */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-festive-red rounded-full flex items-center justify-center border-2 border-white text-white text-xs font-bold">
                      福
                    </div>
                </div>
                <p className="text-xs text-ink/50 font-brush">扫码挑战，马年汇款不踩坑！</p>
             </div>
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-ink/10 flex gap-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50">
        <button 
          onClick={onRestart}
          className="flex-1 bg-ink text-white font-cute text-lg py-3 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
          <RotateCcw size={20} /> 再玩一次
        </button>
        <button 
          onClick={handleGeneratePoster}
          disabled={isGenerating}
          className="flex-1 bg-festive-red text-white font-cute text-lg py-3 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isGenerating ? (
            "生成中..."
          ) : (
            <>
              <Download size={20} /> 保存海报
            </>
          )}
        </button>
      </div>

    </div>
  );
};