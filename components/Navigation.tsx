import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-spotify-dark-secondary border-b border-spotify-neutral sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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

