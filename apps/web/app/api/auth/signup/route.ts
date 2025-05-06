// DOCORE: 회원가입 API (이메일/상태 밸리데이션)
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  const { email, name, password } = await req.json();
  if (!email) return NextResponse.json({ error: '이메일이 필요합니다.' }, { status: 400 });

  // 기존 회원 여부 및 status 체크
  const { data: user } = await supabase
    .from('users')
    .select('status')
    .eq('email', email)
    .single();

  if (user) {
    if (user.status === '정지') {
      return NextResponse.json({ error: '정지된 회원입니다. 관리자에게 문의하세요.' }, { status: 400 });
    }
    if (user.status === '탈퇴') {
      return NextResponse.json({ error: '이미 탈퇴한 이메일입니다. 다른 이메일로 가입해 주세요.' }, { status: 400 });
    }
    return NextResponse.json({ error: '이미 가입된 이메일입니다.' }, { status: 400 });
  }

  // 회원 생성(비밀번호 등 추가 구현 필요)
  const { error } = await supabase
    .from('users')
    .insert([{ email, name, status: '정상' }]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
} 