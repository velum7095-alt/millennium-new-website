'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { Testimonial } from '../../../data/types';
import { generateId } from '../../../lib/utils';

const emptyTestimonial = { clientName: '', company: '', photo: '', review: '', rating: 5, position: '' };

export default function AdminTestimonials() {
  const { testimonials, setTestimonials } = useSiteData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyTestimonial);

  const handleAdd = () => { setTestimonials([...testimonials, { id: generateId(), ...form }]); setForm(emptyTestimonial); };
  const handleDelete = (id: string) => { if (confirm('Delete?')) setTestimonials(testimonials.filter(t => t.id !== id)); };
  const handleEdit = (t: Testimonial) => { setEditingId(t.id); setForm({ clientName: t.clientName, company: t.company, photo: t.photo, review: t.review, rating: t.rating, position: t.position }); };
  const handleUpdate = () => { setTestimonials(testimonials.map(t => t.id === editingId ? { ...t, ...form } : t)); setEditingId(null); setForm(emptyTestimonial); };

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Testimonials</h1>
      <p className="text-text-secondary mb-8">Manage client testimonials and reviews</p>

      <div className="glass p-6 mb-8">
        <h3 className="text-slate-900 font-medium mb-4">{editingId ? 'Edit Testimonial' : 'Add New Testimonial'}</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Client Name" />
          <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Company" />
          <input value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Position" />
          <input value={form.photo} onChange={(e) => setForm({ ...form, photo: e.target.value })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" placeholder="Photo URL" />
          <div className="flex items-center gap-2">
            <label className="text-text-secondary text-sm">Rating:</label>
            <select value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none">
              {[1,2,3,4,5].map(r => <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>)}
            </select>
          </div>
        </div>
        <textarea value={form.review} onChange={(e) => setForm({ ...form, review: e.target.value })} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50 mb-4" placeholder="Review" rows={3} />
        {editingId ? (
          <button onClick={handleUpdate} className="gradient-bg px-6 py-2 rounded-lg text-slate-900 text-sm font-medium flex items-center gap-2"><Save className="w-4 h-4" /> Update</button>
        ) : (
          <button onClick={handleAdd} className="gradient-bg px-6 py-2 rounded-lg text-slate-900 text-sm font-medium flex items-center gap-2"><Plus className="w-4 h-4" /> Add Testimonial</button>
        )}
      </div>

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="glass p-4 flex items-center justify-between card-hover">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">{t.clientName.charAt(0)}</div>
              <div><p className="text-slate-900 font-medium text-sm">{t.clientName} - {t.company}</p><p className="text-accent-gold text-xs">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</p></div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(t)} className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-slate-900"><Edit3 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(t.id)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/40"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}