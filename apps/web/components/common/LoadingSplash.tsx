// DOCORE: 모든 로딩 화면에서 사용할 공통 스플래시 컴포넌트
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  max-width: none;
  background: #f6f8fa;
`;

const GoogleLoadingDots = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3b82f6;
  animation: bounce 1.4s infinite ease-in-out;

  &:nth-child(1) { animation-delay: -0.32s; }
  &:nth-child(2) { animation-delay: -0.16s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;

export default function LoadingSplash() {
  return (
    <LoadingContainer>
      <GoogleLoadingDots>
        <Dot />
        <Dot />
        <Dot />
      </GoogleLoadingDots>
    </LoadingContainer>
  );
} 