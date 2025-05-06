// DOCORE: 카테고리 선택 컴포넌트 (복구)
import React from 'react';

interface Category {
  id: number;
  name: string;
}

interface CategorySelectorProps {
  categories?: Category[];
  value: number | null;
  onChange: (id: number | null) => void;
  disabled?: boolean;
}

export function CategorySelector({ categories = [], value, onChange, disabled }: CategorySelectorProps) {
  return (
    <select 
      value={value ?? ''} 
      onChange={e => onChange(e.target.value ? Number(e.target.value) : null)}
      disabled={disabled}
      style={{ 
        width: '100%', 
        padding: '0.7rem', 
        borderRadius: 8, 
        border: '1px solid #e5e7eb', 
        marginTop: 4,
        marginBottom: '1rem'
      }}
    >
      <option value="">카테고리 선택</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))}
    </select>
  );
} 