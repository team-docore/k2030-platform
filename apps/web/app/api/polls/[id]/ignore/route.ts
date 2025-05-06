import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { supabase } from '@/lib/supabaseClient';

export async function POST(
  _req: Request,
  { params }: { params: { id: string } }
) {
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

    // 2. poll_ignores에 저장
    const { error } = await supabase
      .from('poll_ignores')
      .insert([
        { 
          user_id: userData.id,
          user_email: userEmail,
          poll_id: params.id,
          ignored_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('관심없음 저장 에러:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('관심없음 처리 중 에러:', error);
    return NextResponse.json(
      { error: '관심없음 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
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

    const { error } = await supabase
      .from('poll_ignores')
      .delete()
      .eq('user_id', userData.id)
      .eq('poll_id', params.id);

    if (error) {
      console.error('관심없음 삭제 에러:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('관심없음 삭제 중 에러:', error);
    return NextResponse.json(
      { error: '관심없음 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 