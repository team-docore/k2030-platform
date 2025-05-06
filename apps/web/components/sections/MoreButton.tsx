import React from 'react';
import styled from 'styled-components';

const StyledMoreButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
  color: #fff;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 2px 8px rgba(59,130,246,0.08);
  padding: 0.9rem 0;
  margin-top: 1.2rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: linear-gradient(90deg, #2563eb 0%, #3b82f6 100%);
    color: #e0e7ef;
  }
`;

export function MoreButton({ onClick }: { onClick: () => void }) {
  return (
    <StyledMoreButton onClick={onClick}>
      더보기
    </StyledMoreButton>
  );
} 