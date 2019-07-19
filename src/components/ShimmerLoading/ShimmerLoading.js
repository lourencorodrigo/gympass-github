import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

const ShimmerLoading = ({ width = "250", height = "16" }) => (
  <Wrapper width={width} height={height} />
);

ShimmerLoading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default ShimmerLoading;
