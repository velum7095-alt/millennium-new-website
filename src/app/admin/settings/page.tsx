'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save } from 'lucide-react';

export default function AdminSettings() {
  const { settings, setSettings } = useSiteData();
  const [form, setForm] = useState(settings);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-text-secondary">Manage SEO, contact info, and site settings</p>
        </div>
        <button onClick={handleSave} className="gradient-bg px-6 py-3 rounded-xl text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-red-500/25 transition-all">
          <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Company Info */}
        <div className="glass p-6">
          <h3 className="text-white font-medium mb-4">Company Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Company Name" />
            <input value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Tagline" />
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Phone" />
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Email" />
            <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 md:col-span-2" placeholder="Address" />
            <input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="WhatsApp Number" />
            <input value={form.copyrightText} onChange={(e) => setForm({ ...form, copyrightText: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Copyright Text" />
          </div>
        </div>

        {/* Social Links */}
        <div className="glass p-6">
          <h3 className="text-white font-medium mb-4">Social Media Links</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {form.socialLinks.map((link, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-text-secondary text-sm w-24">{link.platform}</span>
                <input value={link.url} onChange={(e) => { const newLinks = [...form.socialLinks]; newLinks[i] = { ...newLinks[i], url: e.target.value }; setForm({ ...form, socialLinks: newLinks }); }} className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="URL" />
              </div>
            ))}
          </div>
        </div>

        {/* SEO Settings */}
        <div className="glass p-6">
          <h3 className="text-white font-medium mb-4">SEO Settings</h3>
          <div className="space-y-4">
            <input value={form.seoTitle} onChange={(e) => setForm({ ...form, seoTitle: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="SEO Title" />
            <textarea value={form.seoDescription} onChange={(e) => setForm({ ...form, seoDescription: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="SEO Description" rows={3} />
            <div>
              <label className="text-text-secondary text-sm mb-2 block">SEO Keywords</label>
              <div className="flex flex-wrap gap-2">
                {form.seoKeywords.map((kw, i) => (
                  <span key={i} className="glass px-3 py-1 text-xs text-text-secondary">{kw}</span>
                ))}
              </div>
            </div>
            <input value={form.googleAnalyticsId} onChange={(e) => setForm({ ...form, googleAnalyticsId: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Google Analytics ID (e.g. G-XXXXXXXXXX)" />
          </div>
        </div>
      </div>
    </div>
  );
}