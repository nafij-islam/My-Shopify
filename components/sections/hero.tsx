'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect w-fit fade-in-left">
              <Sparkles size={16} className="text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm text-gray-300">
                Trusted by <span className="text-primary font-semibold">50+</span> eCommerce brands
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">
                  Shopify Expert Developer
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg smooth-transition">
                I build high-converting, custom Shopify stores that scale your eCommerce business and maximize revenue.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2 stagger-child p-4 rounded-lg glass-effect hover:bg-primary/5">
                <p className="text-3xl font-bold text-primary smooth-transition">50+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div className="space-y-2 stagger-child p-4 rounded-lg glass-effect hover:bg-primary/5">
                <p className="text-3xl font-bold text-primary smooth-transition">$5M+</p>
                <p className="text-sm text-gray-400">GMV Increased</p>
              </div>
              <div className="space-y-2 stagger-child p-4 rounded-lg glass-effect hover:bg-primary/5">
                <p className="text-3xl font-bold text-primary smooth-transition">98%</p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in-up">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg gradient-cyan-purple text-black font-semibold btn-glow group"
              >
                Hire Me
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 smooth-transition" />
              </Link>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold btn-glow smooth-transition hover:bg-primary/10"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative h-full min-h-96 flex items-center justify-center fade-in-right">
            <div className="absolute inset-0 rounded-2xl glass-effect opacity-50 smooth-transition" />
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-primary/30 card-hover">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center smooth-transition">
                <div className="text-center space-y-4">
                  <div className="text-6xl animate-bounce" style={{ animationDuration: '2s' }}>🛍️</div>
                  <p className="text-lg text-gray-400">Custom Shopify Developer</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 glass-effect rounded-lg border border-primary/50 flex items-center justify-center animate-bounce hidden lg:flex btn-glow">
              <div className="text-3xl animate-pulse">⚡</div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full glass-effect border border-primary/30 hidden lg:block pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
