import styled from "styled-components";

import { em } from "../../styles/tools";

export const TableWrapper = styled.table`
  width: 100%;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
  & > tr:hover {
    background: #283042;
    border-left: ${em(4)} solid #ff015d;
  }
`;

export const Tr = styled.tr`
  transition: background 0.15s linear, border 0.15s linear;
  border-left: ${em(4)} solid #1d2331;
`;

export const Th = styled.th`
  color: white;
  padding: ${em(10)};
  font-size: ${em(14)};
`;

export const Td = styled.td`
  color: white;
  padding: ${em(10)};
  font-size: ${em(14)};
`;
