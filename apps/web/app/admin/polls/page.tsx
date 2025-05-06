'use client';
// DOCORE: 어드민 전용 투표 관리 메인 페이지. 관리자만 접근 가능. app 라우터 클라이언트 컴포넌트
import React from 'react';
import PollAdminTable from '@/components/admin/PollAdminTable';
import { useSession } from 'next-auth/react';
import Card from '@/components/design/Card';
import { Title, SubTitle } from '@/components/design/Typography';
import { PrimaryButton } from '@/components/design/Button';

export default function AdminPollsPage() {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <div style={{ color: 'red', fontWeight: 700, textAlign: 'center', marginTop: 40 }}>
        로그인이 필요합니다
        <br />
        <button
          style={{ marginTop: 24, padding: '10px 24px', fontWeight: 600, borderRadius: 8, background: '#4d8888', color: '#fff', border: 'none', cursor: 'pointer' }}
          onClick={() => { window.location.href = '/auth/signin'; }}
        >
          로그인 페이지로 이동
        </button>
      </div>
    );
  }

  if (!(session.user as any)?.isAdmin) {
    return (
      <div style={{ color: 'red', fontWeight: 700, textAlign: 'center', marginTop: 40 }}>
        접근 권한 없음 (관리자만 접근 가능)
        <br />
        <button
          style={{ marginTop: 24, padding: '10px 24px', fontWeight: 600, borderRadius: 8, background: '#4d8888', color: '#fff', border: 'none', cursor: 'pointer' }}
          onClick={() => { window.location.href = '/'; }}
        >
          일반회원 페이지로 이동
        </button>
      </div>
    );
  }

  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
        <Title>투표관리</Title>
        
      </div>
      <div style={{ marginTop: 16 }}>
        <PollAdminTable />
      </div>
    </Card>
  );
} 