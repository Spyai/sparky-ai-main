import { useState, useEffect } from 'react';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCountAnimation = ({ end, duration = 2000, startOnView = true }: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before starting animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Start animation immediately if startOnView is false
  useEffect(() => {
    if (!isMounted || isAnimating) return;
    
    if (!startOnView) {
      setIsAnimating(true);
    }
  }, [isMounted, startOnView, isAnimating]);

  useEffect(() => {
    if (!isMounted || !isAnimating) return;

    let startTime: number;
    let animationId: number;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, isAnimating, isMounted]);

  const startAnimation = () => {
    if (isMounted && !isAnimating) {
      setIsAnimating(true);
    }
  };

  return { count, startAnimation };
};
