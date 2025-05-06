export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage?: number;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  totalVotes: number;
  createdAt: string;
  updatedAt: string;
  endsAt: string;
  userEmail: string;
  categories?: {
    id: number;
    name: string;
  };
  hasVoted?: boolean;
  votedOptionId?: string;
  remainTime?: string;
  isClosed?: boolean;
}

export interface PollVote {
  pollId: string;
  optionId: string;
  userId: string;
  createdAt: Date;
} 