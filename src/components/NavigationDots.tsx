
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavigationDotsProps {
  totalChapters: number;
  activeChapter: number;
  onChange: (chapter: number) => void;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({ 
  totalChapters, 
  activeChapter, 
  onChange 
}) => {
  return (
    <div className="chapter-nav">
      {Array.from({ length: totalChapters }).map((_, index) => (
        <div 
          key={index}
          className={cn(
            "chapter-nav-item cursor-pointer",
            activeChapter === index + 1 && "active"
          )}
          onClick={() => onChange(index + 1)}
        />
      ))}
    </div>
  );
};
