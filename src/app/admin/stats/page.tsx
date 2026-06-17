'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save } from 'lucide-react';

export default function AdminStats() {
  const { stats, setStats } = useSiteData();
  const [form, setForm] = useState(stats);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setStats(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Statistics</h1>
          <p className="text-text-secondary">Manage the animated statistics displayed on the homepage</p>
        </div>
        <button onClick={handleSave} className="gradient-bg px-6 py-3 rounded-xl text-slate-900 font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-red-500/25 transition-all">
          <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-4">
        {form.map((stat, index) => (
          <div key={stat.id} className="glass p-4">
            <div className="grid md:grid-cols-4 gap-4 items-center">
              <div>
                <label className="text-text-secondary text-xs block mb-1">Label</label>
                <input value={stat.label} onChange={(e) => { const newStats = [...form]; newStats[index] = { ...newStats[index], label: e.target.value }; setForm(newStats); }} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" />
              </div>
              <div>
                <label className="text-text-secondary text-xs block mb-1">Value</label>
                <input type="number" value={stat.value} onChange={(e) => { const newStats = [...form]; newStats[index] = { ...newStats[index], value: Number(e.target.value) }; setForm(newStats); }} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" />
              </div>
              <div>
                <label className="text-text-secondary text-xs block mb-1">Suffix</label>
                <input value={stat.suffix} onChange={(e) => { const newStats = [...form]; newStats[index] = { ...newStats[index], suffix: e.target.value }; setForm(newStats); }} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-red-500/50" />
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold gradient-text">{stat.value.toLocaleString()}{stat.suffix}</span>
                <p className="text-text-secondary text-xs">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}