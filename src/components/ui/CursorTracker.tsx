
import { useEffect } from 'react';

export const CursorTracker = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorRing = document.querySelector('.cursor-ring') as HTMLElement;

    if (!cursor || !cursorRing) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      // Delay ring movement slightly
      setTimeout(() => {
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
      }, 50);
    };

    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      document.body.appendChild(trail);

      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 600);
    };

    let trailTimer: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      moveCursor(e);
      
      // Throttle trail creation
      clearTimeout(trailTimer);
      trailTimer = setTimeout(() => createTrail(e), 50);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(trailTimer);
    };
  }, []);

  return null;
};
