'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { englishLabels } from '@/data/learning';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLanding = pathname === '/learn';

  return (
    <div className="min-h-screen">
      {/* Navigation breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/" className="hover:text-[#FFE135] transition-colors">
            {englishLabels.nav.home}
          </Link>
          <span>/</span>
          <Link
            href="/learn"
            className={`transition-colors ${isLanding ? 'text-[#FFE135]' : 'hover:text-[#FFE135]'}`}
          >
            {englishLabels.nav.learn}
          </Link>
          {!isLanding && pathname.includes('/prophets') && (
            <>
              <span>/</span>
              <Link href="/learn/prophets" className="hover:text-[#FFE135] transition-colors">
                {englishLabels.categories.prophet}
              </Link>
            </>
          )}
          {!isLanding && pathname.includes('/sahabas') && (
            <>
              <span>/</span>
              <Link href="/learn/sahabas" className="hover:text-[#FFE135] transition-colors">
                {englishLabels.categories.sahaba}
              </Link>
            </>
          )}
          {!isLanding && pathname.includes('/tabieen') && (
            <>
              <span>/</span>
              <Link href="/learn/tabieen" className="hover:text-[#FFE135] transition-colors">
                {englishLabels.categories.tabieen}
              </Link>
            </>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}
