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
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-bg to-transparent z-10" />
      <motion.div
        ref={scrollerRef}
        className="flex gap-6 items-center"
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
            className="flex-shrink-0 w-[200px] h-[140px] glass flex flex-col items-center justify-center p-5 card-hover"
          >
            {item.logo ? (
              <img src={item.logo} alt={item.name} className="h-16 w-full object-contain" />
            ) : (
              <div className="h-16 flex items-center justify-center text-lg font-bold text-slate-700 text-center">
                {item.name}
              </div>
            )}
            {showBadge && (
              <span className="text-[10px] text-amber-600 font-semibold mt-2 uppercase tracking-wider">Authorized Partner</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}