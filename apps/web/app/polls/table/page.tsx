// DOCORE: 투표 목록을 테이블로 보여주는 페이지
'use client';

import React, { useEffect, useState } from 'react';
import { Poll } from '@/types/poll';
import { PollTable } from '@/components/sections/PollTable';
import Card from '@/components/design/Card';
import { Title } from '@/components/design/Typography';
import { useSession } from 'next-auth/react';

export default function PollsTablePage() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [votedPolls, setVotedPolls] = useState<{ [pollId: string]: boolean }>({});
  const { data: session } = useSession();

  useEffect(() => {
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

    fetchPolls();
  }, []);

  const handleVote = async (pollId: string, optionId: string) => {
    try {
      const response = await fetch(`/api/polls/${pollId}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ optionId }),
      });
      if (!response.ok) throw new Error('투표 실패');
      const updatedPoll = await response.json();
      setPolls(polls.map(p => p.id === pollId ? updatedPoll : p));
      setVotedPolls(prev => ({ ...prev, [pollId]: true }));
    } catch (err) {
      alert(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    }
  };

  const handleUpdatePoll = async (updatedPoll: Poll) => {
    try {
      const response = await fetch(`/api/polls/${updatedPoll.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPoll),
      });
      if (!response.ok) throw new Error('수정 실패');
      const data = await response.json();
      setPolls(polls.map(poll => poll.id === data.id ? data : poll));
    } catch (err) {
      alert(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    }
  };

  const handleDeletePoll = async (pollId: string) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    try {
      const res = await fetch(`/api/polls/${pollId}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('삭제 실패');
      setPolls(polls.filter(p => p.id !== pollId));
    } catch (err) {
      alert(err instanceof Error ? err.message : '알 수 없는 오류');
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <Card>
      <Title>투표 목록</Title>
      <PollTable 
        polls={polls}
        onVote={handleVote}
        onUpdate={handleUpdatePoll}
        onDelete={handleDeletePoll}
        hasVoted={votedPolls}
      />
    </Card>
  );
} 