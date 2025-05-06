import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Poll, PollOption } from '@/types/poll';
import { FaRegCommentDots, FaShareAlt, FaEllipsisV } from 'react-icons/fa';
import styled from 'styled-components';
import { EditPollModal } from './EditPollModal';
import { useSession } from 'next-auth/react';
import { ClipLoader } from 'react-spinners';
import Card from '@/components/design/Card';
import { OptionButton } from '@/components/design/Button';
import { OptionPercent, Question, Category, DateText, InfoTag, TimeTag, GrayText, GrayTextA3, DotDivider, ErrorText } from '@/components/design/Typography';
import { TopBar, OptionGroup, BottomBar, SpinnerContainer, FlexRowGap8, FlexRowGap12, RelativeBox } from '@/components/design/Layout';
import { MenuButton, Menu, MenuItem } from '@/components/design/Layout';
import { formatDate } from '@/utils/date';

interface PollCardProps {
  poll: Poll;
  onVote: (optionId: string) => void;
  onUpdate?: (poll: Poll) => void;
  onDelete?: (pollId: string) => void;
  hasVoted?: boolean;
  disabled?: boolean;
  isExpanded?: boolean;
  onExpand?: () => void;
}

function formatRemainingTime(endsAt: Date | string | undefined | null): string {
  if (!endsAt) return '마감일 미설정';
  
  const endDate = typeof endsAt === 'string' ? new Date(endsAt) : endsAt;
  if (isNaN(endDate.getTime())) return '마감일 미설정';
  
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  
  if (diff <= 0) return '마감';
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

interface OptionButtonProps {
  $selected: boolean;
  $index: number;
  $disabled: boolean;
}

const optionType = (idx: number) =>
  idx === 0 ? 'like' : idx === 1 ? 'neutral' : 'dislike';

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const OptionText = styled.span`
  flex: 1;
`;

const VoteCount = styled.span`
  font-weight: 600;
  margin-left: 0.5rem;
`;

const PollBottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
`;

const ParticipantCount = styled.span`
  color: #6b7280;
  font-size: 0.9rem;
`;

const ClosedTag = styled.span`
  color: #ef4444;
  font-size: 0.9rem;
  font-weight: 600;
`;

const RemainTime = styled.span`
  color: #3b82f6;
  font-size: 0.9rem;
  font-weight: 600;
`;

const getOptionType = (text: string): 'like' | 'neutral' | 'dislike' => {
  if (text.includes('좋아요')) return 'like';
  if (text.includes('몰라요')) return 'neutral';
  return 'dislike';
};

const CollapsedQuestion = styled(Question)`
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.4;
  color: #333;
  text-align: center;
  background: #f8f9fa;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  display: inline-block;
`;

export function PollCard({ poll, onVote, onUpdate, onDelete, hasVoted: hasVotedProp, disabled, isExpanded = false, onExpand }: PollCardProps) {
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [remainingTime, setRemainingTime] = useState<string>(formatRemainingTime(poll.endsAt));
  const menuRef = useRef<HTMLDivElement>(null);
  const isOwner = session?.user?.email === poll.userEmail;
  const hasVoted = hasVotedProp ?? poll.hasVoted ?? false;

  useEffect(() => {
    console.log('PollCard props:', {
      onUpdate: !!onUpdate,
      onDelete: !!onDelete,
      isOwner: isOwner,
      hasVoted: hasVoted
    });
  }, [onUpdate, onDelete, isOwner, hasVoted]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(formatRemainingTime(poll.endsAt));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [poll.endsAt]);

  useEffect(() => {
    console.log('옵션 votes:', poll.options, '총 투표수:', poll.totalVotes);
  }, [poll]);

  useEffect(() => {
    console.log('PollCard 업데이트:', {
      pollId: poll.id,
      options: poll.options,
      totalVotes: poll.totalVotes,
      hasVoted: poll.hasVoted
    });
  }, [poll]);

  const handleVote = async (optionId: string) => {
    console.log('투표 요청:', {
      pollId: poll.id,
      optionId,
      currentOptions: options,
      selectedOption: options.find((opt: PollOption) => opt.id === optionId)
    });
    
    if (hasVoted) return;
    setLoading(true);
    setError(null);
    try {
      await onVote(optionId);
      setSelected(optionId);
    } catch (err) {
      setError('투표에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleMenuClick = () => setMenuOpen(v => !v);

  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  const handleEdit = () => {
    handleCloseMenu();
    setIsEditModalOpen(true);
  };

  const handleSavePoll = useCallback(async (updatedPoll: Poll) => {
    console.log('수정 버튼 클릭됨', updatedPoll);
    console.log('onUpdate 함수 존재 여부:', !!onUpdate);
    if (onUpdate) {
      try {
        console.log('onUpdate 함수 호출 전');
        await onUpdate(updatedPoll);
        console.log('onUpdate 함수 호출 후');
      } catch (error) {
        console.error('투표 수정 중 오류 발생:', error);
        alert('투표 수정에 실패했습니다.');
      }
    } else {
      console.warn('onUpdate 함수가 없습니다.');
    }
  }, [onUpdate]);

  const handleHide = () => {
    setHidden(true);
    handleCloseMenu();
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [poll.id, onDelete]);

  useEffect(() => {
    console.log('poll.createdAt:', poll.createdAt);
  }, [poll.createdAt]);

  const options = Array.isArray(poll.options)
    ? poll.options
    : typeof poll.options === 'string'
      ? JSON.parse(poll.options)
      : [];

  console.log('PollCard 렌더링:', {
    pollId: poll.id,
    options,
    selected,
    hasVoted
  });

  // DOCORE: 메뉴 바깥 클릭 시 자동 닫힘
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  if (hidden) return null;

  return (
    <>
      <RelativeBox>
        <div onClick={onExpand} style={{ cursor: 'pointer' }}>
          {!isExpanded ? (
            <CollapsedQuestion>
              {poll.categories?.name ? `[${poll.categories.name}] ` : ''}{poll.question}
            </CollapsedQuestion>
          ) : (
            <>
              <TopBar>
                <FlexRowGap8>
                  <Category>{poll.categories?.name || '카테고리 없음'}</Category>
                  <DotDivider>·</DotDivider>
                  <DateText>{formatDate(poll.createdAt)}</DateText>
                </FlexRowGap8>
                <RelativeBox onClick={(e) => e.stopPropagation()}>
                  <MenuButton onClick={handleMenuClick} aria-label="메뉴 열기">
                    <FaEllipsisV size={18} />
                  </MenuButton>
                  {menuOpen && (
                    <Menu id={`poll-menu-${poll.id}`} ref={menuRef}>
                      {isOwner ? (
                        <>
                          <MenuItem onClick={handleEdit}>수정</MenuItem>
                          <MenuItem onClick={() => {
                            handleCloseMenu();
                            onDelete!(poll.id);
                          }}>삭제</MenuItem>
                        </>
                      ) : (
                        <MenuItem onClick={handleHide}>관심없음</MenuItem>
                      )}
                    </Menu>
                  )}
                </RelativeBox>
              </TopBar>
              <Question>{poll.question}</Question>
              <OptionGroup>
                {poll.options.map((option, idx) => {
                  const percentage = poll.totalVotes > 0 
                    ? Math.round((option.votes / poll.totalVotes) * 100)
                    : 0;
                  
                  return (
                    <OptionButton
                      key={option.id}
                      onClick={() => handleVote(option.id)}
                      disabled={hasVoted || loading}
                      $selected={selected === option.id}
                      $disabled={hasVoted || loading}
                      $type={optionType(idx)}
                    >
                      {loading && selected === option.id ? (
                        <SpinnerContainer>
                          <ClipLoader size={16} color="#ffffff" />
                          <span>투표 중...</span>
                        </SpinnerContainer>
                      ) : (
                        <>
                          {option.text}
                          <OptionPercent>
                            {percentage}%
                          </OptionPercent>
                        </>
                      )}
                    </OptionButton>
                  );
                })}
              </OptionGroup>
              <BottomBar>
                <GrayText>총 {poll.totalVotes}명 참여</GrayText>
                <FlexRowGap12>
                  <FaRegCommentDots style={{ color: '#a3a3a3' }} size={18} />
                  <GrayTextA3>3</GrayTextA3>
                  <FaShareAlt style={{ color: '#a3a3a3' }} size={18} />
                </FlexRowGap12>
              </BottomBar>
              {error && <ErrorText>{error}</ErrorText>}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <InfoTag>
                  마감일: {formatDate(poll.endsAt)}
                </InfoTag>
                <TimeTag $closed={remainingTime === '마감'}>
                  {remainingTime}
                </TimeTag>
              </div>
            </>
          )}
        </div>
      </RelativeBox>
      {isEditModalOpen && (
        <EditPollModal
          poll={poll}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSavePoll}
        />
      )}
    </>
  );
} 