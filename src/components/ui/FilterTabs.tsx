'use client';

import { motion } from 'framer-motion';

interface FilterTabsProps {
  categories: { id: string; name: string; slug: string }[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
  className?: string;
}

export default function FilterTabs({ categories, activeCategory, onCategoryChange, className = '' }: FilterTabsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          activeCategory === 'all'
            ? 'gradient-bg text-white shadow-lg shadow-red-500/25'
            : 'glass text-text-secondary hover:text-white hover:bg-white/10'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeCategory === category.slug
              ? 'gradient-bg text-white shadow-lg shadow-red-500/25'
              : 'glass text-text-secondary hover:text-white hover:bg-white/10'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
}