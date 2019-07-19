import React from "react";
import ReactDOM from "react-dom";
import ReactTestRenderer from "react-test-renderer";

import ShimmerLoading from "./";

describe("ShimmerLoading component", () => {
  const element = <ShimmerLoading />;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(element, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should compare the component with a snapshot", () => {
    const component = ReactTestRenderer.create(element);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
