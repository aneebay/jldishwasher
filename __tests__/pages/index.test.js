import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import ListPage from "../../pages/index";

describe("With Enzyme", () => {
  it('ListPage shows "Create Next App"', () => {
    const app = shallow(<ListPage />);

    expect(app.find("header").text()).toEqual("Create Next App");
  });
});

describe("With Snapshot Testing", () => {
  it('ListPage shows "Create Next App"', () => {
    const component = renderer.create(<ListPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});