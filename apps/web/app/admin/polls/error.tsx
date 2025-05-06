'use client';
// DOCORE: 어드민 투표 관리 페이지 에러 컴포넌트
import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2 style={{ color: 'red', marginBottom: 16 }}>오류가 발생했습니다</h2>
      <button
        onClick={reset}
        style={{
          padding: '10px 24px',
          background: '#4d8888',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
        }}
      >
        다시 시도
      </button>
    </div>
  );
} 