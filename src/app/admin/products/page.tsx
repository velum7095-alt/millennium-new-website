'use client';

import { useState } from 'react';
import { useSiteData } from '../../../hooks/useSiteData';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { Product } from '../../../data/types';
import { generateId } from '../../../lib/utils';
import { productCategories } from '../../../data/productCategories';

const emptyProduct = { name: '', category: 'laptops', description: '', image: '', price: 'Contact for Price', features: [''], isFeatured: false, brand: '' };

export default function AdminProducts() {
  const { products, setProducts } = useSiteData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyProduct);

  const handleAdd = () => {
    setProducts([...products, { id: generateId(), ...form, features: form.features.filter(f => f) }]);
    setForm(emptyProduct);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this product?')) setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setForm({ name: product.name, category: product.category, description: product.description, image: product.image, price: product.price, features: product.features.length ? product.features : [''], isFeatured: product.isFeatured, brand: product.brand });
  };

  const handleUpdate = () => {
    setProducts(products.map(p => p.id === editingId ? { ...p, ...form, features: form.features.filter(f => f) } : p));
    setEditingId(null);
    setForm(emptyProduct);
  };

  const addFeature = () => setForm({ ...form, features: [...form.features, ''] });
  const updateFeature = (idx: number, val: string) => { const f = [...form.features]; f[idx] = val; setForm({ ...form, features: f }); };
  const removeFeature = (idx: number) => setForm({ ...form, features: form.features.filter((_, i) => i !== idx) });

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Products</h1>
      <p className="text-text-secondary mb-8">Manage your product catalog</p>

      <div className="glass p-6 mb-8">
        <h3 className="text-white font-medium mb-4">{editingId ? 'Edit Product' : 'Add New Product'}</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Product Name" />
          <input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Brand" />
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none">
            {productCategories.map(cat => <option key={cat.id} value={cat.slug}>{cat.name}</option>)}
          </select>
          <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Price" />
          <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Image URL" />
          <label className="flex items-center gap-2 text-text-secondary text-sm"><input type="checkbox" checked={form.isFeatured} onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })} className="rounded" /> Featured Product</label>
        </div>
        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 mb-4" placeholder="Description" rows={3} />
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2"><label className="text-text-secondary text-sm">Features</label><button onClick={addFeature} className="text-red-400 text-sm hover:text-red-300">+ Add Feature</button></div>
          {form.features.map((f, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input value={f} onChange={(e) => updateFeature(i, e.target.value)} className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50" placeholder="Feature" />
              <button onClick={() => removeFeature(i)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400"><Trash2 className="w-3 h-3" /></button>
            </div>
          ))}
        </div>
        {editingId ? (
          <button onClick={handleUpdate} className="gradient-bg px-6 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"><Save className="w-4 h-4" /> Update Product</button>
        ) : (
          <button onClick={handleAdd} className="gradient-bg px-6 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"><Plus className="w-4 h-4" /> Add Product</button>
        )}
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="glass p-4 flex items-center justify-between card-hover">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white/20 font-bold">{product.brand.charAt(0)}</div>
              <div>
                <p className="text-white font-medium text-sm">{product.name}</p>
                <p className="text-text-secondary text-xs">{product.brand} | {product.category} {product.isFeatured && '| Featured'}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(product)} className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-white"><Edit3 className="w-4 h-4" /></button>
              <button onClick={() => handleDelete(product.id)} className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/40"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}