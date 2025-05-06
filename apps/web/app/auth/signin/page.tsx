'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const BgArt = styled.div`
  width: 100vw;
  height: 220px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const LoginBox = styled.div`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 340px;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.8rem;
  border: 1.5px solid #d1d5db;
  font-size: 1.05rem;
  background: #f9fafb;
  color: #222;
  margin-bottom: 0.7rem;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #2563eb;
    outline: none;
    background: #fff;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.9rem 0;
  border-radius: 0.8rem;
  background: #000;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #222;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 0.8rem;
  background: #fff;
  color: #3c4043;
  font-weight: 500;
  font-size: 1.1rem;
  border: 1.5px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1rem;
  box-shadow: 0 1px 2px rgba(60,64,67,.08);
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  &:hover {
    background: #f7f8fa;
    box-shadow: 0 2px 4px rgba(60,64,67,.13);
  }
`;

const GoogleLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const OrDivider = styled.div`
  margin: 1.2rem 0 0.5rem 0;
  color: #aaa;
  font-size: 14px;
  text-align: center;
`;

export default function SignInPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/');
    }
  }, [status, router]);

  if (status === 'loading') return null;

  // 자체 계정 로그인은 아직 미구현이므로 버튼만 비활성화

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <BgArt>
        {/* Threads 스타일 SVG/아트 영역 (원한다면 이미지 삽입) */}
        {/* <img src="/threads-art.svg" width={400} height={120} alt="Threads Art" /> */}
      </BgArt>
      <LoginBox>
        <Title>2030 계정으로 로그인</Title>
        <Input
          placeholder="이메일 주소"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          autoComplete="username"
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <LoginButton disabled>로그인</LoginButton>
        <OrDivider>또는</OrDivider>
        <GoogleButton onClick={() => signIn('google', { 
          prompt: 'select_account',
          redirect: true,
          callbackUrl: '/',
          force: true
        })}>
          <GoogleLogo src="/google.svg" alt="Google" />
          Google로 계속
        </GoogleButton>
      </LoginBox>
    </div>
  );
} 