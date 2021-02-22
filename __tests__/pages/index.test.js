import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import ListPage from "../../pages/index";

describe("With Enzyme", () => {
  it('ListPage shows "Create Next App"', () => {
    const app = shallow(<ListPage />);

    expect(app.find("title").text()).toEqual("Create Next App");
    expect(app.find("h1").text()).toEqual("Welcome to Next.js!");
  });
});

describe("With Snapshot Testing", () => {
  it('ListPage shows "Create Next App"', () => {
    const component = renderer.create(<ListPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});