
import React from 'react';
import { ScrollySection } from '@/components/ScrollySection';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

interface QuoteProps {
  text: string;
  author: string;
  role?: string;
  className?: string;
  accentColor?: string;
}

export const Quote: React.FC<QuoteProps> = ({ 
  text, 
  author, 
  role,
  className,
  accentColor = 'border-l-teal-600'
}) => {
  return (
    <ScrollySection className={cn(
      "quote-bubble backdrop-blur-sm bg-white/90 border-l-4", 
      accentColor,
      className
    )}>
      <div className="relative">
        <div className="absolute -top-3 -left-4 text-4xl opacity-20 text-teal-600">"</div>
        <div className="text-xl italic text-grey-800">
          {text}
        </div>
        <div className="quote-author">
          <div className="w-8 h-8 rounded-full bg-grey-200 flex items-center justify-center mr-3">
            <User size={16} className="text-grey-500" />
          </div>
          <div>
            <span className="font-semibold block">{author}</span>
            {role && <span className="text-sm text-grey-400">{role}</span>}
          </div>
        </div>
      </div>
    </ScrollySection>
  );
};
