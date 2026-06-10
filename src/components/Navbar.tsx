'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Millennium Infosys"
              width={180}
              height={45}
              className="h-10 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/25765001555?text=Hello%20Millennium%20Infosys!%20I%20would%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 gradient-bg px-5 py-2.5 rounded-xl text-sm font-semibold text-white hover:shadow-lg hover:shadow-red-500/25 transition-all hover:scale-105"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} links={navLinks} />
    </>
  );
}