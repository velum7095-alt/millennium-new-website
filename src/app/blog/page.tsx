'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useSiteData } from '../../hooks/useSiteData';

export default function BlogPage() {
  const { blogPosts } = useSiteData();

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">News & Blog</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">Stay updated with the latest technology news and insights</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="glass overflow-hidden card-hover group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-text-secondary text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.publishedDate}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{post.title}</h3>
                  <p className="text-text-secondary text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-1 mt-4 text-red-400 text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}