// DOCORE: next-auth 세션/유저 타입 확장 (isAdmin 포함)
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    isAdmin?: boolean;
    status?: string;
  }
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      isAdmin?: boolean;
      status?: string;
    };
  }
} 