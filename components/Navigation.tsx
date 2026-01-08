'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          // ADJUST HEIGHT THRESHOLD: Change viewportHeight multiplier (e.g., viewportHeight * 1.5 for 1.5x viewport)
          const viewportHeight = window.innerHeight;
          const scrollDirection = scrollTop > lastScrollTop.current ? 'down' : 'up';
          const pastFirstScreen = scrollTop > viewportHeight;

          // Always show nav when at or above the first screen (viewport height threshold)
          if (scrollTop <= viewportHeight) {
            setIsVisible(true);
          }
          // Hide nav when scrolling down past the first screen
          else if (scrollDirection === 'down' && pastFirstScreen) {
            setIsVisible(false);
          }
          // Show nav immediately on any upward scroll after threshold
          else if (scrollDirection === 'up' && pastFirstScreen) {
            setIsVisible(true);
          }

          lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // ADJUST ANIMATION DURATION: Change duration-300 to duration-200 (faster) or duration-500 (slower)
    <nav 
      className={`bg-spotify-dark-secondary border-b border-spotify-neutral fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ height: '45px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="text-lg font-semibold text-spotify-text hover:text-spotify-green transition-colors">
            Camron Soltani – Product Manager
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-spotify-text-muted hover:text-spotify-text transition-colors">
              Home
            </Link>
            <Link href="/spotify-strategy" className="text-spotify-text-muted hover:text-spotify-text transition-colors">
              Spotify Strategy
            </Link>
            <Link href="/analytics-dashboard" className="text-spotify-text-muted hover:text-spotify-text transition-colors">
              Analytics Dashboard
            </Link>
            <Link href="/case-study" className="text-spotify-text-muted hover:text-spotify-text transition-colors">
              Case Study
            </Link>
            <Link href="/about" className="text-spotify-text-muted hover:text-spotify-text transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

