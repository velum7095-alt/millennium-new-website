'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import GlassCard from '../../../components/ui/GlassCard';
import GradientButton from '../../../components/ui/GradientButton';
import { useSiteData } from '../../../hooks/useSiteData';
import { productCategories } from '../../../data/productCategories';
import Link from 'next/link';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const { products } = useSiteData();
  const categoryInfo = productCategories.find(c => c.slug === category);
  const categoryProducts = products.filter(p => p.category === category);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors">
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
                  <GlassCard className="h-full flex flex-col">
                    <div className="relative mb-4 bg-white/5 rounded-xl overflow-hidden h-48 flex items-center justify-center">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-4xl font-bold text-white/10">{product.brand.charAt(0)}</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-red-400 font-medium uppercase">{product.brand}</span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-2">{product.name}</h3>
                      <p className="text-text-secondary text-sm mb-3">{product.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.map((feature, i) => (
                          <span key={i} className="text-xs bg-white/5 text-text-secondary px-2 py-1 rounded-md flex items-center gap-1">
                            <Check className="w-3 h-3 text-red-400" />{feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <span className="text-sm font-semibold text-white">{product.price}</span>
                      <a href={`https://wa.me/25765001555?text=${encodeURIComponent('Hello Millennium Infosys! I would like to request a quote for: ' + product.name)}`} target="_blank" rel="noopener noreferrer" className="gradient-bg px-4 py-2 rounded-xl text-xs font-semibold text-white inline-flex items-center hover:shadow-lg hover:shadow-red-500/25 transition-all">Get Quote</a>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass">
              <p className="text-text-secondary text-lg mb-4">No products in this category yet.</p>
              <a href="https://wa.me/25765001555?text=${encodeURIComponent('Hello Millennium Infosys! I would like to inquire about this product category.')}" target="_blank" rel="noopener noreferrer" className="gradient-bg px-6 py-3 rounded-xl text-white font-semibold inline-flex items-center hover:shadow-lg hover:shadow-red-500/25 transition-all">Contact Us for Details</a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}