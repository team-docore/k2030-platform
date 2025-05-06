// DOCORE: 어드민 회원 전체 목록 API
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET() {
  const { data, error } = await supabase
    .from('users')
    .select('id, email, name, is_admin, status, created_at, updated_at')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

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

  return NextResponse.json(users);
} 