'use client'

import { ArrowUpRight, TrendingUp } from 'lucide-react'

const PROJECTS = [
  {
    id: 1,
    title: 'Fashion Boutique Store',
    description: 'Luxury fashion brand with custom theme and advanced filtering system',
    impact: '+210% Sales Growth',
    category: 'Theme Customization',
    image: '👗',
  },
  {
    id: 2,
    title: 'Electronics Marketplace',
    description: 'Multi-vendor setup with custom apps and inventory management',
    impact: '+$2.5M Revenue',
    category: 'App Integration',
    image: '📱',
  },
  {
    id: 3,
    title: 'Organic Beauty Brand',
    description: 'Subscription commerce setup with customer portal and analytics',
    impact: '+45% Retention',
    category: 'Development',
    image: '💄',
  },
  {
    id: 4,
    title: 'Sports Equipment Store',
    description: 'High-performance store with 2.5s load time and advanced SEO',
    impact: '+340% Organic Traffic',
    category: 'Speed Optimization',
    image: '⚽',
  },
  {
    id: 5,
    title: 'Home Decor Flagship',
    description: 'Premium store with AR product viewer and custom checkout',
    impact: '+75% Conversion',
    category: 'UX Design',
    image: '🏠',
  },
  {
    id: 6,
    title: 'Wellness Products',
    description: 'SEO-optimized store with content strategy and email integration',
    impact: '+520% Organic Growth',
    category: 'SEO Optimization',
    image: '🧘',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto smooth-transition-slow">
            Proven results from successful Shopify implementations across diverse industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(({ id, title, description, impact, category, image }) => (
            <div
              key={id}
              className="group relative rounded-xl overflow-hidden glass-effect border border-primary/20 hover:border-primary/60 card-hover cursor-pointer flex flex-col stagger-child"
            >
              {/* Image Area */}
              <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden smooth-transition">
                <span className="text-6xl group-hover:scale-110 smooth-transition-slow">
                  {image}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition-slow" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="inline-flex items-center w-fit mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary smooth-transition group-hover:bg-primary/40">
                    {category}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary smooth-transition">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed smooth-transition">
                  {description}
                </p>

                {/* Impact and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                  <div className="flex items-center space-x-2 text-primary font-semibold smooth-transition">
                    <TrendingUp size={18} className="group-hover:animate-bounce" style={{ animationDuration: '1s' }} />
                    <span>{impact}</span>
                  </div>
                  <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black btn-glow">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 fade-in-up">
          <button className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold btn-glow group">
            View All Case Studies
            <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 smooth-transition" />
          </button>
        </div>
      </div>
    </section>
  )
}
