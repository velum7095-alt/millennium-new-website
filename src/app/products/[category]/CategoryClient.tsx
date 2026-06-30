"use client";

import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import GlassCard from '../../../components/ui/GlassCard';
import { useSiteData } from '../../../hooks/useSiteData';
import { productCategories } from '../../../data/productCategories';
import Link from 'next/link';

export default function CategoryClient({ category }: { category: string }) {
  const { products, settings } = useSiteData();
  const whatsappNumber = settings?.whatsapp?.replace(/[^0-9]/g, '') || '25765001555';
  
  const categoryInfo = productCategories.find(c => c.slug === category);
  const categoryProducts = products.filter(p => p.category === category);

  return (
    <div className="pt-24 min-h-screen bg-secondary-bg/30">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-text-secondary hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <motion.div className="mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">{categoryInfo?.name || category}</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">{categoryInfo?.description}</p>
          </motion.div>

          {categoryProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product, index) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <GlassCard className="h-full flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="relative mb-4 bg-slate-50 rounded-xl overflow-hidden h-48 flex items-center justify-center p-4">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                      ) : (
                        <div className="text-4xl font-bold text-slate-300">{product.brand.charAt(0)}</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-red-500 font-bold uppercase tracking-wider">{product.brand}</span>
                      <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{product.name}</h3>
                      <p className="text-text-secondary text-sm mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {product.features.map((feature, i) => (
                          <span key={i} className="text-xs bg-slate-50 border border-slate-100 text-text-secondary px-2.5 py-1 rounded-md flex items-center gap-1">
                            <Check className="w-3 h-3 text-red-500" />{feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <span className="text-sm font-semibold text-slate-900">{product.price}</span>
                      <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Millennium Infosys! I would like to request a quote for: ' + product.name)}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm hover:shadow-lg hover:shadow-emerald-600/20 transition-all">
                        {/* WhatsApp Icon */}
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.799-4.394 9.802-9.802.002-2.618-1.01-5.078-2.856-6.927C16.378 1.986 13.924.973 11.3 1.002c-5.404 0-9.8 4.403-9.803 9.805a9.77 9.77 0 001.457 4.673l-.95 3.468 3.559-.933zM17.47 15.3c-.36-.18-2.126-1.05-2.457-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-3.6-1.8-4.83-3.12-5.49-4.26-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.6.1-.3.05-.57-.03-.75-.08-.18-.81-1.95-1.11-2.68-.3-.72-.6-1.2-.81-1.21-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 .003 1.77 1.29 3.48 1.47 3.72.18.24 2.53 3.86 6.13 5.42.86.37 1.53.59 2.06.76.86.27 1.64.23 2.26.14.69-.1 2.13-.87 2.43-1.72.3-.85.3-1.59.21-1.72-.09-.13-.33-.21-.69-.39z" />
                        </svg>
                        Get Quote
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl p-8">
              <p className="text-text-secondary text-lg mb-4">No products in this category yet.</p>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Millennium Infosys! I would like to inquire about: ' + (categoryInfo?.name || category))}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 shadow-sm hover:shadow-lg hover:shadow-emerald-600/20 transition-all">
                {/* WhatsApp Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.799-4.394 9.802-9.802.002-2.618-1.01-5.078-2.856-6.927C16.378 1.986 13.924.973 11.3 1.002c-5.404 0-9.8 4.403-9.803 9.805a9.77 9.77 0 001.457 4.673l-.95 3.468 3.559-.933zM17.47 15.3c-.36-.18-2.126-1.05-2.457-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-3.6-1.8-4.83-3.12-5.49-4.26-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.6.1-.3.05-.57-.03-.75-.08-.18-.81-1.95-1.11-2.68-.3-.72-.6-1.2-.81-1.21-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 .003 1.77 1.29 3.48 1.47 3.72.18.24 2.53 3.86 6.13 5.42.86.37 1.53.59 2.06.76.86.27 1.64.23 2.26.14.69-.1 2.13-.87 2.43-1.72.3-.85.3-1.59.21-1.72-.09-.13-.33-.21-.69-.39z" />
                </svg>
                Contact Us on WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
