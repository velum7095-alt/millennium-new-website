'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check, Eye } from 'lucide-react';
import SectionWrapper from '../../components/ui/SectionWrapper';
import SearchBar from '../../components/ui/SearchBar';
import FilterTabs from '../../components/ui/FilterTabs';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import { useSiteData } from '../../hooks/useSiteData';
import { productCategories } from '../../data/productCategories';
import { Product } from '../../data/types';

export default function ProductsPage() {
  const { products } = useSiteData();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, activeCategory]);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">Our Products</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">Browse our comprehensive range of IT equipment and technology solutions</p>
          </motion.div>

          <div className="mb-10 space-y-4">
            <SearchBar onSearch={setSearchQuery} className="max-w-md" />
            <FilterTabs categories={productCategories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <GlassCard className="h-full flex flex-col">
                  <div className="relative mb-4 bg-white/5 rounded-xl overflow-hidden h-48 flex items-center justify-center">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-4xl font-bold text-white/10">{product.brand.charAt(0)}</div>
                    )}
                    {product.isFeatured && (
                      <span className="absolute top-3 right-3 bg-accent-gold/90 text-black text-xs font-bold px-2 py-1 rounded-md">Featured</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-red-400 font-medium uppercase">{product.brand}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{product.name}</h3>
                    <p className="text-text-secondary text-sm mb-3 line-clamp-2">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-sm font-semibold text-white">{product.price}</span>
                    <a href={`https://wa.me/25765001555?text=${encodeURIComponent('Hello Millennium Infosys! I would like to request a quote for: ' + product.name)}`} target="_blank" rel="noopener noreferrer" className="gradient-bg px-4 py-2 rounded-xl text-xs font-semibold text-white inline-flex items-center hover:shadow-lg hover:shadow-red-500/25 transition-all">Get Quote</a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16"><p className="text-text-secondary text-lg">No products found.</p></div>
          )}
        </div>
      </section>
    </div>
  );
}