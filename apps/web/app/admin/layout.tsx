'use client';
// DOCORE: 어드민 공통 레이아웃(좌측 사이드바)
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
const Content = styled.div`
  flex: 1;
  padding: 48px 40px;
`;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <LayoutWrapper>
      <Sidebar>
        <MenuItem href="/admin/user-management" $active={(pathname ?? '').startsWith('/admin/user-management')}>회원관리</MenuItem>
        <MenuItem href="/admin/polls" $active={(pathname ?? '').startsWith('/admin/polls')}>투표관리</MenuItem>
      </Sidebar>
      <Content>{children}</Content>
    </LayoutWrapper>
  );
} 