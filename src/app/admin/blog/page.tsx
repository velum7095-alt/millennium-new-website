'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { BlogPost } from '../../../data/types';
import { generateId, slugify } from '../../../lib/utils';

const emptyBlog = { title: '', slug: '', excerpt: '', content: '', image: '', category: '', author: '', publishedDate: new Date().toISOString().split('T')[0], tags: [''], seoTitle: '', seoDescription: '' };

export default function AdminBlog() {
  const { blogPosts, setBlogPosts } = useSiteData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyBlog);

  const handleAdd = () => {
    const slug = form.slug || slugify(form.title);
    setBlogPosts([...blogPosts, { id: generateId(), ...form, slug, tags: form.tags.filter(t => t) }]);
    setForm(emptyBlog);
  };
  const handleDelete = (id: string) => { if (confirm('Delete?')) setBlogPosts(blogPosts.filter(b => b.id !== id)); };
  const handleEdit = (b: BlogPost) => { setEditingId(b.id); setForm({ title: b.title, slug: b.slug, excerpt: b.excerpt, content: b.content, image: b.image, category: b.category, author: b.author, publishedDate: b.publishedDate, tags: b.tags.length ? b.tags : [''], seoTitle: b.seoTitle, seoDescription: b.seoDescription }); };
  const handleUpdate = () => { setBlogPosts(blogPosts.map(b => b.id === editingId ? { ...b, ...form, tags: form.tags.filter(t => t) } : b)); setEditingId(null); setForm(emptyBlog); };

  const addTag = () => setForm({ ...form, tags: [...form.tags, ''] });
  const updateTag = (idx: number, val: string) => { const t = [...form.tags]; t[idx] = val; setForm({ ...form, tags: t }); };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Blog Posts</h1>
      <p className="text-text-secondary mb-8">Manage news, articles, and blog content</p>

      <div className="glass p-6 mb-8">
        <h3 className="text-white font-medium mb-4">{editingId ? 'Edit Post' : 'Add New Post'}</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Title" />
          <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Slug (auto-generated if empty)" />
          <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Category" />
          <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Author" />
          <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Image URL" />
          <input type="date" value={form.publishedDate} onChange={(e) => setForm({ ...form, publishedDate: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" />
        </div>
        <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 mb-4" placeholder="Excerpt" rows={2} />
        <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 mb-4" placeholder="Content" rows={6} />
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input value={form.seoTitle} onChange={(e) => setForm({ ...form, seoTitle: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="SEO Title" />
          <input value={form.seoDescription} onChange={(e) => setForm({ ...form, seoDescription: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="SEO Description" />
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2"><label className="text-text-secondary text-sm">Tags</label><button onClick={addTag} className="text-red-400 text-sm">+ Add Tag</button></div>
          {form.tags.map((tag, i) => (
            <input key={i} value={tag} onChange={(e) => updateTag(i, e.target.value)} className="w-full md:w-1/3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 mb-2" placeholder="Tag" />
          ))}
        </div>
        {editingId ? (
          <button onClick={handleUpdate} className="gradient-bg px-6 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"><Save className="w-4 h-4" /> Update</button>
        ) : (
          <button onClick={handleAdd} className="gradient-bg px-6 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"><Plus className="w-4 h-4" /> Add Post</button>
        )}
      </div>

      <div className="space-y-3">
        {blogPosts.map((b) => (
          <div key={b.id} className="glass p-4 flex items-center justify-between card-hover">
            <div><p className="text-white font-medium text-sm">{b.title}</p><p className="text-text-secondary text-xs">{b.category} | {b.publishedDate}</p></div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(b)} className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-white"><Edit3 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(b.id)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/40"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}