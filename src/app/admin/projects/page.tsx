'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { Project } from '../../../data/types';
import { generateId } from '../../../lib/utils';

const emptyProject = { title: '', client: '', description: '', images: [] as string[], category: '', completedDate: '', testimonial: '' };

export default function AdminProjects() {
  const { projects, setProjects } = useSiteData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyProject);

  const handleAdd = () => { setProjects([...projects, { id: generateId(), ...form }]); setForm(emptyProject); };
  const handleDelete = (id: string) => { if (confirm('Delete?')) setProjects(projects.filter(p => p.id !== id)); };
  const handleEdit = (p: Project) => { setEditingId(p.id); setForm({ title: p.title, client: p.client, description: p.description, images: p.images, category: p.category, completedDate: p.completedDate, testimonial: p.testimonial }); };
  const handleUpdate = () => { setProjects(projects.map(p => p.id === editingId ? { ...p, ...form } : p)); setEditingId(null); setForm(emptyProject); };

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Corporate Projects</h1>
      <p className="text-text-secondary mb-8">Manage project showcases</p>

      <div className="glass p-6 mb-8">
        <h3 className="text-slate-900 font-medium mb-4">{editingId ? 'Edit Project' : 'Add New Project'}</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Project Title" />
          <input value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Client Name" />
          <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Category" />
          <input value={form.completedDate} onChange={(e) => setForm({ ...form, completedDate: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Completed Date" />
        </div>
        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50 mb-4" placeholder="Description" rows={3} />
        <textarea value={form.testimonial} onChange={(e) => setForm({ ...form, testimonial: e.target.value })} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50 mb-4" placeholder="Client Testimonial" rows={2} />
        {editingId ? (
          <button onClick={handleUpdate} className="gradient-bg px-6 py-2 rounded-lg text-slate-900 text-sm font-medium flex items-center gap-2"><Save className="w-4 h-4" /> Update</button>
        ) : (
          <button onClick={handleAdd} className="gradient-bg px-6 py-2 rounded-lg text-slate-900 text-sm font-medium flex items-center gap-2"><Plus className="w-4 h-4" /> Add Project</button>
        )}
      </div>

      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="glass p-4 flex items-center justify-between card-hover">
            <div><p className="text-slate-900 font-medium text-sm">{p.title}</p><p className="text-text-secondary text-xs">{p.client} | {p.category}</p></div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(p)} className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-slate-900"><Edit3 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(p.id)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/40"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}