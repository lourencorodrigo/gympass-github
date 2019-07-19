import React from "react";
import PropTypes from "prop-types";

import { Ul } from "./styles";
import ListItem from "./ListItem";

const List = ({ children }) => <Ul>{children}</Ul>;

List.propTypes = {
  children: PropTypes.any
};

List.Item = ListItem;

export default List;
