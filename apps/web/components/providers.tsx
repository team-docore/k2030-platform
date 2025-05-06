'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

interface ProvidersProps {
  children: ReactNode;
  session?: any;
}

export function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
} 