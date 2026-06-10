'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({ children, id, className = '', title, subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}