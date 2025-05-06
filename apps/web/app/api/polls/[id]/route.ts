import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { supabase } from '@/lib/supabaseClient';

function toCamel(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(toCamel);
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: any = {};
    for (const key in obj) {
      const camel = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
      newObj[camel] = toCamel(obj[key]);
    }
    return newObj;
  }
  return obj;
}

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { data, error } = await supabase.from('polls').select('*, categories(name)').eq('id', params.id).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json(toCamel(data));
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

  const allowedFields = ['question', 'options', 'endsAt', 'category_id'];
  const body = await request.json();
  const updateFields: any = {};
  for (const key of allowedFields) {
    if (body[key] !== undefined) {
      const dbKey = key.replace(/[A-Z]/g, m => '_' + m.toLowerCase());
      updateFields[dbKey] = body[key];
    }
  }
  updateFields.updated_at = new Date().toISOString();

  // poll 존재 및 권한 체크
  const { data: poll, error: getError } = await supabase
    .from('polls')
    .select('id, user_email')
    .eq('id', params.id)
    .single();
  if (getError || !poll) {
    return NextResponse.json({ error: '투표를 찾을 수 없습니다.' }, { status: 404 });
  }
  if (poll.user_email !== session.user?.email) {
    return NextResponse.json({ error: '수정 권한이 없습니다.' }, { status: 403 });
  }

  const { data, error } = await supabase
    .from('polls')
    .update(updateFields)
    .eq('id', params.id)
    .eq('user_email', session.user?.email)
    .select('*, categories(id, name)')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(toCamel(data));
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

  // poll 존재 및 권한 체크
  const { data: poll, error: getError } = await supabase
    .from('polls')
    .select('id, user_email')
    .eq('id', params.id)
    .single();
  if (getError || !poll) {
    return NextResponse.json({ error: '투표를 찾을 수 없습니다.' }, { status: 404 });
  }
  if (poll.user_email !== session.user?.email) {
    return NextResponse.json({ error: '삭제 권한이 없습니다.' }, { status: 403 });
  }

  // poll_votes 테이블의 투표 기록 먼저 삭제
  const { error: votesError } = await supabase
    .from('poll_votes')
    .delete()
    .eq('poll_id', params.id);

  if (votesError) return NextResponse.json({ error: votesError.message }, { status: 400 });

  const { error } = await supabase
    .from('polls')
    .delete()
    .eq('id', params.id)
    .eq('user_email', session.user?.email);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
} 