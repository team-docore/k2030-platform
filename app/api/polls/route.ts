import { NextRequest, NextResponse } from 'next/server';

let polls = [
  {
    id: '1',
    question: '2030 세대가 가장 관심있는 이슈는?',
    options: [
      { id: '1', text: '부동산/주거', votes: 150 },
      { id: '2', text: '취업/일자리', votes: 120 },
      { id: '3', text: '결혼/연애', votes: 80 },
    ],
    totalVotes: 350,
    createdAt: new Date().toISOString(),
    endsAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(polls);
}

export async function POST(req: NextRequest) {
  const { question, options } = await req.json();
  const newPoll = {
    id: (polls.length + 1).toString(),
    question,
    options: options.map((text: string, idx: number) => ({ id: (idx + 1).toString(), text, votes: 0 })),
    totalVotes: 0,
    createdAt: new Date().toISOString(),
    endsAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
  polls = [newPoll, ...polls];
  return NextResponse.json(newPoll, { status: 201 });
} 