import React from 'react';
import { clsx } from 'clsx';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

// 小灯笼 (Festive Lantern) - Based on Reference Image 1
export const LittleLantern: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 120 160" className={clsx("drop-shadow-md", className)} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rope */}
    <path d="M60 0 V20" stroke="#3E2723" strokeWidth="3"/>

    {/* Top Cap */}
    <rect x="40" y="20" width="40" height="10" rx="2" fill="#FFD54F" stroke="#3E2723" strokeWidth="3"/>

    {/* Lantern Body */}
    <ellipse cx="60" cy="70" rx="50" ry="40" fill="#E64A19" stroke="#3E2723" strokeWidth="3"/>
    
    {/* Ribs */}
    <path d="M60 30 Q80 70 60 110" stroke="#FFCC80" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M60 30 Q40 70 60 110" stroke="#FFCC80" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M35 38 Q20 70 35 102" stroke="#FFCC80" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M85 38 Q100 70 85 102" stroke="#FFCC80" strokeWidth="2" strokeOpacity="0.5"/>

    {/* Flower Pattern (Center) */}
    <circle cx="60" cy="70" r="5" fill="#FFD54F"/>
    <circle cx="60" cy="60" r="4" fill="#FFCC80" stroke="#E64A19" strokeWidth="1"/>
    <circle cx="60" cy="80" r="4" fill="#FFCC80" stroke="#E64A19" strokeWidth="1"/>
    <circle cx="50" cy="70" r="4" fill="#FFCC80" stroke="#E64A19" strokeWidth="1"/>
    <circle cx="70" cy="70" r="4" fill="#FFCC80" stroke="#E64A19" strokeWidth="1"/>
    
    {/* Flower Pattern (Side) */}
    <path d="M25 80 Q30 70 40 80 Q35 90 25 80" fill="#FFCC80" opacity="0.4"/>
    <path d="M95 80 Q90 70 80 80 Q85 90 95 80" fill="#FFCC80" opacity="0.4"/>

    {/* Bottom Cap */}
    <rect x="45" y="110" width="30" height="8" rx="2" fill="#FFD54F" stroke="#3E2723" strokeWidth="3"/>

    {/* Tassel */}
    <g stroke="#3E2723" strokeWidth="3" strokeLinecap="round">
      <path d="M60 118 V125"/>
      <circle cx="60" cy="130" r="5" fill="#FFD54F" stroke="#3E2723"/>
      {/* Tassel Threads */}
      <path d="M60 135 V155" stroke="#E64A19" strokeWidth="4"/>
      <path d="M55 133 Q50 145 52 153" stroke="#E64A19" strokeWidth="3"/>
      <path d="M65 133 Q70 145 68 153" stroke="#E64A19" strokeWidth="3"/>
    </g>
  </svg>
);

// 小福袋 (Lucky Money Bags) - Based on Reference Image 2
export const LuckyBag: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 150 150" className={clsx("drop-shadow-md", className)} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10, 20)">
      {/* Back Bag (Right) */}
      <g transform="translate(60, 0) rotate(10)">
        <path d="M10 40 Q-5 80 15 90 Q35 95 50 80 Q60 60 50 40" 
              fill="#D32F2F" stroke="#3E2723" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M15 40 L50 40 L55 30 Q45 25 32 25 Q20 25 10 30 L15 40" 
              fill="#D32F2F" stroke="#3E2723" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M12 40 Q32 45 53 40" stroke="#FFD54F" strokeWidth="4" strokeLinecap="round"/>
      </g>

      {/* Front Bag (Main) */}
      <g transform="translate(10, 10)">
        {/* Bag Body */}
        <path d="M5 50 Q-10 100 30 110 Q70 115 85 90 Q95 60 75 50" 
              fill="#E53935" stroke="#3E2723" strokeWidth="4" strokeLinejoin="round"/>
        
        {/* Top Ruffles */}
        <path d="M15 50 L5 35 Q15 25 30 30 Q45 20 55 30 Q70 25 75 40 L65 50" 
              fill="#E53935" stroke="#3E2723" strokeWidth="4" strokeLinejoin="round"/>

        {/* Gold Tie */}
        <path d="M12 50 Q40 58 68 50" stroke="#FFD54F" strokeWidth="6" strokeLinecap="round"/>

        {/* 'Fu' Character Display */}
        <g transform="translate(38, 75) rotate(-5)">
            <circle cx="0" cy="0" r="20" fill="#FFD54F" stroke="#E65100" strokeWidth="1"/>
            <text x="0" y="8" fontSize="28" fill="#BF360C" textAnchor="middle" fontWeight="bold" style={{fontFamily: '"Ma Shan Zheng", cursive'}}>福</text>
        </g>
      </g>

      {/* Coins */}
      <g transform="translate(0, 0)">
        <circle cx="15" cy="20" r="10" fill="#FFD54F" stroke="#3E2723" strokeWidth="3"/>
        <rect x="10" y="15" width="10" height="10" stroke="#3E2723" strokeWidth="2" fill="none"/>
      </g>
      <g transform="translate(90, 10)">
        <circle cx="15" cy="15" r="8" fill="#FFD54F" stroke="#3E2723" strokeWidth="3"/>
        <rect x="11" y="11" width="8" height="8" stroke="#3E2723" strokeWidth="2" fill="none"/>
      </g>
    </g>
  </svg>
);

// 金祥云 (Golden Cloud) - Based on Reference Image 4
export const GoldenCloud: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 150 80" className={clsx("drop-shadow-sm", className)} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
     <g transform="translate(5,5)">
        {/* Main Swirl Center */}
        <path d="M60 50 Q50 30 65 25 Q80 20 90 35 Q100 20 115 25 Q130 30 120 50 Q135 45 140 55 Q135 65 110 60 Q90 55 75 60 Q60 65 40 60 Q20 65 10 50 Q5 35 20 30 Q35 25 50 40" 
              fill="#FFD54F" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Inner Detail Line */}
        <path d="M70 35 Q80 30 85 40" stroke="#F57F17" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 45 Q30 40 35 35" stroke="#F57F17" strokeWidth="3" strokeLinecap="round"/>

        {/* Sparkle */}
        <path d="M20 70 L23 75 L28 75 L24 78 L26 83 L20 80 L14 83 L16 78 L12 75 L17 75 Z" fill="#F57F17" transform="scale(0.8)"/>
     </g>
  </svg>
);