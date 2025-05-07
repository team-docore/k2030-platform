// DOCORE: 투표 목록을 카드 형식으로 보여주는 컴포넌트
import React, { useState, useEffect, useCallback } from 'react';
import { Poll } from '@/types/poll';
import { Table } from '@/components/design/Table';
import styled from 'styled-components';
import { PollDetailCard } from './PollDetailCard';
import { SubTitle, Category, DateText } from '@/components/design/Typography';
import { ContentWrapper } from '@/components/design/Layout';
import Card from '@/components/design/Card';
import axios from 'axios';
import { PrimaryButton } from '@/components/design/Button';

const Container = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  gap: 0 !important;
  padding: 0 !important;
`;
const TableCell = styled.td`
  font-size: 1.08rem;
  font-weight: 500;
  color: #222;
  padding: 0.5rem 0.2rem;
  vertical-align: middle;
`;
const VoteCountCell = styled.td`
  font-size: 0.98rem;
  color: #888;
  text-align: right;
  padding: 0.7rem 0.2rem;
  min-width: 60px;
`;
const TableWrapper = styled.div`
  margin: 0 -1.0rem !important;
  padding: 0 !important;
`;
const TightSubTitle = styled(SubTitle)`
  margin: 0 !important;
  padding: 0.25rem !important;
`;
const WideCard = styled(Card)`
  padding: 2rem 1.5rem 1.5rem 1.5rem !important;
`;
const StyledTable = styled(Table)`
  width: 100% !important;
`;
const CategoryGap = styled(Category)`
  margin-right: 0.5rem;
`;

const OptionButton = styled(PrimaryButton)<{ $isVoted?: boolean }>`
  width: 100%;
  margin-bottom: 8px;
  background: ${({ $isVoted }) => ($isVoted ? '#4d8888' : '#f8fafc')};
  color: ${({ $isVoted }) => ($isVoted ? '#fff' : '#222')};
  font-weight: ${({ $isVoted }) => ($isVoted ? '700' : '500')};
  border: 1px solid ${({ $isVoted }) => ($isVoted ? '#4d8888' : '#e5e7eb')};
  cursor: ${({ $isVoted }) => ($isVoted ? 'default' : 'pointer')};
  opacity: ${({ $isVoted }) => ($isVoted ? '1' : '0.8')};
  transition: all 0.2s;

  &:hover {
    background: ${({ $isVoted }) => ($isVoted ? '#4d8888' : '#f0fdfa')};
    color: ${({ $isVoted }) => ($isVoted ? '#fff' : '#4d8888')};
    border-color: ${({ $isVoted }) => ($isVoted ? '#4d8888' : '#4d8888')};
  }

  &:disabled {
    background: #f8fafc;
    color: #9ca3af;
    border-color: #e5e7eb;
    cursor: not-allowed;
  }
`;

interface PollCardProps {
  polls: Poll[];
  onVote: (pollId: string, optionId: string) => Promise<void>;
  onUpdate: (updatedPoll: Poll) => Promise<void>;
  onDelete: (pollId: string) => Promise<void>;
  votedPolls: { [pollId: string]: { optionId: string } };
  hasVoted?: { [pollId: string]: boolean };
}

export function PollCard({ polls, onVote, onUpdate, onDelete, votedPolls, hasVoted = {} }: PollCardProps) {
  const [selectedPoll, setSelectedPoll] = useState<Poll | null>(null);
  const [activePolls, setActivePolls] = useState<Poll[]>([]);
  const [endedPolls, setEndedPolls] = useState<Poll[]>([]);
  const [hideDetail, setHideDetail] = useState(false);
  const [ignorePollIds, setIgnorePollIds] = useState<string[]>([]);

  // 관심없음 처리된 투표 제외
  const filteredPolls = polls.filter(p => !ignorePollIds.includes(p.id));

  // 관심없음 목록 가져오기
  useEffect(() => {
    let isMounted = true;

    const fetchIgnoredPolls = async () => {
      try {
        const response = await axios.get('/api/polls/ignore');
        if (isMounted && response.data.ignoredPollIds) {
          setIgnorePollIds(response.data.ignoredPollIds);
        }
      } catch (error) {
        if (isMounted) {
          console.error('관심없음 목록 조회 실패:', error);
        }
      }
    };

    fetchIgnoredPolls();

    return () => {
      isMounted = false;
    };
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  // 투표 분류 업데이트
  useEffect(() => {
    const now = new Date().getTime();
    
    // 활성/종료 투표 분류
    const active = filteredPolls.filter(poll => {
      if (!poll.endsAt) return true;
      const endDate = new Date(poll.endsAt).getTime();
      return endDate > now;
    });
    
    const ended = filteredPolls.filter(poll => {
      if (!poll.endsAt) return false;
      const endDate = new Date(poll.endsAt).getTime();
      return endDate <= now;
    });

    // 이전 상태와 비교하여 변경이 있을 때만 상태 업데이트
    const activeChanged = JSON.stringify(active) !== JSON.stringify(activePolls);
    const endedChanged = JSON.stringify(ended) !== JSON.stringify(endedPolls);

    if (activeChanged) {
      setActivePolls(active);
    }
    if (endedChanged) {
      setEndedPolls(ended);
    }
  }, [filteredPolls]); // filteredPolls가 변경될 때만 실행

  // 선택된 투표 업데이트
  useEffect(() => {
    if (!selectedPoll && activePolls.length > 0) {
      // 첫 번째 투표를 선택
      setSelectedPoll(activePolls[0]);
    }
  }, [activePolls, selectedPoll]); // activePolls나 selectedPoll이 변경될 때만 실행

  const handleRowClick = useCallback((poll: Poll) => {
    setSelectedPoll(poll);
    setHideDetail(false);
  }, []); // 의존성 없음

  // 관심없음 처리 시 DB에 기록 후 최신 투표로 전환
  const handleHideDetail = useCallback(async () => {
    if (!selectedPoll) return;

    try {
      const response = await axios.post(`/api/polls/${selectedPoll.id}/ignore`);
      
      if (response.data.ok) {
        // 1. ignorePollIds 상태 업데이트
        setIgnorePollIds(prev => [...prev, selectedPoll.id]);
        
        // 2. 상세 카드 닫기
        setHideDetail(true);
        setSelectedPoll(null);

        // 3. 남은 투표가 있으면 첫 번째 투표 선택
        if (activePolls.length > 0) {
          setSelectedPoll(activePolls[0]);
          setHideDetail(false);
        } else if (endedPolls.length > 0) {
          setSelectedPoll(endedPolls[0]);
          setHideDetail(false);
        }
      } else {
        alert('관심없음 처리에 실패했습니다.');
      }
    } catch (error) {
      console.error('관심없음 API 호출 에러:', error);
      alert('관심없음 처리 중 오류가 발생했습니다.');
    }
  }, [selectedPoll, activePolls, endedPolls]); // 관련 상태들이 변경될 때만 실행

  return (
    <Container>
      {selectedPoll && !hideDetail && (
        <PollDetailCard
          key={`detail-${selectedPoll.id}`}
          poll={selectedPoll}
          onVote={(optionId: string) => onVote(selectedPoll.id, optionId)}
          onUpdate={onUpdate}
          onDelete={onDelete}
          hasVoted={hasVoted[selectedPoll.id]}
          onClose={() => setSelectedPoll(null)}
          onHide={handleHideDetail}
        />
      )}
      {activePolls.length > 0 && (
        <>
          <TightSubTitle>진행중인 투표</TightSubTitle>
          {activePolls.map((poll) => (
            <WideCard key={`active-${poll.id}`} $marginBottom="1rem">
              <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>
                {poll.categories?.name && <CategoryGap>[{poll.categories.name}]</CategoryGap>}
                {poll.question}
              </div>
              <div style={{ marginBottom: 8 }}>
                {poll.options.map((option, index) => {
                  const isVoted = votedPolls[poll.id]?.optionId === option.id;
                  const optionKey = `poll-${poll.id}-option-${option.id || index}`;
                  return (
                    <OptionButton
                      key={optionKey}
                      onClick={() => onVote(poll.id, option.id)}
                      disabled={!!votedPolls[poll.id]}
                      $isVoted={isVoted}
                    >
                      {isVoted ? '✔️ ' : ''}{option.text} ({option.votes}표)
                    </OptionButton>
                  );
                })}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Category>{poll.categories?.name || '기타'}</Category>
                <DateText>{poll.remainTime}</DateText>
              </div>
            </WideCard>
          ))}
        </>
      )}
      {endedPolls.length > 0 && (
        <>
          <TightSubTitle>마감된 투표</TightSubTitle>
          <WideCard $marginBottom="1rem">
            <TableWrapper>
              <StyledTable
                headers={[]}
                data={endedPolls}
                onRowClick={handleRowClick}
                renderRow={(poll: Poll) => (
                  <React.Fragment key={`ended-${poll.id}`}>
                    <TableCell>
                      {poll.categories?.name && <CategoryGap>[{poll.categories.name}]</CategoryGap>}
                      {poll.question}
                    </TableCell>
                    <VoteCountCell>{poll.totalVotes}명</VoteCountCell>
                  </React.Fragment>
                )}
                emptyMessage="마감된 투표가 없습니다."
              />
            </TableWrapper>
          </WideCard>
        </>
      )}
    </Container>
  );
}

export default PollCard; 