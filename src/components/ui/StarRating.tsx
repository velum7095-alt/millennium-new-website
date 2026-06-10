'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  className?: string;
}

export default function StarRating({ rating, maxStars = 5, className = '' }: StarRatingProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: maxStars }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'text-accent-gold fill-accent-gold'
              : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  );
}