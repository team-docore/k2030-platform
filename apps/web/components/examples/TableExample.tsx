// DOCORE: 테이블 컴포넌트 사용 예시
import React from 'react';
import { Table } from '@/components/design/Table';
import { PrimaryButton } from '@/components/design/Button';
import styled from 'styled-components';

const ActionButton = styled(PrimaryButton)`
  padding: 0.3rem 1.2rem;
  font-size: 14px;
  margin-right: 8px;
`;

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const mockData: User[] = [
  { id: '1', name: '홍길동', email: 'hong@example.com', role: '관리자', status: '활성' },
  { id: '2', name: '김철수', email: 'kim@example.com', role: '일반', status: '활성' },
  { id: '3', name: '이영희', email: 'lee@example.com', role: '일반', status: '비활성' },
];

export function TableExample() {
  const handleRowClick = (user: User) => {
    console.log('선택된 사용자:', user);
  };

  const renderRow = (user: User) => (
    <>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.status}</td>
      <td>
        <ActionButton onClick={(e) => {
          e.stopPropagation();
          console.log('수정:', user);
        }}>
          수정
        </ActionButton>
        <ActionButton 
          style={{ background: '#e5e7eb', color: '#222' }}
          onClick={(e) => {
            e.stopPropagation();
            console.log('삭제:', user);
          }}
        >
          삭제
        </ActionButton>
      </td>
    </>
  );

  return (
    <Table
      headers={['이름', '이메일', '권한', '상태', '관리']}
      data={mockData}
      onRowClick={handleRowClick}
      renderRow={renderRow}
      emptyMessage="사용자가 없습니다."
    />
  );
}

export default TableExample; 