import React from "react";

import TextField from "../../components/TextField";

import { Wrapper, WrapperInput } from "./styles";

const Home = () => (
  <Wrapper>
    <WrapperInput>
      <TextField id="user" placeholder="Enter Your User GitHub" type="text" />
    </WrapperInput>
  </Wrapper>
);

export default Home;
