import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as StarIcon } from "../../../static/images/star.svg";

import { Li, Title, Stars, Header, Body } from "./styles";

const ListItem = ({ children, stars }) => (
  <Li>
    <a href="/#">
      <Header>
        <Title>{children}</Title>
      </Header>
      <Body>
        <StarIcon />
        <Stars>{stars}</Stars>
      </Body>
    </a>
  </Li>
);

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
};

export default ListItem;
