'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { useSiteData } from '../../../hooks/useSiteData';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { blogPosts } = useSiteData();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-red-400 hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <article className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Calendar className="w-4 h-4" /> {post.publishedDate}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">{post.title}</h1>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <p className="text-text-secondary leading-relaxed">{post.content}</p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-text-secondary" />
                <span className="text-text-secondary text-sm">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="glass px-3 py-1 text-sm text-text-secondary">{tag}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 glass-strong p-6">
              <p className="text-text-secondary text-sm mb-2">Written by</p>
              <p className="text-white font-bold">{post.author}</p>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}