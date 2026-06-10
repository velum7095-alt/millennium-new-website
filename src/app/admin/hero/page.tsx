'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save, Plus, Trash2 } from 'lucide-react';

export default function AdminHero() {
  const { heroData, setHeroData } = useSiteData();
  const [form, setForm] = useState(heroData);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setHeroData(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addImage = () => {
    const url = prompt('Enter image URL:');
    if (url) setForm({ ...form, images: [...form.images, url] });
  };

  const removeImage = (index: number) => {
    setForm({ ...form, images: form.images.filter((_, i) => i !== index) });
  };

  const addButton = () => {
    setForm({ ...form, ctaButtons: [...form.ctaButtons, { label: 'New Button', link: '/', variant: 'secondary' }] });
  };

  const removeButton = (index: number) => {
    setForm({ ...form, ctaButtons: form.ctaButtons.filter((_, i) => i !== index) });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Hero Section</h1>
          <p className="text-text-secondary">Manage the hero banner, headline, and CTA buttons</p>
        </div>
        <button onClick={handleSave} className="gradient-bg px-6 py-3 rounded-xl text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-red-500/25 transition-all">
          <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-6">
        <div className="glass p-6">
          <label className="text-white font-medium mb-2 block">Headline</label>
          <textarea value={form.headline} onChange={(e) => setForm({ ...form, headline: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-secondary focus:outline-none focus:border-red-500/50" rows={2} />
        </div>

        <div className="glass p-6">
          <label className="text-white font-medium mb-2 block">Subheading</label>
          <textarea value={form.subheading} onChange={(e) => setForm({ ...form, subheading: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-secondary focus:outline-none focus:border-red-500/50" rows={4} />
        </div>

        <div className="glass p-6">
          <div className="flex items-center justify-between mb-4">
            <label className="text-white font-medium">Banner Images</label>
            <button onClick={addImage} className="glass px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-white flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Image
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {form.images.map((img, idx) => (
              <div key={idx} className="relative group">
                <img src={img} alt={`Banner ${idx + 1}`} className="w-full h-32 object-cover rounded-xl" />
                <button onClick={() => removeImage(idx)} className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-6">
          <div className="flex items-center justify-between mb-4">
            <label className="text-white font-medium">CTA Buttons</label>
            <button onClick={addButton} className="glass px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-white flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Button
            </button>
          </div>
          <div className="space-y-3">
            {form.ctaButtons.map((btn, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <input value={btn.label} onChange={(e) => { const newBtns = [...form.ctaButtons]; newBtns[idx] = { ...newBtns[idx], label: e.target.value }; setForm({ ...form, ctaButtons: newBtns }); }} className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Button Label" />
                <input value={btn.link} onChange={(e) => { const newBtns = [...form.ctaButtons]; newBtns[idx] = { ...newBtns[idx], link: e.target.value }; setForm({ ...form, ctaButtons: newBtns }); }} className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Link" />
                <select value={btn.variant} onChange={(e) => { const newBtns = [...form.ctaButtons]; newBtns[idx] = { ...newBtns[idx], variant: e.target.value as 'primary' | 'secondary' }; setForm({ ...form, ctaButtons: newBtns }); }} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none">
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                </select>
                <button onClick={() => removeButton(idx)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/40">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}