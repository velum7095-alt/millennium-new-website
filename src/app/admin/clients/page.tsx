'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { Client } from '../../../data/types';
import { generateId } from '../../../lib/utils';

export default function AdminClients() {
  const { clients, setClients } = useSiteData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', logo: '', category: 'Corporate' });

  const handleAdd = () => {
    setClients([...clients, { id: generateId(), ...form }]);
    setForm({ name: '', logo: '', category: 'Corporate' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this client?')) setClients(clients.filter(c => c.id !== id));
  };

  const handleEdit = (client: Client) => {
    setEditingId(client.id);
    setForm({ name: client.name, logo: client.logo, category: client.category });
  };

  const handleUpdate = () => {
    setClients(clients.map(c => c.id === editingId ? { ...c, ...form } : c));
    setEditingId(null);
    setForm({ name: '', logo: '', category: 'Corporate' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Trusted Clients</h1>
      <p className="text-text-secondary mb-8">Manage client logos and categories</p>

      <div className="glass p-6 mb-8">
        <h3 className="text-slate-900 font-medium mb-4">{editingId ? 'Edit Client' : 'Add New Client'}</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Client Name" />
          <input value={form.logo} onChange={(e) => setForm({ ...form, logo: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Logo URL" />
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none">
            <option value="Corporate">Corporate</option>
            <option value="Government & NGO">Government & NGO</option>
            <option value="International Organization">International Organization</option>
          </select>
          {editingId ? (
            <button onClick={handleUpdate} className="gradient-bg px-4 py-2 rounded-lg text-slate-900 text-sm font-medium flex items-center gap-2"><Save className="w-4 h-4" /> Update</button>
          ) : (
            <button onClick={handleAdd} className="gradient-bg px-4 py-2 rounded-lg text-slate-900 text-sm font-medium flex items-center gap-2"><Plus className="w-4 h-4" /> Add</button>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <div key={client.id} className="glass p-4 flex items-center justify-between card-hover">
            <div className="flex items-center gap-3">
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="w-12 h-12 object-contain rounded-lg" />
              ) : (
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-slate-900 font-bold">{client.name.charAt(0)}</div>
              )}
              <div>
                <p className="text-slate-900 font-medium text-sm">{client.name}</p>
                <span className="text-text-secondary text-xs">{client.category}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(client)} className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-slate-900"><Edit3 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(client.id)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/40"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}