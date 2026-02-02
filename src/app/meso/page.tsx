import Link from 'next/link';
import { albanianLabels } from '@/data/learning';
import { prophets, sahabas, tabieen } from '@/data';

export default function MesoLandingPage() {
  const categories = [
    {
      id: 'prophet',
      title: albanianLabels.categories.prophet,
      description: 'Zbulo jetën e profetëve të Allahut nga Ademi deri te Muhamedi ﷺ',
      count: prophets.length,
      href: '/meso/profetet',
      gradient: 'from-[#FF4757] to-[#FF6B6B]',
      shadow: 'shadow-red-500/30',
      icon: '🌟',
    },
    {
      id: 'sahaba',
      title: albanianLabels.categories.sahaba,
      description: 'Lexo për shokët e Profetit ﷺ që sakrifikuan gjithçka për Islamin',
      count: sahabas.length,
      href: '/meso/sahabat',
      gradient: 'from-[#00D4FF] to-[#00B4D8]',
      shadow: 'shadow-cyan-500/30',
      icon: '⭐',
    },
    {
      id: 'tabieen',
      title: albanianLabels.categories.tabieen,
      description: 'Njihu me nxënësit e sahabëve që ruajtën dijen islame',
      count: tabieen.length,
      href: '/meso/tabiinet',
      gradient: 'from-[#A855F7] to-[#9333EA]',
      shadow: 'shadow-purple-500/30',
      icon: '📚',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-chunky">
          {albanianLabels.landing.title}
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
          {albanianLabels.landing.subtitle}
        </p>
        <p className="text-sm text-zinc-500 max-w-xl mx-auto">
          {albanianLabels.landing.description}
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className={`group card-bold p-6 sm:p-8 hover:border-transparent transition-all duration-300 ${category.shadow} hover:shadow-lg`}
          >
            <div className="space-y-4">
              {/* Icon */}
              <div className="text-4xl">{category.icon}</div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                  style={{ backgroundImage: `linear-gradient(to right, ${category.gradient.split(' ')[1]}, ${category.gradient.split(' ')[3]})` }}>
                {category.title}
              </h2>

              {/* Description */}
              <p className="text-zinc-400 text-sm sm:text-base">
                {category.description}
              </p>

              {/* Count Badge */}
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${category.gradient} text-white`}>
                  {category.count} {albanianLabels.landing.figuresCount}
                </span>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                <span className="font-medium">{albanianLabels.figureCard.readMore}</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-black text-[#FF4757]">{prophets.length}</div>
          <div className="text-sm text-zinc-500">{albanianLabels.categories.prophet}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-black text-[#00D4FF]">{sahabas.length}</div>
          <div className="text-sm text-zinc-500">{albanianLabels.categories.sahaba}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-black text-[#A855F7]">{tabieen.length}</div>
          <div className="text-sm text-zinc-500">{albanianLabels.categories.tabieen}</div>
        </div>
      </div>
    </div>
  );
}
