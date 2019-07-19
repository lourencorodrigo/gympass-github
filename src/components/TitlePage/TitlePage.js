import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Title } from "./styles";

const TitlePage = ({ children }) => (
  <Wrapper>
    <Title>{children}</Title>
  </Wrapper>
);

TitlePage.propTypes = {
  children: PropTypes.any.isRequired
};

export default TitlePage;
