
import React, { ReactNode } from 'react';
import { useIntersectionObserverOnce } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface ScrollySectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollySection: React.FC<ScrollySectionProps> = ({ 
  children, 
  className,
  delay = 0 
}) => {
  const { ref, isVisible } = useIntersectionObserverOnce<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'scrolly-section',
        isVisible && 'visible',
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
