import styled from "styled-components";

import { em } from "../../styles/tools";

export const Wrapper = styled.div`
  font-size: ${em(12)};
  background: #283042;
  width: 100%;
  height: ${em(60)};
  border-radius: ${em(40)};
  padding-right: ${em(10)};
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 0 ${em(5)} rgba(0, 0, 0, 0.24);
  transition: background 0.15s ease-in-out;

  &:focus-within {
    background: white;
  }
`;

export const Label = styled.label`
  padding-left: ${em(16)};
  margin: 0;
`;

export const Image = styled.img`
  width: ${em(30)};
  user-select: none;
`;

export const Input = styled.input`
  border: 0;
  background: transparent;
  width: 100%;
  outline-width: 0;
  font-weight: 500;
  font-size: ${em(20)};
  line-height: ${em(28)};
  height: 90%;
  color: #717888;
  font-family: "Roboto", sans-serif;
  padding-left: ${em(8)};

  ::placeholder {
    color: #717888;
    opacity: 0.5;
  }
`;
