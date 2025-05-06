// DOCORE: 2030 디자인 시스템 공통 버튼 컴포넌트 (그룹화)
import styled from 'styled-components';

export const PrimaryButton = styled.button`
  padding: 0.9rem 0;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 2px 8px rgba(40, 96, 96, 0.08);
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
  }
  &:disabled {
    background: #e5e7eb;
    color: #fff;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AuthButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.error};
  color: #fff;
  &:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;

export const LoginButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.primary};
  &:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;

export const OptionButton = styled.button<{
  $selected: boolean;
  $disabled: boolean;
  $type: 'like' | 'neutral' | 'dislike';
}>`
  flex: 1 1 0;
  min-width: 0;
  max-width: none;
  border-radius: 0.5rem;
  padding: 1.2rem 0;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0 4px;
  border: none;
  box-shadow: none;
  color: ${({ theme, $type, $selected }) =>
    $selected
      ? '#000'
      : $type === 'like'
        ? theme.primary
        : $type === 'neutral'
          ? theme.neutral
          : theme.dislike};
  background: ${({ theme, $type, $selected }) =>
    $selected
      ? ($type === 'like'
          ? theme.primary
          : $type === 'neutral'
            ? theme.neutral
            : theme.dislike)
      : theme.background};
  transition: all 0.2s;
  &:hover {
    opacity: 0.92;
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// DOCORE: 투표 선택지 버튼 3개를 한 줄에 가로 정렬하는 래퍼
export const OptionButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
`; 