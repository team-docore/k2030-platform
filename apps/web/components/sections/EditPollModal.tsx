import React, { useState } from 'react';
import { Poll } from '@/types/poll';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { CategorySelector } from './CategorySelector';

interface EditPollModalProps {
  poll: Poll;
  onClose: () => void;
  onSave: (updatedPoll: Poll, categoryId: number) => Promise<void>;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #222;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 100px;

  ${({ $variant }) => {
    if ($variant === 'primary') {
      return `
        background: #3b82f6;
        color: white;
        &:hover {
          background: #2563eb;
        }
        &:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }
      `;
    }
    return `
      background: #f3f4f6;
      color: #4b5563;
      &:hover {
        background: #e5e7eb;
      }
      &:disabled {
        background: #f3f4f6;
        cursor: not-allowed;
      }
    `;
  }}
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export function EditPollModal({ poll, onClose, onSave }: EditPollModalProps) {
  const [question, setQuestion] = useState(poll.question);
  const [categoryId, setCategoryId] = useState<number | null>(poll.categories?.id ?? null);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setCategoryId(poll.categories?.id ?? null);
  }, [poll.categories?.id]);

  const handleSave = async () => {
    if (!question.trim()) {
      alert('질문을 입력해주세요.');
      return;
    }
    if (!categoryId) {
      alert('카테고리를 선택해주세요.');
      return;
    }
    setLoading(true);
    try {
      await onSave({ ...poll, question }, categoryId);
      onClose();
    } catch (error) {
      console.error('수정 실패:', error);
      alert('수정에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <Title>투표 수정</Title>
        <CategorySelector
          value={categoryId}
          onChange={setCategoryId}
          disabled={loading}
        />
        <Input
          type="text"
          value={question}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
          placeholder="질문을 입력하세요"
          disabled={loading}
        />
        <ButtonGroup>
          <Button onClick={onClose} disabled={loading}>취소</Button>
          <Button 
            $variant="primary" 
            onClick={handleSave} 
            disabled={loading}
          >
            {loading ? (
              <SpinnerContainer>
                <ClipLoader size={16} color="#ffffff" />
                <span>저장 중...</span>
              </SpinnerContainer>
            ) : '저장'}
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
} 