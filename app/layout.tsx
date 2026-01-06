import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Camron Soltani - Product Manager | Spotify Podcast Creator Tools',
  description: 'Product strategy case study for Spotify PM role focused on podcast creator promotional tools and analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-spotify-dark text-spotify-text">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

