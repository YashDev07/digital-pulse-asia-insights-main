
import React from 'react';
import { ScrollySection } from '@/components/ScrollySection';
import { cn } from '@/lib/utils';

interface ChapterIntroProps {
  chapterNumber: number;
  title: string;
  description: string;
  gradientClass: string;
  backgroundPattern?: boolean;
}

export const ChapterIntro: React.FC<ChapterIntroProps> = ({
  chapterNumber,
  title,
  description,
  gradientClass,
  backgroundPattern = true,
}) => {
  return (
    <div className="chapter-section flex flex-col items-center justify-center relative overflow-hidden">
      <div className={cn(
        'absolute inset-0 z-0',
        gradientClass
      )} />
      
      {backgroundPattern && (
        <div className="absolute inset-0 bg-digital-grid opacity-10 z-0" 
             style={{ backgroundSize: '30px 30px' }} />
      )}
      
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-xl animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-24 text-white">
        <ScrollySection>
          <div className="flex flex-col gap-6">
            <div className="text-lg font-medium tracking-wider uppercase border-b border-white/20 pb-2 inline-block">
              Chapter {chapterNumber}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
              {title}
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mt-4 text-white/90 font-light">
              {description}
            </p>
          </div>
        </ScrollySection>
      </div>
    </div>
  );
};
