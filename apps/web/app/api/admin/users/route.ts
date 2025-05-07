// DOCORE: 어드민 회원 전체 목록 API
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    // 세션 체크
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: '인증되지 않은 접근입니다.' }, { status: 401 });
    }

    // 관리자 권한 체크
    const { data: adminCheck, error: adminError } = await supabase
      .from('users')
      .select('is_admin')
      .eq('email', session.user.email)
      .single();

    if (adminError || !adminCheck?.is_admin) {
      return NextResponse.json({ error: '관리자 권한이 필요합니다.' }, { status: 403 });
    }

    // 회원 목록 조회
    const { data, error } = await supabase
      .from('users')
      .select('id, email, name, is_admin, status, created_at, updated_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('🔍 [회원목록 API] Supabase 에러:', error);
      return NextResponse.json({ error: '회원 목록을 불러오는데 실패했습니다.' }, { status: 500 });
    }

    // 30일 이상 미접속 회원은 status를 '장기미접속'으로 표시
    const now = new Date();
    const users = (data ?? []).map(u => {
      const updated = u.updated_at ? new Date(u.updated_at) : new Date(u.created_at);
      const days = (now.getTime() - updated.getTime()) / (1000 * 60 * 60 * 24);
      return {
        ...u,
        status: u.status === '정상' && days >= 30 ? '장기미접속' : u.status
      };
    });

    console.log('🔍 [회원목록 API] 조회된 회원 수:', users.length);
    return NextResponse.json(users);
  } catch (err) {
    console.error('🔍 [회원목록 API] 예외 발생:', err);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
} 