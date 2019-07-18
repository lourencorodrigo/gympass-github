import styled from "styled-components";

export const Li = styled.li`
  padding: 8px;
  border-left: 4px solid #1d2331;
  transition: background 0.15s linear, border-left 0.15s linear;

  &:hover {
    border-left: 4px solid #ff015d;
    background: #283042;
  }
`;
