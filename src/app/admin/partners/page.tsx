'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { Partner } from '../../../data/types';
import { generateId } from '../../../lib/utils';

export default function AdminPartners() {
  const { partners, setPartners } = useSiteData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', logo: '', isAuthorized: true });
  const [saved, setSaved] = useState(false);

  const handleAdd = () => {
    const newPartner: Partner = { id: generateId(), ...form };
    setPartners([...partners, newPartner]);
    setForm({ name: '', logo: '', isAuthorized: true });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this partner?')) {
      setPartners(partners.filter(p => p.id !== id));
    }
  };

  const handleEdit = (partner: Partner) => {
    setEditingId(partner.id);
    setForm({ name: partner.name, logo: partner.logo, isAuthorized: partner.isAuthorized });
  };

  const handleUpdate = () => {
    setPartners(partners.map(p => p.id === editingId ? { ...p, ...form } : p));
    setEditingId(null);
    setForm({ name: '', logo: '', isAuthorized: true });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Channel Partners</h1>
          <p className="text-text-secondary">Manage official brand partner logos and details</p>
        </div>
      </div>

      {/* Add/Edit Form */}
      <div className="glass p-6 mb-8">
        <h3 className="text-white font-medium mb-4">{editingId ? 'Edit Partner' : 'Add New Partner'}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Partner Name" />
          <input value={form.logo} onChange={(e) => setForm({ ...form, logo: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Logo URL" />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-text-secondary text-sm">
              <input type="checkbox" checked={form.isAuthorized} onChange={(e) => setForm({ ...form, isAuthorized: e.target.checked })} className="rounded" />
              Authorized Partner
            </label>
            {editingId ? (
              <button onClick={handleUpdate} className="gradient-bg px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"><Save className="w-4 h-4" /> Update</button>
            ) : (
              <button onClick={handleAdd} className="gradient-bg px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"><Plus className="w-4 h-4" /> Add</button>
            )}
          </div>
        </div>
      </div>

      {/* Partners List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partners.map((partner) => (
          <div key={partner.id} className="glass p-4 flex items-center justify-between card-hover">
            <div className="flex items-center gap-3">
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain rounded-lg" />
              ) : (
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white font-bold">{partner.name.charAt(0)}</div>
              )}
              <div>
                <p className="text-white font-medium text-sm">{partner.name}</p>
                {partner.isAuthorized && <span className="text-accent-gold text-xs">Authorized</span>}
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(partner)} className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-white"><Edit3 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(partner.id)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/40"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}