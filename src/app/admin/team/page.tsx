'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { TeamMember } from '../../../data/types';
import { generateId } from '../../../lib/utils';

const emptyTeam = { name: '', position: '', department: '', photo: '', experience: '', email: '', phone: '', socialLinks: [{ platform: 'LinkedIn', url: '#' }] };

export default function AdminTeam() {
  const { team, setTeam } = useSiteData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyTeam);

  const handleAdd = () => { setTeam([...team, { id: generateId(), ...form }]); setForm(emptyTeam); };
  const handleDelete = (id: string) => { if (confirm('Delete?')) setTeam(team.filter(t => t.id !== id)); };
  const handleEdit = (m: TeamMember) => { setEditingId(m.id); setForm({ name: m.name, position: m.position, department: m.department, photo: m.photo, experience: m.experience, email: m.email, phone: m.phone, socialLinks: m.socialLinks }); };
  const handleUpdate = () => { setTeam(team.map(t => t.id === editingId ? { ...t, ...form } : t)); setEditingId(null); setForm(emptyTeam); };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Team Members</h1>
      <p className="text-text-secondary mb-8">Manage staff profiles and information</p>

      <div className="glass p-6 mb-8">
        <h3 className="text-white font-medium mb-4">{editingId ? 'Edit Member' : 'Add New Member'}</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Full Name" />
          <input value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Position" />
          <input value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Department" />
          <input value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Experience" />
          <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Email" />
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Phone" />
          <input value={form.photo} onChange={(e) => setForm({ ...form, photo: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Photo URL" />
        </div>
        {editingId ? (
          <button onClick={handleUpdate} className="gradient-bg px-6 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"><Save className="w-4 h-4" /> Update</button>
        ) : (
          <button onClick={handleAdd} className="gradient-bg px-6 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"><Plus className="w-4 h-4" /> Add Member</button>
        )}
      </div>

      <div className="space-y-3">
        {team.map((m) => (
          <div key={m.id} className="glass p-4 flex items-center justify-between card-hover">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-sm">{m.name.split(' ').map(n => n[0]).join('')}</div>
              <div><p className="text-white font-medium text-sm">{m.name}</p><p className="text-text-secondary text-xs">{m.position} | {m.department}</p></div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(m)} className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-white"><Edit3 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(m.id)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/40"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}