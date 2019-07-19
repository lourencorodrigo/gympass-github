import styled from "styled-components";

import { em } from "../../styles/tools";

export const Wrapper = styled.div`
  display: flex;
  padding: ${em(36)} 0 ${em(16)} 0;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: ${em(14)};
  line-height: ${em(21)};
  padding-top: ${em(16)};
  color: white;
  text-transform: uppercase;
  border-top: ${em(4)} solid #ff015d;
  margin: 0;
`;