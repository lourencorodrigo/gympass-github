import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
  & > tr:hover {
    background: #283042;
    border-left: 4px solid #ff015d;
  }
`;

export const Tr = styled.tr`
  transition: background 0.15s linear, border 0.15s linear;
  border-left: 4px solid #1d2331;
`;

export const Th = styled.th`
  color: white;
  padding: 10px;
  font-size: 14px;
`;

export const Td = styled.td`
  color: white;
  padding: 10px;
  font-size: 14px;
`;
