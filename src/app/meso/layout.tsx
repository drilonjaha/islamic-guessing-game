'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { albanianLabels } from '@/data/learning';

export default function MesoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLanding = pathname === '/meso';

  return (
    <div className="min-h-screen">
      {/* Navigation breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/" className="hover:text-[#FFE135] transition-colors">
            {albanianLabels.nav.home}
          </Link>
          <span>/</span>
          <Link
            href="/meso"
            className={`transition-colors ${isLanding ? 'text-[#FFE135]' : 'hover:text-[#FFE135]'}`}
          >
            {albanianLabels.nav.learn}
          </Link>
          {!isLanding && pathname.includes('/profetet') && (
            <>
              <span>/</span>
              <Link href="/meso/profetet" className="hover:text-[#FFE135] transition-colors">
                {albanianLabels.categories.prophet}
              </Link>
            </>
          )}
          {!isLanding && pathname.includes('/sahabat') && (
            <>
              <span>/</span>
              <Link href="/meso/sahabat" className="hover:text-[#FFE135] transition-colors">
                {albanianLabels.categories.sahaba}
              </Link>
            </>
          )}
          {!isLanding && pathname.includes('/tabiinet') && (
            <>
              <span>/</span>
              <Link href="/meso/tabiinet" className="hover:text-[#FFE135] transition-colors">
                {albanianLabels.categories.tabieen}
              </Link>
            </>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}
