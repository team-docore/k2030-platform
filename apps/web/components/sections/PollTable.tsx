// DOCORE: 투표 목록을 테이블로 표시하는 컴포넌트
import React from 'react';
import { Table } from '@/components/design/Table';
import { Poll } from '@/types/poll';
import { PrimaryButton } from '@/components/design/Button';
import styled from 'styled-components';
import { formatDate } from '@/utils/date';
import { useSession } from 'next-auth/react';

const ActionButton = styled(PrimaryButton)`
  padding: 0.3rem 1.2rem;
  font-size: 14px;
  margin-right: 8px;
`;

interface PollTableProps {
  polls: Poll[];
  onVote?: (pollId: string, optionId: string) => void;
  onUpdate?: (poll: Poll) => void;
  onDelete?: (pollId: string) => void;
  hasVoted?: { [pollId: string]: boolean };
}

export function PollTable({ polls, onVote, onUpdate, onDelete, hasVoted = {} }: PollTableProps) {
  const { data: session } = useSession();

  const handleRowClick = (poll: Poll) => {
    console.log('선택된 투표:', poll);
  };

  const renderRow = (poll: Poll) => {
    const isOwner = session?.user?.email === poll.userEmail;
    const hasVotedThisPoll = hasVoted[poll.id] ?? poll.hasVoted ?? false;

    return (
      <>
        <td>{poll.categories?.name ? `[${poll.categories.name}] ` : ''}{poll.question}</td>
        <td>{poll.totalVotes}명</td>
        <td>{formatDate(poll.createdAt)}</td>
        <td>{formatDate(poll.endsAt)}</td>
        <td>
          {isOwner && onUpdate && (
            <ActionButton onClick={(e) => {
              e.stopPropagation();
              onUpdate(poll);
            }}>
              수정
            </ActionButton>
          )}
          {isOwner && onDelete && (
            <ActionButton 
              style={{ background: '#e5e7eb', color: '#222' }}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(poll.id);
              }}
            >
              삭제
            </ActionButton>
          )}
          {!isOwner && onVote && !hasVotedThisPoll && (
            <ActionButton
              onClick={(e) => {
                e.stopPropagation();
                if (poll.options?.[0]?.id) {
                  onVote(poll.id, poll.options[0].id);
                }
              }}
            >
              투표하기
            </ActionButton>
          )}
        </td>
      </>
    );
  };

  return (
    <Table
      headers={['질문', '투표수', '생성일', '종료일', '관리']}
      data={polls}
      onRowClick={handleRowClick}
      renderRow={renderRow}
      emptyMessage="투표가 없습니다."
    />
  );
}

export default PollTable; 