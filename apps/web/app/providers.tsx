// DOCORE: 글로벌 Provider 래퍼 (클라이언트 컴포넌트)
'use client';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SessionProvider>
  );
} 