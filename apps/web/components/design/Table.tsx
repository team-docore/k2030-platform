// DOCORE: 공통 테이블 컴포넌트. 모든 테이블 UI의 기본이 되는 컴포넌트입니다.
import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 16px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TableHead = styled.thead`
  background: #f8fafc;
  color: #222;
  font-weight: 700;
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #f8fafc;
    }
  }
`;

const TableRow = styled.tr<{ $clickable?: boolean }>`
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
`;

const TableCell = styled.td`
  padding: 12px 16px;
  text-align: left;
  vertical-align: middle;
`;

const TableHeaderCell = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
`;

interface TableProps {
  headers: string[];
  data: any[];
  onRowClick?: (row: any) => void;
  renderRow: (row: any) => React.ReactNode;
  emptyMessage?: string;
}

export function Table({ headers, data, onRowClick, renderRow, emptyMessage = '데이터가 없습니다.' }: TableProps) {
  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <tr>
            {headers.map((header, index) => (
              <TableHeaderCell key={index}>{header}</TableHeaderCell>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={headers.length} style={{ textAlign: 'center', padding: '32px 16px' }}>
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow 
                key={index} 
                $clickable={!!onRowClick}
                onClick={() => onRowClick?.(row)}
              >
                {renderRow(row)}
              </TableRow>
            ))
          )}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
}

export default Table; 