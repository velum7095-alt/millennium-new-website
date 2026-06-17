'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function GradientButton({ label, href, variant = 'primary', onClick, className = '', type = 'button' }: GradientButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer';

  const variantClasses = variant === 'primary'
    ? 'gradient-bg text-white hover:shadow-lg hover:shadow-red-500/25 hover:scale-105'
    : 'glass text-slate-900 hover:bg-slate-100 hover:border-red-400/30 hover:scale-105';

  const content = (
    <motion.span
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.span>
  );

  if (href) {
    // External links (WhatsApp, etc.) open in new tab
    if (href.startsWith('http')) {
      return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
    }
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}