'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-spotify-dark border-b border-spotify-neutral sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-semibold text-spotify-text hover:text-spotify-green transition-colors">
            Camron Soltani – Product Manager
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-spotify-text-muted hover:text-spotify-green transition-colors">
              Home
            </Link>
            <Link href="/spotify-strategy" className="text-spotify-text-muted hover:text-spotify-green transition-colors">
              Strategy
            </Link>
            <Link href="/analytics-dashboard" className="text-spotify-text-muted hover:text-spotify-green transition-colors">
              Analytics Dashboard
            </Link>
            <Link href="/case-study" className="text-spotify-text-muted hover:text-spotify-green transition-colors">
              Case Study
            </Link>
            <Link href="/about" className="text-spotify-text-muted hover:text-spotify-green transition-colors">
              About
            </Link>
          </div>
          <button
            className="md:hidden text-spotify-text-muted hover:text-spotify-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-spotify-neutral">
            <Link href="/" className="block text-spotify-text-muted hover:text-spotify-green transition-colors py-2">
              Home
            </Link>
            <Link href="/spotify-strategy" className="block text-spotify-text-muted hover:text-spotify-green transition-colors py-2">
              Strategy
            </Link>
            <Link href="/analytics-dashboard" className="block text-spotify-text-muted hover:text-spotify-green transition-colors py-2">
              Analytics Dashboard
            </Link>
            <Link href="/case-study" className="block text-spotify-text-muted hover:text-spotify-green transition-colors py-2">
              Case Study
            </Link>
            <Link href="/about" className="block text-spotify-text-muted hover:text-spotify-green transition-colors py-2">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
