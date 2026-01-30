import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Islamic Guessing Game - Test Your Knowledge!",
  description: "A fun Wordle-style guessing game for Islamic figures - Prophets, Sahabas, and Tabi'een. Test your knowledge of Islamic history!",
  keywords: ["Islamic", "Quran", "Prophets", "Sahabas", "Tabieen", "Game", "Quiz"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} font-sans antialiased bg-[#050505] text-white min-h-screen`}>
        <div className="min-h-screen flex flex-col lunchly-bg">
          {/* Bold Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b-2 border-[#FFE135]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#FFE135] to-[#FFC107] flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <span className="text-black font-black text-lg sm:text-xl">IG</span>
                </div>
                <span className="font-black text-lg sm:text-xl uppercase tracking-tight hidden sm:block">
                  Islamic <span className="text-[#FFE135]">Guessing</span>
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="badge badge-yellow animate-pulse-glow text-xs sm:text-sm">
                  Unlimited Play!
                </span>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 pt-20 sm:pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
              {children}
            </div>
          </main>

          {/* Bold Footer */}
          <footer className="border-t-2 border-[#FFE135]/20 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
              <p className="text-zinc-500 font-bold uppercase tracking-wide text-sm">
                Learn Islamic History Through Play
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
