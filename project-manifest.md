# K2030 Platform Project Manifest

## Project Structure
```
k2030-platform/
├── apps/
│   └── web/                 # Next.js 웹 애플리케이션
├── packages/               # 공유 패키지
├── public/                 # 정적 파일
└── turbo.json             # Turborepo 설정
```

## Stable Configuration
- Next.js 14.1.0
- pnpm 8.15.4
- TypeScript 5.3.3
- React 18.2.0
- Vercel 배포 설정 완료

## Environment Variables
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

## Build Configuration
- Vercel 배포 설정 완료
- pnpm workspace 설정 완료
- TypeScript 설정 완료

## Known Working State
- Commit: d4a7829
- Branch: main
- Build: 성공
- Deploy: 성공

## Last Updated
- Date: 2024-04-09
- Status: Stable

## admin(관리자) 투표 관리 구조
- pages/admin/polls.tsx : 어드민 투표 관리 메인 페이지
- components/admin/PollAdminTable.tsx : 투표 목록/삭제/수정 테이블
- components/admin/PollAdminForm.tsx : 투표 등록/수정 폼

## 기존 사용자 투표 구조
- apps/web/components/sections/ThinkingSection.tsx : 사용자 투표/결과 전용

---

# (이후 변경사항 발생 시 이 파일을 항상 먼저 수정) 