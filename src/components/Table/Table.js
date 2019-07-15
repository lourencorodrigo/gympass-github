import React from "react";
import PropTypes from "prop-types";

import { TableWrapper, Thead, Tbody, Tr, Th, Td } from "./styles";

const Table = ({ children }) => <TableWrapper>{children}</TableWrapper>;

Table.propTypes = {
  children: PropTypes.any
};

Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
