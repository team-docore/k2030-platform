import { Poll } from '@/types/poll';

const now = new Date();
const endsAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);

export let polls: Poll[] = [
  {
    id: '1',
    question: '2030 세대가 가장 관심있는 이슈는?',
    options: [
      { id: '1', text: '부동산/주거', votes: 150 },
      { id: '2', text: '취업/일자리', votes: 120 },
      { id: '3', text: '결혼/연애', votes: 80 },
    ],
    totalVotes: 350,
    createdAt: now,
    updatedAt: now,
    endsAt: endsAt,
    userEmail: 'test1@example.com',
  },
]; 