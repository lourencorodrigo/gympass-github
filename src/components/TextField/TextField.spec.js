import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import TextField from "./";

describe("List component", () => {
  const onChange = jest.fn();
  const element = (
    <TextField
      onChange={onChange}
      value="value"
      name="name"
      id="id"
      placeholder="Enter Your User GitHub"
      type="text"
    />
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(element, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should compare the text.", () => {
    const wrapper = mount(element);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Changed" } });
    expect(onChange).toHaveBeenCalled();
  });
});
