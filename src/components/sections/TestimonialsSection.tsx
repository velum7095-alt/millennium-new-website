'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import StarRating from '../ui/StarRating';
import { useSiteData } from '../../hooks/useSiteData';

export default function TestimonialsSection() {
  const { testimonials } = useSiteData();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionWrapper
      id="testimonials"
      title="What Our Clients Say"
      subtitle="Hear from the businesses and organizations we serve"
      className="bg-secondary-bg/50"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="glass-strong p-8 md:p-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <Quote className="w-10 h-10 text-red-500/30 mb-6" />
            <p className="text-lg md:text-xl text-slate-900 leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current]?.review}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-xl font-bold text-slate-900">
                  {testimonials[current]?.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">{testimonials[current]?.clientName}</h4>
                  <p className="text-red-400 text-sm">{testimonials[current]?.position}</p>
                  <p className="text-text-secondary text-sm">{testimonials[current]?.company}</p>
                </div>
              </div>
              <StarRating rating={testimonials[current]?.rating || 0} />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors">
            <ChevronLeft className="w-5 h-5 text-slate-900" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === current ? 'gradient-bg w-6' : 'bg-white/20'}`}
              />
            ))}
          </div>
          <button onClick={next} className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors">
            <ChevronRight className="w-5 h-5 text-slate-900" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}