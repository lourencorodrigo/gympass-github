import React from "react";
import PropTypes from "prop-types";

import { Li } from "./styles";

const ListItem = ({ children }) => <Li>{children}</Li>;

ListItem.propTypes = {
  children: PropTypes.any.isRequired
};

export default ListItem;
