import React from "react";
import PropTypes from "prop-types";

import iconSearch from "../../assets/images/search.svg";

import { Wrapper, Image, Input, Label } from "./styles";

const TextField = ({ id, ...props }) => (
  <Wrapper>
    <Label htmlFor={id}>
      <Image htmlFor={id} src={iconSearch} />
    </Label>
    <Input id={id} {...props} />
  </Wrapper>
);

TextField.propTypes = {
  id: PropTypes.string
};

export default TextField;
