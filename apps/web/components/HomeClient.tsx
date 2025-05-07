// DOCORE: 2030 투표 플랫폼의 메인 클라이언트 컴포넌트. 투표 목록, 로딩, 세션 등 전체 홈 화면을 관리합니다.
'use client';

// DOCORE: 스타일드 컴포넌트(styled-components) 라이브러리 import
import styled from 'styled-components';
// DOCORE: 투표 섹션(질문/투표/생성 등) 메인 UI 컴포넌트
import { ThinkingSection } from "@/components/sections/ThinkingSection";
// DOCORE: 리액트 상태, 생명주기, 콜백 훅 import
import { useState, useEffect, useCallback } from 'react';
// DOCORE: 개별 투표 카드 UI 컴포넌트
import { PollCard } from "@/components/sections/PollCard";
// DOCORE: Poll 타입(투표 데이터 구조) 정의
import { Poll } from "@/types/poll";
// DOCORE: next-auth의 세션(로그인 상태) 관리 훅
import { useSession } from 'next-auth/react';
// DOCORE: 공통 로딩 스플래시(로딩 화면) 컴포넌트
import LoadingSplash from '@/components/common/LoadingSplash';
// DOCORE: 메인 레이아웃(전체 화면 컨테이너, 내용 래퍼)
import { MainContainer, ContentWrapper } from '@/components/design/Layout';
// DOCORE: 구글 스타일 로딩 도트 컴포넌트
import { GoogleLoadingDots, Dot } from '@/components/design/Layout';
import { useRouter } from 'next/navigation';

// DOCORE: 디버깅용 특정 Poll ID (테스트용)
const DEBUG_POLL_ID = "9cb4b38f-4287-4bfc-bf9b-748799b86b20";

// DOCORE: API에서 받은 poll 데이터를 프론트엔드 Poll 타입으로 변환하는 함수
function mapPoll(pollFromApi: any): Poll {
  console.log('mapPoll 입력 pollFromApi:', pollFromApi);
  let endsAtDate: Date | undefined = undefined;
  let createdAtDate: Date = new Date(); // 기본값 설정
  let updatedAtDate: Date = new Date(); // 기본값 설정

  // DOCORE: ends_at을 Date 객체로 변환 (null, 빈 문자열, 유효하지 않은 형식 고려)
  if (pollFromApi.ends_at && typeof pollFromApi.ends_at === 'string') {
    try {
      const parsedDate = new Date(pollFromApi.ends_at);
      if (!isNaN(parsedDate.getTime())) {
        endsAtDate = parsedDate;
      } else {
        console.warn(`Invalid ends_at format: ${pollFromApi.ends_at} for poll ${pollFromApi.id}`);
      }
    } catch (e) { console.error("Error parsing ends_at:", pollFromApi.ends_at, e); }
  }

  // DOCORE: endsAtDate가 없으면 created_at 기준으로 24시간 뒤로 설정
  if (!endsAtDate && pollFromApi.created_at && typeof pollFromApi.created_at === 'string') {
     try {
      const createdDate = new Date(pollFromApi.created_at);
      if (!isNaN(createdDate.getTime())) {
        // endsAt을 생성 시간 + 24시간으로 설정
        endsAtDate = new Date(createdDate.getTime() + 24 * 60 * 60 * 1000);
      } else {
         console.warn(`Invalid created_at format for fallback: ${pollFromApi.created_at} for poll ${pollFromApi.id}`);
      }
     } catch (e) { console.error("Error parsing created_at for fallback:", pollFromApi.created_at, e); }
  }

  // DOCORE: created_at(snake_case)와 createdAt(camelCase) 모두 처리
  const rawCreated = pollFromApi.created_at ?? pollFromApi.createdAt;
  if (typeof rawCreated === 'string') {
    const parsed = new Date(rawCreated);
    if (!isNaN(parsed.getTime())) {
      createdAtDate = parsed;
    } else {
      console.warn(`Invalid created timestamp: ${rawCreated}`);
    }
  } else {
    console.warn(`Missing created timestamp for poll ${pollFromApi.id}`);
  }

  // updated_at을 Date 객체로 변환
   if (pollFromApi.updated_at && typeof pollFromApi.updated_at === 'string') {
      try {
          const parsedDate = new Date(pollFromApi.updated_at);
          if (!isNaN(parsedDate.getTime())) {
              updatedAtDate = parsedDate;
          }
      } catch (e) { console.error("Error parsing updated_at:", pollFromApi.updated_at, e); }
  } else {
      // updated_at이 없거나 문자열이 아니면 createdAtDate 사용
      updatedAtDate = createdAtDate;
  }

  // options 변환 (ID 없으면 임의 생성 방지 - API에서 ID 보장 필요)
  const options = Array.isArray(pollFromApi.options)
    ? pollFromApi.options.map((opt: any) => ({
        id: opt.id,
        text: opt.text ?? '',
        votes: opt.votes ?? 0,
      }))
    : [];
   if (!Array.isArray(pollFromApi.options)) {
       console.warn(`Missing or invalid options array for poll ${pollFromApi.id}`);
   }

  // API가 nested user 객체 형태로 이메일을 넘겨줄 수도 있으니 우선순위에 추가
  const apiEmail =
    pollFromApi.user_email
    ?? pollFromApi.userEmail
    ?? pollFromApi.user?.email
    ?? '';

  // Poll 타입 객체 반환
  return {
    id: pollFromApi.id,
    question: pollFromApi.question ?? '질문 없음',
    options: options,
    totalVotes: typeof pollFromApi.total_votes === 'number' ? pollFromApi.total_votes : 0,
    createdAt: createdAtDate.toISOString(),
    updatedAt: updatedAtDate.toISOString(),
    endsAt: endsAtDate?.toISOString() ?? '',
    userEmail: apiEmail,
    remainTime: pollFromApi.remain_time ?? '',
    isClosed: pollFromApi.is_closed ?? false,
    hasVoted: pollFromApi.has_voted ?? false
  };
}

export default function HomeClient() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await fetch('/api/auth/session', {
          credentials: 'include',
        }).then(res => res.json());
        setCurrentUserEmail(currentUser?.user?.email ?? null);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      // 세션 로그 제거
    }
  }, [status, session]);

  const fetchPolls = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/polls');
      if (!response.ok) {
        throw new Error('투표 목록을 불러오는데 실패했습니다.');
      }
      const data = await response.json();
      console.log('API에서 받은 데이터:', data);
      const mappedPolls = data.map(mapPoll);
      console.log('매핑된 polls:', mappedPolls);
      setPolls(mappedPolls);
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setLoading(false);
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
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error('투표에 실패했습니다.');
      }

      await fetchPolls();
    } catch (error) {
      console.error('투표 중 오류 발생:', error);
      throw error;
    }
  }, [fetchPolls]);

  const handleUpdatePoll = useCallback(async (updatedPoll: Poll) => {
    console.log('[DOCORE-UPDATE] 시작', updatedPoll.id);
    try {
      const response = await fetch(`/api/polls/${updatedPoll.id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-DOCORE-DEBUG': 'update-poll',
        },
        body: JSON.stringify({
          question: updatedPoll.question,
          // 필요한 경우 options, ends_at 등 추가
        }),
        cache: 'no-store'
      });
      if (!response.ok) {
        throw new Error('투표 수정에 실패했습니다.');
      }
      console.log('[DOCORE-UPDATE] 성공', updatedPoll.id);
      await fetchPolls();
    } catch (error) {
      console.error('[DOCORE-UPDATE] 실패:', error);
      throw error;
    }
  }, [fetchPolls]);

  const handleDeletePoll = useCallback(async (pollId: string) => {
    console.log('[DOCORE-DELETE] 시작', pollId);
    try {
      const response = await fetch(`/api/polls/${pollId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'X-DOCORE-DEBUG': 'delete-poll',
        },
        cache: 'no-store'
      });
      if (!response.ok) {
        throw new Error('투표 삭제에 실패했습니다.');
      }
      console.log('[DOCORE-DELETE] 성공', pollId);
      await fetchPolls();
    } catch (error) {
      console.error('[DOCORE-DELETE] 실패:', error);
      throw error;
    }
  }, [fetchPolls]);

  const handleAdmin = () => {
    console.log('🔍 [어드민] 버튼 클릭됨');
    console.log('🔍 [어드민] 현재 세션:', session);
    console.log('🔍 [어드민] 라우터 상태:', router);
    try {
      router.push('/admin/polls');
    } catch (error) {
      console.error('🔍 [어드민] 라우팅 에러:', error);
    }
  };

  const handleUser = () => {
    router.push('/');
  };

  // 어드민 여부 확인
  const isAdmin = session?.user?.isAdmin === true;

  if (loading) {
    return <LoadingSplash />;
  }

  return (
    <MainContainer>
      <ContentWrapper>
        {isAdmin && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('🔍 [어드민] 버튼 직접 클릭');
              handleAdmin();
            }}
            style={{
              position: 'fixed',
              top: 24,
              right: 32,
              zIndex: 9999,
              background: '#222',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 22px',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              pointerEvents: 'auto'
            }}
          >
            어드민 페이지
          </button>
        )}
        <ThinkingSection loading={loading} />
      </ContentWrapper>
    </MainContainer>
  );
} 