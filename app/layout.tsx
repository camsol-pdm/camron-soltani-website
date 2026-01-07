'use client';

import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable Next.js scroll restoration - we handle it manually
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Camron Soltani - Product Manager | Spotify Podcast Creator Tools</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
