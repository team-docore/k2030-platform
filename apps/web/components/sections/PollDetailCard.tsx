// DOCORE: 투표 상세 정보를 카드 형식으로 보여주는 컴포넌트
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Poll } from '@/types/poll';
import { FaRegCommentDots, FaShareAlt, FaEllipsisV } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import Card from '@/components/design/Card';
import { OptionButton, OptionButtonGroup } from '@/components/design/Button';
import { Question, Category, TimeTag, InfoTag, GrayText, GrayTextA3, ErrorText, SubTitle, OptionPercent } from '@/components/design/Typography';
import { TopBar, BottomBar, MenuButton, Menu, MenuItem, SpinnerContainer, FlexRowGap12 } from '@/components/design/Layout';
import { formatDate } from '@/utils/date';
import { EditPollModal } from './EditPollModal';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  position: relative;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  min-width: 320px;
  max-width: 100%;
`;
const StyledTopBar = styled(TopBar)`
  margin-bottom: 0.7rem;
  justify-content: space-between;
`;
const StyledQuestion = styled(Question)`
  margin-bottom: 1.2rem;
  font-size: 1.25rem;
`;
const StyledOptionGroup = styled(OptionButtonGroup)`
  margin-bottom: 1.2rem;
`;
const StyledBottomBar = styled(BottomBar)`
  margin-top: 1.2rem;
  justify-content: space-between;
`;
const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.2rem;
  justify-content: space-between;
`;
const DarkMenuItem = styled(MenuItem)`
  color: #222 !important;
  font-weight: 600;
`;
function getRemainTime(endsAt: string) {
  const end = new Date(endsAt).getTime();
  const now = Date.now();
  const diff = end - now;
  if (diff <= 0) return '투표 마감';
  const h = Math.floor(diff / 1000 / 60 / 60).toString().padStart(2, '0');
  const m = Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, '0');
  const s = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}
export function PollDetailCard({ poll, onVote, onUpdate, onDelete, hasVoted = false, onClose, onHide }: any) {
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [remain, setRemain] = useState(getRemainTime(poll.endsAt));
  const menuRef = useRef<HTMLDivElement>(null);
  const isOwner = session?.user?.email === poll.userEmail;

  useEffect(() => {
    const timer = setInterval(() => {
      setRemain(getRemainTime(poll.endsAt));
    }, 1000);
    return () => clearInterval(timer);
  }, [poll.endsAt]);

  const handleVote = async (optionId: string) => {
    if (hasVoted) return;
    setLoading(true);
    setError(null);
    try {
      await onVote?.(optionId);
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
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);
  const totalVotes = poll.totalVotes > 0 ? poll.totalVotes : 1; // 0명일 때 0 division 방지
  const handleShare = () => {
    const url = `${window.location.origin}/polls/${poll.id}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('링크가 복사되었습니다!');
    });
  };
  return (
    <StyledCard>
      <StyledTopBar>
        <Category>{poll.categories?.name ? `[${poll.categories.name}]` : ''}</Category>
        <MenuButton onClick={handleMenuClick}>
          <FaEllipsisV size={16} />
        </MenuButton>
        {menuOpen && (
          <Menu ref={menuRef}>
            <DarkMenuItem onClick={() => { onHide?.(); }}>관심없음</DarkMenuItem>
          </Menu>
        )}
      </StyledTopBar>
      <StyledQuestion>{poll.question}</StyledQuestion>
      <StyledOptionGroup>
        {poll.options.map((option: any, index: number) => {
          const percent = poll.totalVotes > 0 ? Math.round((option.votes / poll.totalVotes) * 100) : 0;
          const optionKey = option.id ? option.id : `detail-option-${poll.id}-${index}`;
          return (
            <OptionButton
              key={optionKey}
              onClick={() => handleVote(option.id)}
              $selected={selected === option.id}
              $disabled={hasVoted || loading}
              $type={option.text === '좋아요' ? 'like' : option.text === '몰라요' ? 'neutral' : 'dislike'}
            >
              {loading && selected === option.id ? (
                <SpinnerContainer>
                  <ClipLoader size={14} color="#ffffff" />
                  <span>투표 중...</span>
                </SpinnerContainer>
              ) : (
                <>
                  {option.text}
                  <OptionPercent>{percent}%</OptionPercent>
                </>
              )}
            </OptionButton>
          );
        })}
      </StyledOptionGroup>
      <StyledBottomBar>
        <GrayText>총 {poll.totalVotes}명 참여</GrayText>
        <FlexRowGap12>
          <FaRegCommentDots color="#a3a3a3" size={16} />
          <GrayTextA3>3</GrayTextA3>
          <FaShareAlt color="#a3a3a3" size={16} style={{cursor:'pointer'}} onClick={handleShare} />
        </FlexRowGap12>
      </StyledBottomBar>
      {error && <ErrorText>{error}</ErrorText>}
      <InfoRow>
        <InfoTag>마감일: {formatDate(poll.endsAt)}</InfoTag>
        <TimeTag $closed={remain === '투표 마감'}>{remain}</TimeTag>
      </InfoRow>
      {isEditModalOpen && (
        <EditPollModal
          poll={poll}
          onClose={() => setIsEditModalOpen(false)}
          onSave={async (updatedPoll: Poll) => {
            try {
              await onUpdate?.(updatedPoll);
              setIsEditModalOpen(false);
            } catch (error) {
              setError('투표 수정에 실패했습니다.');
            }
          }}
        />
      )}
    </StyledCard>
  );
}

export default PollDetailCard; 