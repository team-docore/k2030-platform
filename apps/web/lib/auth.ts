import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { Session, Account } from "next-auth";
import { supabase } from './supabaseClient';

export const authOptions: NextAuthOptions = {
  debug: true,
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
      console.log('🔍 [auth.ts] session callback 시작:', { session, token });
      
      if (session?.user?.email) {
        const { data, error } = await supabase
          .from('users')
          .select('is_admin')
          .eq('email', session.user.email)
          .single();
        
        console.log('🔍 [auth.ts] supabase 조회 결과:', { data, error });
        
        if (data) {
          session.user = {
            ...session.user,
            isAdmin: data.is_admin
          };
          console.log('🔍 [auth.ts] 세션 업데이트 후:', session);
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
    async signIn(message: { user: any; account: any; profile?: any; isNewUser?: boolean }) { console.log('🔍 [NextAuth] signIn event:', message); },
    async signOut(message: { session: any; token: any }) { console.log('🔍 [NextAuth] signOut event:', message); },
    async createUser(message: { user: any }) { console.log('🔍 [NextAuth] createUser event:', message); },
    async updateUser(message: { user: any }) { console.log('🔍 [NextAuth] updateUser event:', message); },
    async linkAccount(message: { user: any; account: any; profile?: any }) { console.log('🔍 [NextAuth] linkAccount event:', message); },
    async session(message: { session: any; token: any }) { console.log('🔍 [NextAuth] session event:', message); },
  },
}; 