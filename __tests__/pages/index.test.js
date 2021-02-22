import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import ProductGrid from "../../pages/index";

describe("With Enzyme", () => {
  it('ProductGrid shows expected title and heading text', () => {
    const app = shallow(<ProductGrid />);

    expect(app.find("title").text()).toEqual("Dishwashers");
    expect(app.find("h1").text()).toEqual("Dishwashers");
  });
});

describe("With Snapshot Testing", () => {
  it('ProductGrid shows "Create Next App"', () => {
    const component = renderer.create(<ProductGrid />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});