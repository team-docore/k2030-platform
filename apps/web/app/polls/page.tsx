'use client';
// DOCORE: 사용자 투표 페이지 컴포넌트
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Poll {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status: string;
}

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const { data, error } = await supabase
          .from('polls')
          .select('*')
          .eq('status', 'active')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPolls(data || []);
      } catch (error) {
        console.error('투표 목록 조회 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolls();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <div>로딩 중...</div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>진행 중인 투표</h1>
      {polls.length === 0 ? (
        <div>진행 중인 투표가 없습니다.</div>
      ) : (
        <div style={{ display: 'grid', gap: 20 }}>
          {polls.map((poll) => (
            <div
              key={poll.id}
              style={{
                padding: 20,
                border: '1px solid #ddd',
                borderRadius: 8,
              }}
            >
              <h2 style={{ marginBottom: 10 }}>{poll.title}</h2>
              <p style={{ marginBottom: 10 }}>{poll.description}</p>
              <div style={{ color: '#666' }}>
                {new Date(poll.start_date).toLocaleDateString()} ~{' '}
                {new Date(poll.end_date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 