import styled from "styled-components";

import { em } from "../../styles/tools";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d2331;
  height: 100%;
`;

export const WrapperInput = styled.div`
  width: ${em(280)};
  transition: width 0.25s ease-in;

  &:focus-within {
    width: ${em(360)};
  }
`;
