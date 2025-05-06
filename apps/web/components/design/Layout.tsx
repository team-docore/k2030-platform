// DOCORE: 2030 디자인 시스템 공통 레이아웃 컴포넌트 (그룹화)
import styled from 'styled-components';

export const MainContainer = styled.main`
  min-height: 100vh;
  background: #f6f8fa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 0.5rem 2rem 0.5rem;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  @media (max-width: 480px) {
    max-width: 100vw;
    padding: 0 0.2rem 2rem 0.2rem;
  }
`;

export const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  min-width: 300px; // ← 원하는 값으로 변경

`;

export const UserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 240px; // ← 원하는 값으로 변경
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: #f6f8fa;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  min-width: 240px; // ← 원하는 값으로 변
`;

export const OptionGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

export const AdBox = styled.div`
  width: 100%;
  height: 80px;
  background:rgb(216, 216, 216);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color:rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

export const MenuButton = styled.button`
  color: #a3a3a3;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: background 0.15s;
  &:hover {
    background: #f3f4f6;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 0.5rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.10);
  min-width: 120px;
  z-index: 10;
  padding: 0.5rem 0;
`;
//광고 배너 메뉴 버튼 색깔 여기서 바꿈
export const MenuItem = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  padding: 0.7rem 1.2rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #f3f4f6;
  }
`;

export const GoogleLoadingDots = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  animation: bounce 1.4s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexRowGap8 = styled(FlexRow)`
  gap: 8px;
`;

export const FlexRowGap12 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const RelativeBox = styled.div`
  position: relative;
`; 