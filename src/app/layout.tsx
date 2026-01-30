import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Islamic Guessing Game - Daily Challenge",
  description: "A Wordle-style guessing game for Islamic figures - Prophets, Sahabas, and Tabi'een. Test your knowledge of Islamic history!",
  keywords: ["Islamic", "Quran", "Prophets", "Sahabas", "Tabieen", "Game", "Quiz", "Daily Challenge"],
  openGraph: {
    title: "Islamic Guessing Game",
    description: "Test your knowledge of Prophets, Sahabas, and Tabi'een in this daily guessing game!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#0a0a0a] text-white min-h-screen`}>
        <div className="min-h-screen flex flex-col gradient-bg grid-pattern">
          {/* Minimal Header */}
          <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IG</span>
                </div>
                <span className="font-semibold text-white hidden sm:block">Islamic Guessing</span>
              </a>
              <nav className="flex items-center gap-4">
                <a href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Home
                </a>
              </nav>
            </div>
          </header>

          {/* Main content with top padding for fixed header */}
          <main className="flex-1 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              {children}
            </div>
          </main>

          {/* Minimal Footer */}
          <footer className="border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                <p>Learn about the great figures of Islam through play</p>
                <p>New challenge every minute</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
