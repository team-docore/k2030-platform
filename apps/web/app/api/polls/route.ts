import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { supabase } from '@/lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';

function calculateRemainTime(endsAt: string): { remainTime: string; isClosed: boolean } {
  const endDate = new Date(endsAt);
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { remainTime: '마감', isClosed: true };
  }

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    remainTime: `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`,
    isClosed: false
  };
}

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

export async function GET() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  try {
    // 1. 관심없음 poll_id 목록 조회 (user_email 기준)
    let ignorePollIds: string[] = [];
    if (userEmail) {
      const { data: ignores } = await supabase
        .from('poll_ignores')
        .select('poll_id')
        .eq('user_email', userEmail);
      ignorePollIds = (ignores ?? []).map(row => row.poll_id);
    }

    // 2. polls에서 관심없음 poll_id 제외
    let query = supabase
      .from('polls')
      .select('*, categories(name)')
      .order('created_at', { ascending: false });

    if (ignorePollIds.length > 0) {
      query = query.not('id', 'in', `(${ignorePollIds.join(',')})`);
    }

    const { data: polls, error } = await query;

    if (error) {
      throw error;
    }

    // 중복 제거
    const uniquePolls = polls.reduce((acc: any[], current: any) => {
      const x = acc.find(item => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    // 사용자가 투표한 기록 가져오기
    let userVotes: any[] = [];
    if (userEmail) {
      const { data: votes, error: votesError } = await supabase
        .from('poll_votes')
        .select('poll_id, option_id')
        .eq('user_email', userEmail);

      if (!votesError) {
        userVotes = votes;
      }
    }

    const pollsWithRemainTime = uniquePolls.map(poll => {
      const { remainTime, isClosed } = calculateRemainTime(poll.ends_at);
      const hasVoted = userVotes.some(vote => vote.poll_id === poll.id);
      return {
        ...poll,
        remainTime,
        isClosed,
        hasVoted
      };
    });

    // snake_case → camelCase 변환
    const result = (pollsWithRemainTime ?? []).map(toCamel);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching polls:', error);
    return NextResponse.json(
      { error: 'Failed to fetch polls' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json(
      { error: '로그인이 필요합니다.' },
      { status: 401 }
    );
  }

  try {
    const { question, options, category_id } = await request.json();
    const now = new Date();
    const endsAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24시간 뒤

    const { data: inserted, error: insertError } = await supabase.from('polls').insert([
      {
        question,
        options: options.map((text: string) => ({
          id: uuidv4(),
          text,
          votes: 0,
        })),
        total_votes: 0,
        created_at: now.toISOString(),
        updated_at: now.toISOString(),
        ends_at: endsAt.toISOString(),
        user_email: session.user?.email ?? undefined,
        category_id,
      },
    ]).select('*, categories(name)').single();

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // snake_case → camelCase 변환
    return NextResponse.json(toCamel(inserted));
  } catch (error) {
    return NextResponse.json(
      { error: '투표 생성에 실패했습니다.' },
      { status: 500 }
    );
  }
} 