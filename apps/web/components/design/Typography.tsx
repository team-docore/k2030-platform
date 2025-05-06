// DOCORE: 2030 디자인 시스템 공통 타이포그래피 컴포넌트 (그룹화)
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 900;
`;

export const SubTitle = styled.h2`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

export const UserName = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  padding: 0.5rem 1.4rem;
  border-radius: 1.2rem;
  min-width: 120px; // ← 원하는 값으로 추가
  display: inline-block; // width 적용을 위해
`;

export const LogoImg = styled.img`
  height: 100px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  @media (max-width: 600px) {
    height: 48px;
  }
`;

export const OptionPercent = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #222;
  opacity: 0.9;
`;

export const Question = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #222;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

export const Category = styled.span`
  font-size: 0.9rem;
  color: #3b82f6;
  font-weight: 600;
`;

export const DateText = styled.span`
  font-size: 0.9rem;
  color: #a3a3a3;
`;

// DOCORE: 마감일, 남은시간 등 태그 스타일 컴포넌트 추가
export const InfoTag = styled.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 1rem;
  background: #dbeafe;
  color: #2563eb;
`;

export const TimeTag = styled.span<{ $closed?: boolean }>`
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 1rem;
  background: ${({ $closed }) => $closed ? '#fee2e2' : '#dcfce7'};
  color: ${({ $closed }) => $closed ? '#dc2626' : '#16a34a'};
`;

// DOCORE: PollCard 인라인 스타일 제거용 공통 텍스트 컴포넌트 export 추가
export const GrayText = styled.span`
  color: #888;
  font-size: 0.95rem;
`;

export const GrayTextA3 = styled.span`
  color: #a3a3a3;
  font-size: 0.95rem;
`;

export const DotDivider = styled.span`
  color: #e5e7eb;
  margin: 0 0.3rem;
`;

// DOCORE: PollCard 에러 메시지용 ErrorText 컴포넌트 추가
export const ErrorText = styled.div`
  color: #ef4444;
  margin-top: 8px;
  font-size: 13px;
`; 