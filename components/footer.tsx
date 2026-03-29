'use client'

import Link from 'next/link'
import { Mail, Linkedin, Github, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary/20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center">
                <span className="text-lg font-bold gradient-text">S</span>
              </div>
              <span className="text-lg font-bold text-white">
                Shopify <span className="text-primary">Expert</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building high-converting Shopify stores that drive revenue and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Store Development',
                'Theme Customization',
                'App Integration',
                'Speed Optimization',
                'SEO Services',
              ].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@shopifyexpert.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                <span>contact@shopify.com</span>
              </a>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-lg glass-effect hover:bg-primary/20 hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-gray-400 hover:text-primary" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg glass-effect hover:bg-primary/20 hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-gray-400 hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shopify Expert Developer. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>for eCommerce success</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
