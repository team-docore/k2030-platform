// DOCORE: 어드민 전용 투표 목록/삭제/수정 테이블 컴포넌트. 관리자만 접근 가능.
import React, { useEffect, useState } from 'react';
import { Poll } from '@/types/poll';
import PollAdminForm from './PollAdminForm';
import Card from '@/components/design/Card';
import { PrimaryButton } from '@/components/design/Button';
import { Title, SubTitle, Category, DateText } from '@/components/design/Typography';

export default function PollAdminTable() {
  // DOCORE: 투표 목록 상태
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // DOCORE: 카테고리 목록 상태
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  // DOCORE: 폼 상태 (등록/수정)
  const [showForm, setShowForm] = useState(false);
  const [editPoll, setEditPoll] = useState<Poll | null>(null);
  const [expandedPollId, setExpandedPollId] = useState<string | null>(null);
  const [expandedPoll, setExpandedPoll] = useState<Poll | null>(null);

  // DOCORE: 투표 목록 불러오기
  const fetchPolls = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/polls');
      if (!res.ok) throw new Error('투표 목록 불러오기 실패');
      const data = await res.json();
      setPolls(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류');
    } finally {
      setLoading(false);
    }
  };

  // DOCORE: 카테고리 목록 불러오기
  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      if (!res.ok) throw new Error('카테고리 목록 불러오기 실패');
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchPolls();
    fetchCategories();
  }, []);

  // DOCORE: 삭제 버튼 클릭 시
  const handleDelete = async (pollId: string) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    try {
      const res = await fetch(`/api/polls/${pollId}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('삭제 실패');
      setPolls(polls.filter(p => p.id !== pollId));
    } catch (err) {
      alert(err instanceof Error ? err.message : '알 수 없는 오류');
    }
  };

  // DOCORE: 등록 폼 열기
  const handleShowCreate = () => {
    setEditPoll(null);
    setShowForm(true);
  };

  // DOCORE: 수정 폼 열기
  const handleShowEdit = (poll: Poll) => {
    setEditPoll(poll);
    setShowForm(true);
  };

  // DOCORE: 폼 제출(등록/수정) 처리
  const handleFormSubmit = async (data: { question: string; categoryId: number; options: string[] }) => {
    try {
      if (editPoll) {
        // 수정
        const res = await fetch(`/api/polls/${editPoll.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: data.question,
            category_id: data.categoryId,
            options: data.options
          })
        });
        if (!res.ok) throw new Error('수정 실패');
      } else {
        // 등록
        const res = await fetch('/api/polls', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: data.question,
            category_id: data.categoryId,
            options: data.options
          })
        });
        if (!res.ok) throw new Error('등록 실패');
      }
      setShowForm(false);
      setEditPoll(null);
      await fetchPolls();
    } catch (err) {
      alert(err instanceof Error ? err.message : '알 수 없는 오류');
    }
  };

  // DOCORE: 폼 취소
  const handleFormCancel = () => {
    setShowForm(false);
    setEditPoll(null);
  };

  // 날짜 포맷 함수
  function formatDate(dateStr?: string) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ` +
      `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
  }

  // 행 클릭 시 상세 통계 표시
  const handleRowClick = async (poll: Poll) => {
    if (expandedPollId === poll.id) {
      setExpandedPollId(null);
      setExpandedPoll(null);
      return;
    }
    // 최신 데이터 보장 위해 상세 API 호출
    try {
      const res = await fetch(`/api/polls/${poll.id}`);
      if (!res.ok) throw new Error('상세 정보 불러오기 실패');
      const data = await res.json();
      setExpandedPollId(poll.id);
      setExpandedPoll(data);
    } catch {
      setExpandedPollId(poll.id);
      setExpandedPoll(poll); // fallback
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginTop: 16, color: '#666' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
          <SubTitle>투표 목록</SubTitle>
          <PrimaryButton 
            style={{ maxWidth: 150, padding: '0.3rem 1.2rem', fontSize: 14 }} 
            onClick={handleShowCreate}
          >
            + 질문 등록
          </PrimaryButton>
        </div>
        {showForm && (
          <PollAdminForm
            initial={editPoll || undefined}
            categories={categories}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        )}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', marginTop: 16, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#222', fontWeight: 700 }}>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>질문</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>카테고리</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>투표내용</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>총투표수</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>생성일</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>수정</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>삭제</th>
              </tr>
            </thead>
            <tbody>
              {polls.map((poll, idx) => [
                <tr key={poll.id} style={{ borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => handleRowClick(poll)}>
                  <td style={{ padding: '10px 8px', fontWeight: 600 }}>{poll.question}</td>
                  <td style={{ padding: '10px 8px' }}><Category>{poll.categories?.name || '-'}</Category></td>
                  <td style={{ padding: '10px 8px' }}>{Array.isArray(poll.options) ? poll.options.map(o => (typeof o === 'string' ? o : o.text)).join(', ') : '-'}</td>
                  <td style={{ padding: '10px 8px', fontWeight: 600 }}>{poll.totalVotes ?? 0}</td>
                  <td style={{ padding: '10px 8px' }}><DateText>{formatDate(poll.createdAt)}</DateText></td>
                  <td style={{ padding: '10px 8px' }}>
                    <PrimaryButton style={{ padding: '0.3rem 1.2rem', fontSize: 14 }} onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleShowEdit(poll); }}>수정</PrimaryButton>
                  </td>
                  <td style={{ padding: '10px 8px' }}>
                    <PrimaryButton style={{ padding: '0.3rem 1.2rem', fontSize: 14, background: '#e5e7eb', color: '#222' }} onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleDelete(poll.id); }}>삭제</PrimaryButton>
                  </td>
                </tr>,
                expandedPollId === poll.id && expandedPoll && (
                  <tr key={poll.id + '-stats'}>
                    <td colSpan={7} style={{ background: '#f8fafc', padding: 20 }}>
                      <div style={{ marginBottom: 10, fontWeight: 700, color: '#222' }}>
                        총 투표수: {expandedPoll.totalVotes ?? 0}명
                      </div>
                      <div style={{ maxWidth: 480 }}>
                        {Array.isArray(expandedPoll.options) && expandedPoll.options.length > 0 ? expandedPoll.options.map((opt: any, i: number) => {
                          const count = opt.votes ?? 0;
                          const total = expandedPoll.totalVotes ?? 0;
                          const percent = total > 0 ? (count / total) * 100 : 0;
                          return (
                            <div key={opt.id || i} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                              <span style={{ width: 80, fontWeight: 600 }}>{opt.text}</span>
                              <div style={{ flex: 1, background: '#e5e7eb', borderRadius: 8, height: 18, margin: '0 8px', position: 'relative' }}>
                                <div style={{
                                  width: `${percent}%`,
                                  background: '#4d8888',
                                  height: '100%',
                                  borderRadius: 8,
                                  transition: 'width 0.3s'
                                }} />
                              </div>
                              <span style={{ minWidth: 40, textAlign: 'right', fontWeight: 600 }}>{count}명</span>
                            </div>
                          );
                        }) : <span>옵션 없음</span>}
                      </div>
                    </td>
                  </tr>
                )
              ])}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 