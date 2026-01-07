import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Camron Soltani - Product Manager | Spotify Podcast Creator Tools',
  description: 'Product strategy case study for Spotify PM role focused on podcast creator promotional tools and analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
