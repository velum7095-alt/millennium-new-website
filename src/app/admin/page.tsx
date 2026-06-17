'use client';

import { useSiteData } from '../../hooks/useSiteData';
import { ShoppingBag, Users, Award, Briefcase, MessageSquare, Newspaper, BarChart3 } from 'lucide-react';

export default function AdminDashboard() {
  const { products, team, partners, projects, testimonials, blogPosts, clients } = useSiteData();

  const stats = [
    { label: 'Products', count: products.length, icon: ShoppingBag, color: 'from-red-600 to-red-400' },
    { label: 'Team Members', count: team.length, icon: Users, color: 'from-red-300 to-red-400' },
    { label: 'Partners', count: partners.length, icon: Award, color: 'from-amber-600 to-amber-400' },
    { label: 'Clients', count: clients.length, icon: Users, color: 'from-green-600 to-green-400' },
    { label: 'Projects', count: projects.length, icon: Briefcase, color: 'from-purple-600 to-purple-400' },
    { label: 'Testimonials', count: testimonials.length, icon: MessageSquare, color: 'from-pink-600 to-pink-400' },
    { label: 'Blog Posts', count: blogPosts.length, icon: Newspaper, color: 'from-orange-600 to-orange-400' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
      <p className="text-text-secondary mb-8">Welcome to Millennium Infosys CMS. Manage your website content below.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="glass p-6 card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-slate-900" />
                </div>
                <span className="text-3xl font-bold text-slate-900">{stat.count}</span>
              </div>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="glass p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <a href="/admin/products" className="glass px-4 py-3 text-sm text-text-secondary hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors text-center">Add Product</a>
            <a href="/admin/team" className="glass px-4 py-3 text-sm text-text-secondary hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors text-center">Add Team Member</a>
            <a href="/admin/blog" className="glass px-4 py-3 text-sm text-text-secondary hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors text-center">Write Blog Post</a>
            <a href="/admin/partners" className="glass px-4 py-3 text-sm text-text-secondary hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors text-center">Add Partner</a>
          </div>
        </div>
        <div className="glass p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Blog Posts</h3>
          <div className="space-y-3">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="flex items-center justify-between py-2 border-b border-slate-200">
                <div>
                  <p className="text-slate-900 text-sm font-medium">{post.title}</p>
                  <p className="text-text-secondary text-xs">{post.publishedDate}</p>
                </div>
                <span className="text-xs gradient-bg px-2 py-1 rounded-full text-slate-900">{post.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}