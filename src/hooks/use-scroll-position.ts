
import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollPercent: number;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollPercent: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      
      setScrollPosition({
        scrollY,
        scrollPercent: Math.min(scrollY / height, 1),
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}
