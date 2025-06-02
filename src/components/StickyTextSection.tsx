
import React, { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ScrollySection } from '@/components/ScrollySection';
import { useScrollPosition } from '@/hooks/use-scroll-position';

interface StickyTextSectionProps {
  children: ReactNode;
  className?: string;
  gradientBackground?: boolean;
  gradientClass?: string;
}

export const StickyTextSection: React.FC<StickyTextSectionProps> = ({ 
  children,
  className,
  gradientBackground = false,
  gradientClass = 'bg-digital-grid'
}) => {
  const { scrollY } = useScrollPosition();
  const [opacity, setOpacity] = useState(1);
  
  useEffect(() => {
    // Calculate opacity based on scroll position
    const handleScroll = () => {
      const element = document.querySelector('.sticky-text');
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const viewportHeight = window.innerHeight;
        
        // Fade out as the element approaches top of viewport
        if (elementTop < viewportHeight * 0.1) {
          const newOpacity = Math.max(0, 1 - (Math.abs(elementTop) / (viewportHeight * 0.3)));
          setOpacity(newOpacity);
        } else {
          setOpacity(1);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={cn(
      'min-h-[200vh] relative',
      gradientBackground && gradientClass,
      className
    )}>
      {gradientBackground && (
        <div className="absolute inset-0 -z-10 opacity-30 bg-digital-grid" 
             style={{ backgroundSize: '30px 30px' }} />
      )}
      
      <div className="sticky-text" style={{ opacity }}>
        <ScrollySection>
          {children}
        </ScrollySection>
      </div>
    </div>
  );
};
