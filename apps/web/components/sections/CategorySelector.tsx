// DOCORE: 카테고리 선택 컴포넌트 (복구)
import React from 'react';

interface Category {
  id: number;
  name: string;
}

interface CategorySelectorProps {
  categories: Category[];
  value: number;
  onChange: (id: number) => void;
}

export function CategorySelector({ categories, value, onChange }: CategorySelectorProps) {
  return (
    <select value={value} onChange={e => onChange(Number(e.target.value))} style={{ width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #e5e7eb', marginTop: 4 }}>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))}
    </select>
  );
} 