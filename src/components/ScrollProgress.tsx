
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/use-scroll-position';

interface ScrollProgressProps {
  className?: string;
  height?: string;
  colorClass?: string;
  showPercentage?: boolean;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ 
  className,
  height = "h-1.5",
  colorClass = "bg-gradient-to-r from-teal-600 via-teal-400 to-yellow-400",
  showPercentage = false
}) => {
  const { scrollPercent } = useScrollPosition();
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={cn(
        "relative bg-grey-200/50 backdrop-blur-sm",
        height,
        className
      )}>
        <div 
          className={cn(
            "h-full transition-all duration-150 ease-out",
            colorClass
          )}
          style={{ width: `${scrollPercent * 100}%` }}
        />
        
        {showPercentage && (
          <div 
            className="absolute top-0 right-0 bg-white text-xs font-semibold text-grey-700 px-2 py-1 rounded transform translate-x-1/2 translate-y-full shadow"
            style={{ left: `${scrollPercent * 100}%` }}
          >
            {Math.round(scrollPercent * 100)}%
          </div>
        )}
      </div>
    </div>
  );
};
