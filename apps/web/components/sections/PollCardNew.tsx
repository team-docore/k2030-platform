import React from 'react';
import { Poll } from '@/types/poll';
import styled from 'styled-components';
import { PrimaryButton } from '@/components/design/Button';
import { Title, SubTitle, Category, DateText } from '@/components/design/Typography';
import Card from '@/components/design/Card';

interface PollCardProps {
  polls: Poll[];
  onVote: (pollId: string, optionId: string) => Promise<void>;
  onUpdate: (updatedPoll: Poll) => Promise<void>;
  onDelete: (pollId: string) => Promise<void>;
  votedPolls: { [pollId: string]: { optionId: string } };
}

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

export function PollCardNew({ polls, onVote, onUpdate, onDelete, votedPolls }: PollCardProps) {
  return (
    <>
      {polls.map((poll) => (
        <Card key={poll.id} $marginBottom="1.2rem">
          <Title>{poll.question}</Title>
          <div style={{ marginTop: 16 }}>
            {poll.options.map((option) => {
              const isVoted = votedPolls[poll.id]?.optionId === option.id;
              return (
                <OptionButton
                  key={option.id}
                  onClick={() => onVote(poll.id, option.id)}
                  disabled={!!votedPolls[poll.id]}
                  $isVoted={isVoted}
                >
                  {option.text} ({option.votes}표)
                </OptionButton>
              );
            })}
          </div>
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Category>{poll.categories?.name || '기타'}</Category>
            <DateText>{poll.remainTime}</DateText>
          </div>
        </Card>
      ))}
    </>
  );
} 