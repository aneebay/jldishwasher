import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import axios from "axios";
import { act } from 'react-dom/test-utils';

jest.mock("axios");

import ProductGrid from "../../pages/index";

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve));
    wrapper.update();
  });
};

describe("With Enzyme", () => {
  test("ProductGrid shows expected title and heading text", async () => {
    const app = shallow(<ProductGrid />);

    await waitForComponentToPaint(app);

    expect(app.find("title").text()).toEqual("Dishwashers - Product Grid");
    expect(app.find("h1").text()).toEqual("Dishwashers");
  });

  test("ProductGrid renders expected number of ProductItem component elements", async () => {
    const mockProductGridApiResponse = {
      data: [
          {
            productId: "3289196",
            title: "Bosch SMS25EW00G Freestanding Dishwasher, White",
            image: "//johnlewis.scene7.com/is/image/JohnLewis/237026151?",
            price: {
              was: "",
              then1: "",
              then2: "",
              now: "379.00",
              uom: "",
              currency: "GBP",
            },
          },
          {
            productId: "3218074",
            title: "osch SMS24AW01G Freestanding Dishwasher, White",
            "image": "//johnlewis.scene7.com/is/image/JohnLewis/236888513?",
            price: {
              was: "",
              then1: "",
              then2: "",
              now: "329.00",
              uom: "",
              currency: "GBP",
            },
          },
          {
            productId: "4081952",
            title: "Bosch SMS46IW10G Freestanding Dishwasher, A++ Energy Rating, White",
            image: "//johnlewis.scene7.com/is/image/JohnLewis/238008944?",
            price: {
              was: "",
              then1: "",
              then2: "",
              now: "479.00",
              uom: "",
              currency: "GBP",
            },
          }
        ]
    };
    axios.get.mockResolvedValue(mockProductGridApiResponse);
    const app = mount(<ProductGrid />);

    await waitForComponentToPaint(app);

    expect(app.find(".product-item").length).toBe(3);
  });
});

describe("With Snapshot Testing", () => {
  test('ProductGrid shows "Create Next App"', () => {
    const component = renderer.create(<ProductGrid />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
