'use client';

import { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ onSearch, placeholder = 'Search products...', className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }, [onSearch]);

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-secondary focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all"
      />
      {query && (
        <button onClick={handleClear} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}