'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import GradientButton from '../ui/GradientButton';
import { useSiteData } from '../../hooks/useSiteData';

export default function HeroSection() {
  const { heroData } = useSiteData();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroData.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroData.images.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroData.images[currentImage]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/40" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Achievement Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Award className="w-5 h-5 text-accent-gold" />
              <span className="text-sm font-semibold text-accent-gold">16+ Years of Excellence</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance">
              <span className="text-slate-900">{heroData.headline.split(' ').slice(0, 4).join(' ')}</span>{' '}
              <span className="gradient-text">{heroData.headline.split(' ').slice(4).join(' ')}</span>
            </h1>

            <p className="text-lg text-text-secondary mb-8 max-w-xl leading-relaxed">
              {heroData.subheading}
            </p>

            <div className="flex flex-wrap gap-4">
              {heroData.ctaButtons.map((btn) => (
                <GradientButton key={btn.label} label={btn.label} href={btn.link} variant={btn.variant} />
              ))}
            </div>
          </motion.div>

          {/* Image Slider Controls */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="glass-strong p-2 rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={heroData.images[currentImage]}
                    alt="Technology solutions"
                    className="w-full h-[400px] object-cover rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  {heroData.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentImage ? 'gradient-bg w-8' : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentImage((prev) => (prev - 1 + heroData.images.length) % heroData.images.length)}
                    className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-900" />
                  </button>
                  <button
                    onClick={() => setCurrentImage((prev) => (prev + 1) % heroData.images.length)}
                    className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-900" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-400/50 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-slate-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}