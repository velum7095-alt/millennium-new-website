'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Check } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SearchBar from '../ui/SearchBar';
import FilterTabs from '../ui/FilterTabs';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';
import { useSiteData } from '../../hooks/useSiteData';
import { productCategories } from '../../data/productCategories';
import { Product } from '../../data/types';

export default function ProductsSection() {
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
    <SectionWrapper
      id="products"
      title="Our Products & Solutions"
      subtitle="Explore our comprehensive range of IT equipment and technology solutions"
      className="bg-secondary-bg/50"
    >
      {/* Search & Filters */}
      <div className="mb-10 space-y-4">
        <SearchBar onSearch={setSearchQuery} className="max-w-md mx-auto" />
        <FilterTabs
          categories={productCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          className="justify-center"
        />
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
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
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="text-xs bg-white/5 text-text-secondary px-2 py-1 rounded-md flex items-center gap-1">
                      <Check className="w-3 h-3 text-red-400" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-sm font-semibold text-white">{product.price}</span>
                <div className="flex gap-2">
                  <button onClick={() => setSelectedProduct(product)} className="glass w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Eye className="w-4 h-4 text-text-secondary" />
                  </button>
                  <a href={`https://wa.me/25765001555?text=${encodeURIComponent('Hello Millennium Infosys! I would like to request a quote for: ' + product.name)}`} target="_blank" rel="noopener noreferrer" className="gradient-bg px-4 py-2 rounded-xl text-xs font-semibold text-white inline-flex items-center hover:shadow-lg hover:shadow-red-500/25 transition-all">Get Quote</a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-text-secondary text-lg">No products found matching your criteria.</p>
        </div>
      )}

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <motion.div
            className="glass-strong max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-2">{selectedProduct.name}</h2>
            <p className="text-red-400 text-sm mb-4">{selectedProduct.brand} | {selectedProduct.category}</p>
            <p className="text-text-secondary mb-4">{selectedProduct.description}</p>
            <div className="space-y-2 mb-6">
              {selectedProduct.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                  <Check className="w-4 h-4 text-red-400" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">{selectedProduct.price}</span>
              <a href={`https://wa.me/25765001555?text=${encodeURIComponent('Hello Millennium Infosys! I would like to request a quote for: ' + selectedProduct.name)}`} target="_blank" rel="noopener noreferrer" className="gradient-bg px-6 py-3 rounded-xl text-sm font-semibold text-white inline-flex items-center hover:shadow-lg hover:shadow-red-500/25 transition-all">Request Quote on WhatsApp</a>
            </div>
          </motion.div>
        </div>
      )}

      {/* View All Button */}
      <div className="text-center mt-12">
        <a href="https://wa.me/25765001555?text=${encodeURIComponent('Hello Millennium Infosys! I would like to inquire about your products.')}" target="_blank" rel="noopener noreferrer" className="glass px-6 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2">View All Products</a>
      </div>
    </SectionWrapper>
  );
}