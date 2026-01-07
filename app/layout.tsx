import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Camron Soltani – Product Manager | Spotify Podcast Creator Tools Case Study",
  description: "A strategic product case study for Spotify's podcast creator ecosystem, focusing on helping creators plan, book, target, and measure effective promotional campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-spotify-dark text-spotify-text">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
