// DOCORE: 어드민 회원 상태/권한 변경 API
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { status, is_admin } = await req.json();
  if (!status && typeof is_admin === 'undefined') return NextResponse.json({ error: 'status 또는 is_admin 값이 필요합니다.' }, { status: 400 });

  const updateFields: any = {};
  if (status) updateFields.status = status;
  if (typeof is_admin !== 'undefined') updateFields.is_admin = is_admin;

  const { data, error } = await supabase
    .from('users')
    .update(updateFields)
    .eq('id', context.params.id)
    .select('id, email, name, is_admin, status, created_at, updated_at')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
} 