// DOCORE: 어드민/유저 투표 등록/수정 폼 컴포넌트 (복구)
import React, { useState } from 'react';
import styled from 'styled-components';
import { supabase } from '@/lib/supabaseClient';
import { CategorySelector } from './CategorySelector';

interface Category {
  id: number;
  name: string;
}

interface PollCreateFormProps {
  categories: Category[];
  onSubmit: (data: { question: string; categoryId: number; options: string[] }) => void;
  initial?: { question?: string; categoryId?: number; options?: string[] };
}

export function PollCreateForm({ categories, onSubmit, initial }: PollCreateFormProps) {
  const [question, setQuestion] = useState(initial?.question || '');
  const [categoryId, setCategoryId] = useState<number | null>(initial?.categoryId || categories[0]?.id || null);
  const [options, setOptions] = useState<string[]>(initial?.options || ['좋아요', '몰라요', '싫어요']);

  const handleOptionChange = (idx: number, value: string) => {
    setOptions((opts: string[]) => opts.map((o: string, i: number) => (i === idx ? value : o)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return alert('질문을 입력하세요');
    if (!categoryId) return alert('카테고리를 선택하세요');
    if (options.some((o: string) => !o.trim())) return alert('모든 옵션을 입력하세요');
    onSubmit({ question, categoryId, options });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 12 }}>
        <label>질문<br />
          <input value={question} onChange={e => setQuestion(e.target.value)} style={{ width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #e5e7eb', marginTop: 4 }} />
        </label>
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>카테고리<br />
          <CategorySelector categories={categories} value={categoryId} onChange={setCategoryId} />
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        옵션<br />
        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          {options.map((opt: string, idx: number) => (
            <input key={idx} value={opt} onChange={e => handleOptionChange(idx, e.target.value)} style={{ flex: 1, padding: '0.7rem', borderRadius: 8, border: '1px solid #e5e7eb' }} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <button type="submit" style={{ flex: 1, background: '#4d8888', color: '#fff', padding: '0.7rem', borderRadius: 8, border: 'none', fontWeight: 700 }}>등록</button>
      </div>
    </form>
  );
} 