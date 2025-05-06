// DOCORE: NextAuth 커스텀 에러 페이지 (계정 정지/탈퇴 등 안내)
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Card from '@/components/design/Card';
import { Title } from '@/components/design/Typography';
import { PrimaryButton } from '@/components/design/Button';
import React from 'react';

export default function AuthErrorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorMsg = decodeURIComponent(searchParams?.get('error') || '');

  // 에러 메시지 가공
  let userMessage = '알 수 없는 오류가 발생했습니다.';
  if (errorMsg.includes('정지')) {
    userMessage = '회원님은 계정이 정지되었습니다.\n관리자에게 문의해 주세요.';
  } else if (errorMsg.includes('탈퇴')) {
    userMessage = '탈퇴된 계정입니다. 동일 이메일로 재가입이 불가합니다.';
  } else if (errorMsg) {
    userMessage = errorMsg;
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
      <Card style={{ minWidth: 340, padding: '2.5rem 2rem', textAlign: 'center' }}>
        <Title>로그인 불가</Title>
        <div style={{ margin: '1.5rem 0', color: '#d32f2f', whiteSpace: 'pre-line', fontWeight: 500, fontSize: 18 }}>{userMessage}</div>
        <PrimaryButton style={{ width: '100%', fontSize: 16 }} onClick={() => router.push('/')}>메인으로 이동</PrimaryButton>
      </Card>
    </div>
  );
} 