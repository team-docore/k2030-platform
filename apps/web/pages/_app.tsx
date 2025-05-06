import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

// DOCORE: styled-components ThemeProvider로 2030 테마 적용
// DOCORE: next-auth 세션 전역 Provider 적용. useSession 훅이 정상 동작하도록 앱 전체를 감쌉니다.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
} 