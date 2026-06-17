'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Monitor, Image, Users, ShoppingBag, MessageSquare, BarChart3, Settings, Home, Award, Building } from 'lucide-react';

const adminLinks = [
  { label: 'Dashboard', href: '/admin', icon: Home },
  { label: 'Hero Banners', href: '/admin/hero', icon: Image },
  { label: 'Partners', href: '/admin/partners', icon: Award },
  { label: 'Clients', href: '/admin/clients', icon: Building },
  { label: 'Products', href: '/admin/products', icon: ShoppingBag },
  { label: 'Team', href: '/admin/team', icon: Users },
  { label: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { label: 'Statistics', href: '/admin/stats', icon: BarChart3 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-secondary-bg border-r border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
            <Monitor className="w-5 h-5 text-slate-900" />
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900">Admin Panel</span>
            <p className="text-xs text-text-secondary">Millennium Infosys</p>
          </div>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {adminLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'gradient-bg text-slate-900 shadow-lg shadow-red-500/25'
                  : 'text-text-secondary hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-200">
        <Link href="/" className="flex items-center gap-2 text-text-secondary hover:text-slate-900 text-sm transition-colors">
          <Home className="w-4 h-4" /> View Website
        </Link>
      </div>
    </aside>
  );
}