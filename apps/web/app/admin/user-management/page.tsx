'use client';
// DOCORE: 어드민 회원관리 페이지
import React, { useEffect, useState } from 'react';
import Card from '@/components/design/Card';
import { Title, SubTitle } from '@/components/design/Typography';
import { PrimaryButton } from '@/components/design/Button';
import { useSession } from 'next-auth/react';
import LoadingSplash from '@/components/common/LoadingSplash';

interface User {
  id: string;
  email: string;
  name?: string;
  is_admin: boolean;
  status: string;
  created_at: string;
  updated_at: string;
}

export default function AdminUserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const { data: session, status } = useSession();

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/users', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || '회원 목록을 불러오는데 실패했습니다.');
      }
      
      const data = await res.json();
      console.log('🔍 [회원관리] 회원 목록:', data);
      if (!Array.isArray(data)) {
        throw new Error('잘못된 데이터 형식입니다.');
      }
      setUsers(data);
    } catch (err: any) {
      console.error('🔍 [회원관리] 오류:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.isAdmin) {
      fetchUsers();
    }
  }, [status, session]);

  if (status === 'loading' || loading) {
    return <LoadingSplash />;
  }

  if (!session?.user?.isAdmin) {
    return null;
  }

  const handleStatusChange = async (id: string, status: string) => {
    setUpdating(id);
    try {
      const res = await fetch(`/api/admin/users/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setUsers(users => users.map(u => u.id === id ? { ...u, status: data.status } : u));
    } catch (err: any) {
      alert(err.message);
    } finally {
      setUpdating(null);
    }
  };

  const isCurrentUser = (user: User) => {
    return session?.user?.email === user.email;
  };

  const disabledStyle = { background: '#e5e7eb', color: '#fff', opacity: 0.5, cursor: 'not-allowed' };

  return (
    <Card>
      <Title>회원관리</Title>
      <div style={{ marginTop: 24, color: '#666' }}>
        <SubTitle>회원 목록</SubTitle>
        {loading ? (
          <div>로딩 중...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <table style={{ width: '100%', marginTop: 16, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#222', fontWeight: 700 }}>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>이메일</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>이름</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>권한</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>가입일</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>상태</th>
                <th style={{ padding: '10px 8px', textAlign: 'left' }}>관리</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => {
                const isSelf = isCurrentUser(user);
                return (
                  <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '10px 8px' }}>{user.email}</td>
                    <td style={{ padding: '10px 8px' }}>{user.name || '-'}</td>
                    <td style={{ padding: '10px 8px' }}>{user.is_admin ? '관리자' : '일반'}</td>
                    <td style={{ padding: '10px 8px' }}>{user.created_at?.slice(0, 10)}</td>
                    <td style={{ padding: '10px 8px', fontWeight: 600 }}>{user.status}</td>
                    <td style={{ padding: '10px 8px', display: 'flex', gap: 8 }}>
                      {user.status === '정상' && (
                        <PrimaryButton 
                          style={isSelf ? { padding: '0.3rem 1.2rem', fontSize: 14, ...disabledStyle } : { padding: '0.3rem 1.2rem', fontSize: 14 }} 
                          disabled={updating === user.id || isSelf}
                          onClick={() => handleStatusChange(user.id, '정지')}
                        >
                          정지
                        </PrimaryButton>
                      )}
                      {user.status === '정지' && (
                        <PrimaryButton 
                          style={isSelf ? { padding: '0.3rem 1.2rem', fontSize: 14, ...disabledStyle } : { padding: '0.3rem 1.2rem', fontSize: 14 }} 
                          disabled={updating === user.id || isSelf}
                          onClick={() => handleStatusChange(user.id, '정상')}
                        >
                          복귀
                        </PrimaryButton>
                      )}
                      {user.status !== '탈퇴' && (
                        <PrimaryButton 
                          style={isSelf ? { padding: '0.3rem 1.2rem', fontSize: 14, ...disabledStyle } : { padding: '0.3rem 1.2rem', fontSize: 14, background: '#e5e7eb', color: '#222' }} 
                          disabled={updating === user.id || isSelf}
                          onClick={() => handleStatusChange(user.id, '탈퇴')}
                        >
                          탈퇴
                        </PrimaryButton>
                      )}
                      <PrimaryButton
                        style={isSelf
                          ? { padding: '0.3rem 1.2rem', fontSize: 14, ...disabledStyle }
                          : { padding: '0.3rem 1.2rem', fontSize: 14, background: user.is_admin ? '#e5e7eb' : '#4d8888', color: user.is_admin ? '#222' : '#fff' }
                        }
                        disabled={updating === user.id || isSelf}
                        onClick={async () => {
                          if (isSelf) return;
                          setUpdating(user.id);
                          try {
                            const res = await fetch(`/api/admin/users/${user.id}/status`, {
                              method: 'PATCH',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ is_admin: !user.is_admin })
                            });
                            const data = await res.json();
                            if (data.error) throw new Error(data.error);
                            setUsers(users => users.map(u => u.id === user.id ? { ...u, is_admin: data.is_admin } : u));
                          } catch (err: any) {
                            alert(err.message);
                          } finally {
                            setUpdating(null);
                          }
                        }}
                      >
                        {user.is_admin ? '관리자해제' : '관리자부여'}
                      </PrimaryButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </Card>
  );
} 