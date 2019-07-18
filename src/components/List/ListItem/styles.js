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

export const Header = styled.div``;

export const Body = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  color: #fcfeff;
`;

export const Stars = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #fcfeff;
  padding: 0 8px;
`;
