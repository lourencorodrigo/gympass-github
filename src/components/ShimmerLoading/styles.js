import styled from "styled-components";

import { em } from "../../styles/tools";

export const Wrapper = styled.div`
  width: ${({ width }) => em(width)};
  height: ${({ height }) => em(height)};
  background: #252b38;
  border-radius: ${em(8)};
`;
