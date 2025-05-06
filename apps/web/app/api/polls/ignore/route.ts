import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { supabase } from '@/lib/supabaseClient';

export async function GET() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  
  if (!userEmail) {
    return NextResponse.json(
      { error: '로그인이 필요합니다.' },
      { status: 401 }
    );
  }

  try {
    // 1. 먼저 users 테이블에서 user_id 조회
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('email', userEmail)
      .single();

    if (userError || !userData) {
      console.error('사용자 정보 조회 에러:', userError);
      return NextResponse.json({ error: '사용자를 찾을 수 없습니다.' }, { status: 404 });
    }

    // 2. poll_ignores 조회
    const { data, error } = await supabase
      .from('poll_ignores')
      .select('poll_id')
      .eq('user_id', userData.id);

    if (error) {
      console.error('관심없음 목록 조회 에러:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const ignoredPollIds = (data ?? []).map(row => row.poll_id);
    return NextResponse.json({ ignoredPollIds });
  } catch (error) {
    console.error('관심없음 목록 조회 중 에러:', error);
    return NextResponse.json(
      { error: '관심없음 목록 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 