// DOCORE: 2030 디자인 시스템 공통 카드 컴포넌트
import styled from 'styled-components';

interface CardProps {
  $marginBottom?: string;
}

const Card = styled.div<CardProps>`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: none;
  padding: 1.5rem 1.5rem;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '1.5rem'};
  border: none;
`;

export default Card; 