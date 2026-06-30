'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from '../ui/SectionWrapper';
import { useSiteData } from '../../hooks/useSiteData';
import { productCategories } from '../../data/productCategories';

const CategoryIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Package className={className} />;
  return <IconComponent className={className} />;
};

export default function ProductsSection() {
  const { settings } = useSiteData();
  const whatsappNumber = settings?.whatsapp?.replace(/[^0-9]/g, '') || '25765001555';

  return (
    <SectionWrapper
      id="products"
      title="Our Products & Solutions"
      subtitle="Explore our comprehensive range of IT equipment and technology solutions"
      className="bg-secondary-bg/50"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {productCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-red-200/50 transition-all duration-300"
          >
            {/* Left side: Category Image */}
            <div className="relative w-full md:w-[280px] lg:w-[320px] bg-slate-50 flex items-center justify-center p-6 shrink-0 h-48 md:h-auto border-b md:border-b-0 md:border-r border-slate-100">
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="object-contain w-full h-full max-h-40 md:max-h-48 transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <CategoryIcon name={cat.icon} className="w-8 h-8" />
                </div>
              )}
            </div>

            {/* Right side: Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
              <div>
                {/* Header: Icon, Title & Brands */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 shadow-sm">
                    <CategoryIcon name={cat.icon} className="w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{cat.name}</h3>
                    <span className="text-xs md:text-sm text-red-500 font-semibold uppercase tracking-wider">{cat.brands}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm md:text-base mb-4 leading-relaxed">{cat.description}</p>

                {/* Tag badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-50 border border-slate-100 text-text-secondary px-3 py-1.5 rounded-lg font-medium transition-colors hover:bg-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-slate-100">
                <div className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Price: <span className="text-red-600">Request Quote</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-text-secondary hover:text-slate-900 hover:bg-slate-50 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-1.5 border border-slate-100"
                  >
                    View Models
                  </Link>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Millennium Infosys! I would like to request a price quote for: ${cat.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-lg hover:shadow-emerald-600/20 transition-all inline-flex items-center gap-2"
                  >
                    {/* WhatsApp SVG Icon */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.799-4.394 9.802-9.802.002-2.618-1.01-5.078-2.856-6.927C16.378 1.986 13.924.973 11.3 1.002c-5.404 0-9.8 4.403-9.803 9.805a9.77 9.77 0 001.457 4.673l-.95 3.468 3.559-.933zM17.47 15.3c-.36-.18-2.126-1.05-2.457-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-3.6-1.8-4.83-3.12-5.49-4.26-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.6.1-.3.05-.57-.03-.75-.08-.18-.81-1.95-1.11-2.68-.3-.72-.6-1.2-.81-1.21-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 .003 1.77 1.29 3.48 1.47 3.72.18.24 2.53 3.86 6.13 5.42.86.37 1.53.59 2.06.76.86.27 1.64.23 2.26.14.69-.1 2.13-.87 2.43-1.72.3-.85.3-1.59.21-1.72-.09-.13-.33-.21-.69-.39z" />
                    </svg>
                    Request Price
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}