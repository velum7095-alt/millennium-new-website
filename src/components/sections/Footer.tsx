'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Globe, ExternalLink, Send } from 'lucide-react';
import { useSiteData } from '../../hooks/useSiteData';
import { productCategories } from '../../data/productCategories';

const socialIconMap: Record<string, React.ElementType> = {
  Facebook: Globe, Twitter: ExternalLink, Instagram: Globe, Linkedin: ExternalLink,
};

export default function Footer() {
  const { settings } = useSiteData();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-secondary-bg border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt="Millennium Infosys"
              width={180}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className="text-text-secondary text-sm leading-relaxed mb-6">{settings.tagline}</p>
            <div className="space-y-3 mb-6">
              <a href={`tel:${settings.phone}`} className="flex items-center gap-2 text-text-secondary text-sm hover:text-slate-900 transition-colors">
                <Phone className="w-4 h-4 text-red-400" /> {settings.phone}
              </a>
              <a href={`mailto:${settings.email}`} className="flex items-center gap-2 text-text-secondary text-sm hover:text-slate-900 transition-colors">
                <Mail className="w-4 h-4 text-red-400" /> {settings.email}
              </a>
              <div className="flex items-start gap-2 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" /> {settings.address}
              </div>
              <a
                href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 text-sm hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: +257 6500 1555
              </a>
            </div>
            <div className="flex gap-3">
              {settings.socialLinks.map((link, i) => {
                const Icon = socialIconMap[link.platform] || Globe;
                return (
                  <a key={i} href={link.url} className="w-9 h-9 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-slate-900 hover:bg-slate-100 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-text-secondary text-sm hover:text-slate-900 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {productCategories.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <a href={`/products/${cat.slug}`} className="text-text-secondary text-sm hover:text-slate-900 transition-colors">{cat.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Newsletter</h4>
            <p className="text-text-secondary text-sm mb-4">Subscribe for the latest technology updates and offers.</p>
            {subscribed ? (
              <p className="text-green-400 text-sm font-medium">Subscribed successfully!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm placeholder-text-secondary focus:outline-none focus:border-red-500/50"
                />
                <button type="submit" className="gradient-bg px-4 py-2.5 rounded-lg text-white hover:shadow-lg hover:shadow-red-500/25 transition-all">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
            <div className="mt-6">
              <a
                href="https://wa.me/25765001555?text=Hello%20Millennium%20Infosys!%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Get a Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">{settings.copyrightText}</p>
          <p className="text-text-secondary text-xs">Designed with excellence for Millennium Infosys Ltd</p>
        </div>
      </div>
    </footer>
  );
}