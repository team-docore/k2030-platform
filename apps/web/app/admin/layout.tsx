'use client';
// DOCORE: 어드민 공통 레이아웃(좌측 사이드바)
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import LoadingSplash from '@/components/common/LoadingSplash';

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f6f8fa;
`;
const Sidebar = styled.nav`
  width: 220px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  min-height: 100vh;
`;
const MenuItem = styled(Link)<{ $active?: boolean }>`
  display: block;
  width: 100%;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? '#4d8888' : '#222')};
  background: ${({ $active }) => ($active ? '#f0fdfa' : 'transparent')};
  border-left: 4px solid ${({ $active }) => ($active ? '#4d8888' : 'transparent')};
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  &:hover {
    background: #f0fdfa;
    color: #4d8888;
  }
`;
const MainButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #222;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  position: absolute;
  bottom: 0;
  &:hover {
    background: #f0fdfa;
    color: #4d8888;
  }
`;
const Content = styled.div`
  flex: 1;
  padding: 48px 40px;
`;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (status === 'authenticated' && !session?.user?.isAdmin) {
      router.push('/');
    }
  }, [status, session, router]);

  if (status === 'loading') {
    return <LoadingSplash />;
  }

  if (!session?.user?.isAdmin) {
    return null;
  }

  return (
    <LayoutWrapper>
      <Sidebar>
        <MenuItem href="/admin/user-management" $active={(pathname ?? '').startsWith('/admin/user-management')}>회원관리</MenuItem>
        <MenuItem href="/admin/polls" $active={(pathname ?? '').startsWith('/admin/polls')}>투표관리</MenuItem>
        <MainButton href="/">메인으로 가기</MainButton>
      </Sidebar>
      <Content>{children}</Content>
    </LayoutWrapper>
  );
} 