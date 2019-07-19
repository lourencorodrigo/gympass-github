import React from "react";
import ReactDOM from "react-dom";
import ReactTestRenderer from "react-test-renderer";
import { mount } from "enzyme";

import List from "./";

describe("List component", () => {
  const element = (
    <List>
      <List.Item>Test 1</List.Item>
      <List.Item>Test 2</List.Item>
    </List>
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(element, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should compare the text.", () => {
    const wrapper = mount(element);
    expect(wrapper.find("li").length).toEqual(2);
  });

  it("should compare the component with a snapshot", () => {
    const component = ReactTestRenderer.create(element);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
