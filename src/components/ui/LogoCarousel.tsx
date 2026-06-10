'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LogoCarouselProps {
  items: { id: string; name: string; logo: string }[];
  speed?: number;
  showBadge?: boolean;
}

export default function LogoCarousel({ items, speed = 30, showBadge = false }: LogoCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    const scroller = scrollerRef.current;
    const scrollContent = Array.from(scroller.children);
    scrollContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary-bg to-transparent z-10" />
      <motion.div
        ref={scrollerRef}
        className="flex gap-8 items-center"
        animate={{ x: [0, -50 * items.length] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 glass flex flex-col items-center justify-center px-8 py-6 min-w-[180px] card-hover"
          >
            {item.logo ? (
              <img src={item.logo} alt={item.name} className="h-14 w-auto max-w-[140px] object-contain hover:scale-110 transition-transform duration-300" />
            ) : (
              <div className="h-14 flex items-center justify-center text-xl font-bold text-text-secondary hover:text-white transition-colors">
                {item.name}
              </div>
            )}
            {showBadge && (
              <span className="text-[10px] text-accent-gold font-semibold mt-1 uppercase tracking-wider">Authorized Partner</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}