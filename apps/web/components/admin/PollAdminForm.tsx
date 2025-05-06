// DOCORE: 어드민 전용 투표 등록/수정 폼 컴포넌트. 질문, 카테고리, 옵션 입력. 등록/수정 모드 모두 지원.
import React, { useState } from 'react';
import { Poll } from '@/types/poll';
import Card from '@/components/design/Card';
import { PrimaryButton } from '@/components/design/Button';
import { SubTitle } from '@/components/design/Typography';

interface PollAdminFormProps {
  initial?: Partial<Poll>;
  categories: { id: number; name: string }[];
  onSubmit: (data: { question: string; categoryId: number; options: string[] }) => void;
  onCancel: () => void;
}

export default function PollAdminForm({ initial, categories, onSubmit, onCancel }: PollAdminFormProps) {
  const [question, setQuestion] = useState(initial?.question || '');
  const [categoryId, setCategoryId] = useState(initial?.categories?.id || categories[0]?.id || 1);
  const [options, setOptions] = useState<string[]>(initial?.options?.map(o => o.text) || ['좋아요', '몰라요', '싫어요']);

  const handleOptionChange = (idx: number, value: string) => {
    setOptions(opts => opts.map((o, i) => (i === idx ? value : o)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return alert('질문을 입력하세요');
    if (!categoryId) return alert('카테고리를 선택하세요');
    if (options.some(o => !o.trim())) return alert('모든 옵션을 입력하세요');
    onSubmit({ question, categoryId, options });
  };

  return (
    <Card marginBottom="1.5rem">
      <form onSubmit={handleSubmit}>
        <SubTitle style={{ marginBottom: 16 }}>{initial ? '질문 수정' : '질문 등록'}</SubTitle>
        <div style={{ marginBottom: 12 }}>
          <label>질문<br />
            <input value={question} onChange={e => setQuestion(e.target.value)} style={{ width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #e5e7eb', marginTop: 4 }} />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>카테고리<br />
            <select value={categoryId} onChange={e => setCategoryId(Number(e.target.value))} style={{ width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #e5e7eb', marginTop: 4 }}>
              {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
            </select>
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          옵션<br />
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            {options.map((opt, idx) => (
              <input key={idx} value={opt} onChange={e => handleOptionChange(idx, e.target.value)} style={{ flex: 1, padding: '0.7rem', borderRadius: 8, border: '1px solid #e5e7eb' }} />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <PrimaryButton type="submit" style={{ flex: 1 }}>{initial ? '수정 완료' : '등록'}</PrimaryButton>
          <PrimaryButton type="button" onClick={onCancel} style={{ flex: 1, background: '#e5e7eb', color: '#222' }}>취소</PrimaryButton>
        </div>
      </form>
    </Card>
  );
} 