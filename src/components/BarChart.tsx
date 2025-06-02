
import React, { useState } from 'react';
import { useIntersectionObserverOnce } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface BarChartProps {
  data: {
    label: string;
    value: number;
    percentage: number;
    color?: string;
  }[];
  className?: string;
  animated?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  className,
  animated = true 
}) => {
  const { ref, isVisible } = useIntersectionObserverOnce<HTMLDivElement>();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      ref={ref} 
      className={cn(
        "chart-container backdrop-blur-sm bg-white/95 border border-gray-100",
        "transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="space-y-6">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="space-y-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex justify-between items-center">
              <div className={cn(
                "chart-label transition-all duration-300",
                hoveredIndex === index ? "text-adb-blue font-semibold" : ""
              )}>
                {item.label}
              </div>
              <div className={cn(
                "text-sm font-medium transition-all duration-300",
                hoveredIndex === index ? "text-adb-blue scale-110" : ""
              )}>
                {item.value}%
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden shadow-inner">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-1000 ease-out origin-left flex items-center justify-end pr-2",
                  hoveredIndex === index ? "brightness-110" : ""
                )}
                style={{ 
                  width: isVisible && animated ? `${item.percentage}%` : '0%',
                  backgroundColor: item.color || '#0067b1',
                  boxShadow: hoveredIndex === index ? 'inset 0 0 10px rgba(255,255,255,0.5)' : ''
                }}
              >
                {item.percentage > 15 && (
                  <span className="text-xs font-bold text-white drop-shadow-md">
                    {item.percentage}%
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
