// DOCORE: NextAuth 에러 처리 API
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const error = searchParams.get('error');
  
  return NextResponse.json({ 
    error: error || '인증 과정에서 오류가 발생했습니다.' 
  }, { 
    status: 400 
  });
} 