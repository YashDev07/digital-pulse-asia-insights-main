
import React from 'react';
import { ScrollySection } from '@/components/ScrollySection';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';

interface SplitComparisonProps {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  className?: string;
  leftGradient?: string;
  rightGradient?: string;
}

export const SplitComparison: React.FC<SplitComparisonProps> = ({ 
  leftTitle, 
  leftItems, 
  rightTitle, 
  rightItems,
  className,
  leftGradient = 'bg-chapter1-gradient',
  rightGradient = 'bg-chapter2-gradient'
}) => {
  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
          <ArrowRight className="text-gray-500" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollySection className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className={cn("absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300", leftGradient)} />
            <h3 className="text-xl font-semibold mb-4 text-adb-blue relative z-10">{leftTitle}</h3>
            <ul className="space-y-4 relative z-10">
              {leftItems.map((item, index) => (
                <li key={index} className="flex items-start hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-adb-blue bg-opacity-10 flex items-center justify-center mt-0.5 mr-3">
                    <Check size={14} className="text-adb-blue" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollySection>
          
          <ScrollySection delay={300} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className={cn("absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300", rightGradient)} />
            <h3 className="text-xl font-semibold mb-4 text-linkedin-blue relative z-10">{rightTitle}</h3>
            <ul className="space-y-4 relative z-10">
              {rightItems.map((item, index) => (
                <li key={index} className="flex items-start hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-linkedin-blue bg-opacity-10 flex items-center justify-center mt-0.5 mr-3">
                    <Check size={14} className="text-linkedin-blue" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollySection>
        </div>
      </div>
    </div>
  );
};
