import styled from "styled-components";

import { em } from "../../../styles/tools";

export const Li = styled.li`
  background: #283042;
  padding: ${em(8)};
  border-left: ${em(4)} solid #283042;
  border-radius: ${em(4)};
  margin: ${em(8)} 0;
  transition: background 0.15s linear, border-left 0.15s linear;

  &:hover {
    border-left: ${em(4)} solid #ff015d;
    background: #283042;
  }
`;
