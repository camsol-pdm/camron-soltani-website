export default function Footer() {
  return (
    <footer className="bg-spotify-dark-secondary border-t border-spotify-neutral mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-spotify-text-muted mb-2">
          © 2026 Camron Soltani. Not affiliated with Spotify. This is a case study for a PM role.
        </p>
        <p className="text-center text-sm text-spotify-text-muted">
          <a href="mailto:camronsoltani@gmail.com" className="hover:text-spotify-green transition-colors">
            camronsoltani@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
