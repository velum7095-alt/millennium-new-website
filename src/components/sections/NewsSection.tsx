'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useSiteData } from '../../hooks/useSiteData';

export default function NewsSection() {
  const { blogPosts } = useSiteData();
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <SectionWrapper
      id="news"
      title="Latest News & Insights"
      subtitle="Stay updated with the latest in technology and company news"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {latestPosts.map((post, index) => (
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
                <span className="mx-1">|</span>
                <span>{post.author}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-text-secondary text-sm line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-1 mt-4 text-red-400 text-sm font-medium group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/blog" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-colors">
          View All Articles
        </a>
      </div>
    </SectionWrapper>
  );
}