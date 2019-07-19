import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import { em } from "../../styles/tools";

export const WrapperShimmer = styled.div`
  padding: ${em(12)} 0;
`;

export const Header = styled.div``;

export const Body = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
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

export const Link = styled(LinkRouter)`
  color: white;

  &:hover {
    text-decoration: none;
  }
`;
