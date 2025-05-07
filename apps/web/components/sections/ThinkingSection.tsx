'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Poll } from '@/types/poll';
import { useSession, signIn, signOut } from 'next-auth/react';
import { PollCard } from './PollCard';
import { MoreButton } from './MoreButton';
import { PollCreateForm } from './PollCreateForm';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import LoadingSplash from '@/components/common/LoadingSplash';
import { PrimaryButton, AuthButton, LoginButton } from '@/components/design/Button';
import { Title, SubTitle, UserName, LogoImg } from '@/components/design/Typography';
import Card from '@/components/design/Card';
import { AdBox } from '@/components/design/Layout';
import { MainContainer, ContentWrapper, AppBar, UserBar, LoadingContainer } from '@/components/design/Layout';

const DEFAULT_OPTIONS = ['좋아요', '몰라요', '싫어요'];

interface ThinkingSectionProps {
  loading?: boolean;
}

export function ThinkingSection({ loading }: ThinkingSectionProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [polls, setPolls] = useState<Poll[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [showCreate, setShowCreate] = useState(false);
  const [votedPolls, setVotedPolls] = useState<{ [pollId: string]: { optionId: string } }>({});
  const [expandedPollId, setExpandedPollId] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    setIsNavigating(true);
    router.push(path);
  };

  const fetchPolls = useCallback(async () => {
    try {
      const response = await fetch('/api/polls');
      if (!response.ok) throw new Error('투표 목록을 불러오는데 실패했습니다.');
      const data = await response.json();
      setPolls(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    }
  }, []);

  useEffect(() => {
    fetchPolls();
  }, [fetchPolls]);

  const handleVote = useCallback(async (pollId: string, optionId: string) => {
    try {
      const response = await fetch(`/api/polls/${pollId}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ optionId }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === 'already_voted') {
          alert('이미 투표하셨습니다.');
          return;
        }
        throw new Error('투표 실패');
      }
      
      const updatedPoll = await response.json();
      setPolls(prevPolls => prevPolls.map(p => p.id === pollId ? updatedPoll : p));
      setVotedPolls(prev => ({ ...prev, [pollId]: { optionId } }));
    } catch (err) {
      if (err instanceof Error && err.message === '이미 투표하셨습니다.') {
        alert(err.message);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  }, []);

  const handleUpdatePoll = useCallback(async (updatedPoll: Poll) => {
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
      setPolls(prevPolls => prevPolls.map(poll => poll.id === data.id ? data : poll));
    } catch (err) {
      alert(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    }
  }, []);

  const handleDeletePoll = useCallback(async (pollId: string) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    try {
      const response = await fetch(`/api/polls/${pollId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) throw new Error('삭제 실패');
      
      setPolls(prevPolls => prevPolls.filter(poll => poll.id !== pollId));
      setVotedPolls(prev => {
        const newVotedPolls = { ...prev };
        delete newVotedPolls[pollId];
        return newVotedPolls;
      });
    } catch (err) {
      alert(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    }
  }, []);

  const handleMore = useCallback(() => {
    setVisibleCount(prev => prev + 3);
  }, []);

  const handleCreatePoll = useCallback(async (question: string, categoryId: number) => {
    if (!session) {
      alert('로그인이 필요합니다.');
      return;
    }
    const response = await fetch('/api/polls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, options: DEFAULT_OPTIONS, category_id: categoryId }),
    });
    if (!response.ok) throw new Error('등록 실패');
    const newPoll = await response.json();
    setPolls(prevPolls => [newPoll, ...prevPolls]);
    setShowCreate(false);
  }, [session]);

  const handleCreateClick = useCallback(() => {
    if (!session) {
      handleNavigation('/auth/signin');
      return;
    }
    setShowCreate(true);
  }, [session, handleNavigation]);

  if (isNavigating) {
    return <LoadingSplash />;
  }

  if (status === 'loading') return null;
  if (error) return <div style={{ color: '#ef4444', fontWeight: 700 }}>{error}</div>;

  return (
    <MainContainer>
      <ContentWrapper>
        <AppBar>
          <LogoImg src="/2030-logo.png" alt="2030 로고" />
          <UserBar>
            {session?.user?.name ? (
              <>
                <UserName>{session.user.name}님 환영합니다</UserName>
                <AuthButton onClick={() => signOut()}>로그아웃</AuthButton>
              </>
            ) : (
              <LoginButton onClick={() => handleNavigation('/auth/signin')}>
                로그인
              </LoginButton>
            )}
          </UserBar>
        </AppBar>
        <Card $marginBottom="1.2rem">
          <AdBox>광고 배너 영역</AdBox>
          <SubTitle>2030 세대의 생각을 투표로 확인하세요</SubTitle>
        </Card>
        {showCreate && null}
        <PollCard 
          polls={polls}
          onVote={handleVote}
          onUpdate={handleUpdatePoll}
          onDelete={handleDeletePoll}
          votedPolls={votedPolls}
        />
      </ContentWrapper>
    </MainContainer>
  );
} 