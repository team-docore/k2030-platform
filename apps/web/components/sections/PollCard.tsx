// DOCORE: 투표 목록을 카드 형식으로 보여주는 컴포넌트
import React, { useState, useEffect } from 'react';
import { Poll } from '@/types/poll';
import { Table } from '@/components/design/Table';
import styled from 'styled-components';
import { PollDetailCard } from './PollDetailCard';
import { SubTitle, Category } from '@/components/design/Typography';
import { ContentWrapper } from '@/components/design/Layout';
import Card from '@/components/design/Card';
import axios from 'axios';

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

interface PollCardProps {
  polls: Poll[];
  onVote?: (pollId: string, optionId: string) => void;
  onUpdate?: (poll: Poll) => void;
  onDelete?: (pollId: string) => void;
  hasVoted?: { [pollId: string]: boolean };
}

export function PollCard({ polls, onVote, onUpdate, onDelete, hasVoted = {} }: PollCardProps) {
  const [selectedPoll, setSelectedPoll] = useState<Poll | null>(null);
  const [activePolls, setActivePolls] = useState<Poll[]>([]);
  const [endedPolls, setEndedPolls] = useState<Poll[]>([]);
  const [hideDetail, setHideDetail] = useState(false);
  const [ignorePollIds, setIgnorePollIds] = useState<string[]>([]);

  useEffect(() => {
    // 사용자의 관심없음 목록 가져오기
    const fetchIgnoredPolls = async () => {
      try {
        const response = await axios.get('/api/polls/ignore');
        if (response.data.ignoredPollIds) {
          setIgnorePollIds(response.data.ignoredPollIds);
          console.log('관심없음 목록 로드:', response.data.ignoredPollIds);
        }
      } catch (error) {
        console.error('관심없음 목록 조회 실패:', error);
      }
    };
    fetchIgnoredPolls();
  }, []);

  // 관심없음 처리된 투표 제외
  const filteredPolls = polls.filter(p => !ignorePollIds.includes(p.id));

  useEffect(() => {
    if (filteredPolls.length > 0 && !selectedPoll) {
      const latestPoll = filteredPolls.reduce((latest, current) => {
        const latestDate = new Date(latest.createdAt).getTime();
        const currentDate = new Date(current.createdAt).getTime();
        return currentDate > latestDate ? current : latest;
      });
      setSelectedPoll(latestPoll);
    }
  }, [filteredPolls, selectedPoll]);

  useEffect(() => {
    const now = new Date().getTime();
    const active = filteredPolls.filter((poll: Poll) => {
      if (!poll.endsAt) return true;
      const endDate = new Date(poll.endsAt).getTime();
      return endDate > now;
    });
    const ended = filteredPolls.filter((poll: Poll) => {
      if (!poll.endsAt) return false;
      const endDate = new Date(poll.endsAt).getTime();
      return endDate <= now;
    });
    setActivePolls(active);
    setEndedPolls(ended);
  }, [filteredPolls]);

  const handleRowClick = (poll: Poll) => {
    setSelectedPoll(poll);
    setHideDetail(false);
  };

  // 관심없음 처리 시 DB에 기록 후 최신 투표로 전환
  const handleHideDetail = async () => {
    if (selectedPoll) {
      try {
        console.log('관심없음 처리 시작:', selectedPoll.id);
        const response = await axios.post(`/api/polls/${selectedPoll.id}/ignore`);
        console.log('관심없음 처리 결과:', response.data);
        
        if (response.data.ok) {
          // 1. 현재 선택된 투표를 제외한 나머지 투표들
          const remainingPolls = filteredPolls.filter(p => p.id !== selectedPoll.id);
          
          // 2. ignorePollIds 상태 업데이트
          setIgnorePollIds(prev => [...prev, selectedPoll.id]);
          
          // 3. 상세 카드 닫기
          setHideDetail(true);
          setSelectedPoll(null);

          // 4. activePolls, endedPolls 상태 업데이트
          const now = new Date().getTime();
          const active = remainingPolls.filter((poll: Poll) => {
            if (!poll.endsAt) return true;
            const endDate = new Date(poll.endsAt).getTime();
            return endDate > now;
          });
          const ended = remainingPolls.filter((poll: Poll) => {
            if (!poll.endsAt) return false;
            const endDate = new Date(poll.endsAt).getTime();
            return endDate <= now;
          });
          setActivePolls(active);
          setEndedPolls(ended);

          // 5. 남은 투표가 있으면 첫 번째 투표 선택
          setTimeout(() => {
            if (active.length > 0) {
              setSelectedPoll(active[0]);
              setHideDetail(false);
            } else if (ended.length > 0) {
              setSelectedPoll(ended[0]);
              setHideDetail(false);
            }
          }, 100);

          console.log('관심없음 상태 업데이트 완료');
        } else {
          console.error('관심없음 처리 실패:', response.data.error);
          alert('관심없음 처리에 실패했습니다.');
        }
      } catch (error) {
        console.error('관심없음 API 호출 에러:', error);
        alert('관심없음 처리 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Container>
      {selectedPoll && !hideDetail && (
        <PollDetailCard
          poll={selectedPoll}
          onVote={(optionId: string) => onVote?.(selectedPoll.id, optionId)}
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
          <WideCard $marginBottom="1rem">
            <TableWrapper>
              <StyledTable
                headers={[]}
                data={activePolls}
                onRowClick={handleRowClick}
                renderRow={(poll: Poll) => (
                  <>
                    <TableCell>
                      {poll.categories?.name && <CategoryGap>[{poll.categories.name}]</CategoryGap>}
                      {poll.question}
                    </TableCell>
                    <VoteCountCell>{poll.totalVotes}명</VoteCountCell>
                  </>
                )}
                emptyMessage="진행중인 투표가 없습니다."
              />
            </TableWrapper>
          </WideCard>
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
                  <>
                    <TableCell>
                      {poll.categories?.name && <CategoryGap>[{poll.categories.name}]</CategoryGap>}
                      {poll.question}
                    </TableCell>
                    <VoteCountCell>{poll.totalVotes}명</VoteCountCell>
                  </>
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