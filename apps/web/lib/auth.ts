import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { Session, Account, User } from "next-auth";
import { supabase } from './supabaseClient';

export const authOptions: NextAuthOptions = {
  debug: false,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile"
        }
      }
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production'
      }
    },
    callbackUrl: {
      name: `next-auth.callback-url`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production'
      }
    },
    csrfToken: {
      name: 'next-auth.csrf-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production'
      }
    }
  },
  callbacks: {
    async signIn({ user }: { user: any }) {
      if (user?.email) {
        const { data, error } = await supabase
          .from('users')
          .select('status')
          .eq('email', user.email)
          .single();
        if (data) {
          if (data.status === '정지') {
            return `/auth/error?error=${encodeURIComponent('회원정지 중입니다. 관리자에게 문의하세요.')}`;
          }
          if (data.status === '탈퇴') {
            return `/auth/error?error=${encodeURIComponent('탈퇴회원입니다. 동일 이메일로 재가입 불가합니다.')}`;
          }
        }
        await supabase
          .from('users')
          .upsert([
            {
              email: user.email,
              name: user.name,
            }
          ], { onConflict: 'email' });
      }
      return true;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session?.user) {
        const { data, error } = await supabase
          .from('users')
          .select('is_admin, status')
          .eq('email', session.user.email)
          .single();

        if (!error && data) {
          session.user.isAdmin = data.is_admin;
          session.user.status = data.status;
        }
      }
      return session;
    },
    async jwt({ token, account }: { token: JWT; account: Account | null }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  events: {
    async signIn({ user }) {
      // 로그 제거
    },
    async session({ session }) {
      // 로그 제거
    }
  },
}; 