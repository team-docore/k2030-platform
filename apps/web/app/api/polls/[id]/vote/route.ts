import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { supabase } from '@/lib/supabaseClient';
import { PollOption } from '@/types/poll';

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

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json(
      { error: '로그인이 필요합니다.' },
      { status: 401 }
    );
  }

  try {
    const { optionId } = await req.json();
    const userEmail = session.user?.email;
    console.log('서버에서 받은 optionId:', optionId);

    // 1. 이미 투표했는지 확인
    const { data: existingVote, error: voteCheckError } = await supabase
      .from('poll_votes')
      .select('*')
      .eq('poll_id', params.id)
      .eq('user_email', userEmail)
      .single();

    if (voteCheckError && voteCheckError.code !== 'PGRST116') {
      console.error('투표 확인 에러:', voteCheckError);
      return NextResponse.json({ error: '투표 확인 중 오류가 발생했습니다.' }, { status: 500 });
    }

    if (existingVote) {
      return NextResponse.json(
        { error: 'already_voted', message: '이미 투표하셨습니다.' },
        { status: 400 }
      );
    }

    // 2. 투표 대상 poll 조회
    const { data: poll, error: pollError } = await supabase
      .from('polls')
      .select('*')
      .eq('id', params.id)
      .single();

    if (pollError) {
      console.error('Poll 조회 에러:', pollError);
      return NextResponse.json({ error: 'Poll not found' }, { status: 404 });
    }
    console.log('서버에서 받은 poll.options:', poll.options);

    // poll.options가 string이면 파싱
    const pollOptionsArr = Array.isArray(poll.options)
      ? poll.options
      : typeof poll.options === 'string'
        ? JSON.parse(poll.options)
        : [];

    console.log('파싱된 options:', pollOptionsArr);
    console.log('선택된 optionId:', optionId);

    // 선택된 옵션이 존재하는지 확인
    const selectedOption = pollOptionsArr.find((opt: PollOption) => opt.id === optionId);
    if (!selectedOption) {
      console.error('선택된 옵션이 존재하지 않습니다:', {
        optionId,
        availableOptions: pollOptionsArr.map((opt: PollOption) => ({ id: opt.id, text: opt.text }))
      });
      return NextResponse.json({ error: '선택한 옵션이 존재하지 않습니다.' }, { status: 400 });
    }

    // 3. 옵션 votes 증가 (깊은 복사)
    const options = pollOptionsArr.map((opt: any) => {
      const isSelected = opt.id === optionId;
      console.log(`옵션 ${opt.id} 처리:`, {
        isSelected,
        currentVotes: opt.votes,
        newVotes: isSelected ? (opt.votes || 0) + 1 : (opt.votes || 0)
      });
      return {
        ...opt,
        votes: isSelected ? (opt.votes || 0) + 1 : (opt.votes || 0)
      };
    });

    console.log('업데이트된 options:', options);

    const total_votes = (poll.total_votes || 0) + 1;

    // 4. poll 업데이트
    const { data: updated, error: updateError } = await supabase
      .from('polls')
      .update({ 
        options: options,
        total_votes 
      })
      .eq('id', params.id)
      .select('*, categories(name)')
      .single();

    console.log('업데이트 결과:', updated);
    console.log('업데이트 에러:', updateError);

    if (updateError) {
      console.error('업데이트 에러:', updateError);
      return NextResponse.json({ error: 'Failed to update poll' }, { status: 500 });
    }

    // 5. 투표 기록 저장
    const { error: voteRecordError } = await supabase
      .from('poll_votes')
      .insert([
        {
          poll_id: params.id,
          user_email: userEmail,
          option_id: optionId
        }
      ]);

    if (voteRecordError) {
      console.error('투표 기록 저장 에러:', voteRecordError);
      return NextResponse.json({ error: '투표 기록 저장 중 오류가 발생했습니다.' }, { status: 500 });
    }

    // remainTime, isClosed 계산 후 반환
    const { remainTime, isClosed } = calculateRemainTime(updated.ends_at);

    const result = {
      ...toCamel(updated),
      options: options,
      remainTime,
      isClosed,
      hasVoted: true,
      totalVotes: total_votes
    };

    console.log('최종 응답 데이터:', result);

    return NextResponse.json(result);
  } catch (error) {
    console.error('투표 처리 중 에러:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 