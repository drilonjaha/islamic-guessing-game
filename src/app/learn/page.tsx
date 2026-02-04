import Link from 'next/link';
import { englishLabels } from '@/data/learning';
import { prophets, sahabas, tabieen } from '@/data';

export default function LearnLandingPage() {
  const categories = [
    {
      id: 'prophet',
      title: englishLabels.categories.prophet,
      description: 'Discover the lives of Allah\'s prophets from Adam to Muhammad ﷺ',
      count: prophets.length,
      href: '/learn/prophets',
      gradient: 'from-[#FF4757] to-[#FF6B6B]',
      shadow: 'shadow-red-500/30',
      icon: '🌟',
    },
    {
      id: 'sahaba',
      title: englishLabels.categories.sahaba,
      description: 'Read about the companions of the Prophet ﷺ who sacrificed everything for Islam',
      count: sahabas.length,
      href: '/learn/sahabas',
      gradient: 'from-[#00D4FF] to-[#00B4D8]',
      shadow: 'shadow-cyan-500/30',
      icon: '⭐',
    },
    {
      id: 'tabieen',
      title: englishLabels.categories.tabieen,
      description: 'Learn about the students of the companions who preserved Islamic knowledge',
      count: tabieen.length,
      href: '/learn/tabieen',
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
          {englishLabels.landing.title}
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
          {englishLabels.landing.subtitle}
        </p>
        <p className="text-sm text-zinc-500 max-w-xl mx-auto">
          {englishLabels.landing.description}
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
                  {category.count} {englishLabels.landing.figuresCount}
                </span>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                <span className="font-medium">{englishLabels.figureCard.readMore}</span>
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
          <div className="text-sm text-zinc-500">{englishLabels.categories.prophet}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-black text-[#00D4FF]">{sahabas.length}</div>
          <div className="text-sm text-zinc-500">{englishLabels.categories.sahaba}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-black text-[#A855F7]">{tabieen.length}</div>
          <div className="text-sm text-zinc-500">{englishLabels.categories.tabieen}</div>
        </div>
      </div>
    </div>
  );
}
