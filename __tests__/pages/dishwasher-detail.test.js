import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: {
        pid: "1234",
      },
      asPath: "",
    };
  },
}));

jest.mock("axios");

import ProductDetail from "../../pages/dishwashers/[pid]";

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve));
    wrapper.update();
  });
};

describe("With Enzyme", () => {
  test("ProductDetail renders expected number of ProductItem component elements", async () => {
    const mockProductDetailApiResponse = {
      title: "Bosch SMS25EW00G Freestanding Dishwasher, White",
      media: {
        images: {
          altText:
            "Buy Bosch SMS25EW00G Freestanding Dishwasher, White Online at johnlewis.com",
          urls: [
            "//johnlewis.scene7.com/is/image/JohnLewis/237026151?",
            "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt1?",
            "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt2?",
            "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt3?",
            "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt4?",
            "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt5?",
            "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt10?",
          ],
        },
        "360images": {
          swfUrl: "//johnlewis.scene7.com/is/content/JohnLewis/360-degree-view",
          urls: [],
        },
        videos: {
          videosList: [
            {
              videoType: "video/mp4",
              type: "jlVideo",
              name: "bosch_dosageassist_070120vid1",
              videoImageURL: "bosch_dosageassist_070120vid1",
              url: "bosch_dosageassist_070120vid1",
            },
            {
              videoType: "video/mp4",
              type: "jlVideo",
              name: "bosch_rackmatic_070120vid1",
              videoImageURL: "bosch_rackmatic_070120vid1",
              url: "bosch_rackmatic_070120vid1",
            },
          ],
          videoHost: "//johnlewis.scene7.com",
          videoImagePath: "/is/image/JohnLewis/",
          prod_vid_thmb: "$prod_vid_thmb$",
          videoHeight: "664",
          videoWidth: "664",
          imgAltText:
            "Buy Bosch SMS25EW00G Freestanding Dishwasher, White Online at johnlewis.com",
        },
      },
      price: {
        was: "",
        then1: "",
        then2: "",
        now: "379.00",
        uom: "",
        currency: "GBP",
      },
      details: {
        productInformation:
          "<p>The SMS25EW00G freestanding dishwasher from Bosch, has plenty of room, is brimming with the latest washer technology to treat your dishes with care and get them sparkling clean, and it’s very quiet. \n</p>\n\n<p>As a SilencePlus model you can enjoy maximum dishwashing performance with minimal noise. The EcoSilence Drive motor is powerful, durable, quiet and efficient with very low electricity consumption.</p>\n\n<p><strong>VarioDrawer</strong><br>\nThe retractable VarioDrawer on the third loading level is the ideal place for cutlery and smaller kitchen utensils.</p>\n\n<p><strong>AquaSensor</strong><br>\nThe AquaSensor regulates water usage depending on the type and degree of soiling, using light beams to manage the rinse. Depending on remaining food particles, grease or detergent residues in the rinse, the rinsing process is assessed to evaluate whether it needs to be continued.</p>\n\n<p><strong>Heat Exchanger</strong><br>\nDishwashers with heat exchangers treat precious glasses and porcelain with particular care and no risks. Water is pre-heated in the rinsing tank to avoid any temperature shocks. You always get the right temperature for optimal dish care.</p>\n\n<p><strong> Glass 40° programme</strong><br> \nThis programme gently cleans delicate glasses such as high-quality crystal glasses, while providing optimum drying resulting in a brilliant shine. Additionally, glass protection technology guards against soft water glass corrosion. The dishwasher constantly regulates the degree of hardness.</p>\n\n<p><strong>Child lock</strong><br>\nSafety is paramount and the child-proof door lock prevents the door from being opened and the programme being altered during the cycle.</p>\n\n<p><strong>ActiveWater</strong><br>\nThis feature ensures water and energy is saved through targeted water distribution, optimised filter technology, faster heating and higher pump performance for increased water circulation.</p>\n\n<p><strong>LoadSensor </strong><br> \nAlso saving water and energy use is the LoadSensor. For bigger loads, more water is needed to soak the dishes and the water level decreases. In that case more water is added. For smaller loads, less water is needed for rinsing.</p>\n\n<p><strong>Time Delay</strong><br>\nWith the time delay function you can pre-select any programme to start anytime within 24 hours, so your clean dishes are ready when you want. After the start of any programme a display indicates the precise remaining time.</p>\n\n<p>This great dishwasher from Bosch also features DosageAssist detergent dispenser, automatic detergent detection, 5 programmes ( Intensive 70 °C, Eco 50 °C, Glass 40 °C, Quick 45 °C, Pre rinse) and 2 special options (VarioSpeed Plus, Extra Dry).</p>",
      },
      displaySpecialOffer: "This is a special offer",
      additionalServices: {
        includedServices: ["2 year guarantee included"],
        optionalServices: [
          {
            id: "233568687",
            associatedProductId: "1465506",
            title:
              "5 years Protect Plus for your home appliance (includes guarantee period)",
            description:
              "Our electrical products are guaranteed against breakdown for a minimum of 2 years at no extra cost. With Protect Plus, you'll get up to 5 years of protection against accidental damage alongside your guarantee. <a href='https://www.johnlewis.com/protectplus'>More about Protect Plus</a>",
            price: "100.00",
            currency: "GBP",
            orderOnSite: 1,
            type: "ADDED_WARRANTY",
            url: "/protectplus",
            customProperties: {
              warrantyCustomGeneric:
                "Exclusions apply. To make sure this policy meets your needs, please read the <a href='https://johnlewis.scene7.com/is/content/JohnLewis/IPID-Home-Appliancepdf'>Insurance Product Information Document</a>.",
              warrantyCustomTooltip:
                "Our electrical products are guaranteed against breakdown for a minimum of 2 years at no extra cost. With Protect Plus for your home appliance, you'll get 5 years of protection against breakdown and accidental damage alongside your guarantee. <a href='https://www.johnlewis.com/our-services/protect-plus'>More about Protect Plus</a>.",
              warrantyCustomDescription:
                "Would you like to protect your home appliance for 5 years against breakdown (includes guarantee period) and accidental damage with Protect Plus?",
              warrantyCustomConfirm:
                "You've chosen Protect Plus to protect your home appliance against breakdown (includes guarantee period) and accidental damage for 5 years.  Terms and conditions apply.  Please ensure you have read the <a href='https://johnlewis.scene7.com/is/content/JohnLewis/IPID-Home-Appliancepdf'>Insurance Product Information Document</a> and <a href='https://www.johnlewis.com/our-services/protect-plus'>Terms and Important Information</a> to ensure this insurance product meets your demands and needs.",
            },
          },
          {
            id: "DMS17",
            associatedProductId: "DMS17",
            title: "Dishwasher Installation",
            description:
              "<p><b>What this includes</b></p>\n\n<ul>\n<li>Connection to an unobstructed 13amp, 3 pin electrical socket and waste outlet (if required) within 1 metre</li>\n<li>Electrical circuit test, machine test and demonstration of basic controls</li>\n<li>Removal of all packaging</li></ul>\n\n<p><b>What you should know</b></p>\n\n<ul>\n<li>We can't connect to hardwired sockets, only 3 pin electrical sockets</li>\n<li>If going under a worktop, make sure there's enough clearance (87cm from floor to underside)</li>\n<li>If going from integrated to freestanding, please remove the plinth and the decor door before our team's arrival</li>\n<li>We won't install in a bath/shower room, or in an unheated outbuilding such as a detached garage</li>\n<li>We'll give you transit bolts if you need to move the appliance to another property\n</li>\n</ul>",
            price: "25.00",
            currency: "GBP",
            orderOnSite: 2,
            type: "DBS",
            url: "",
            customProperties: {},
          },
          {
            id: "DMS14",
            associatedProductId: "DMS14",
            title: "Dishwasher Recycling",
            description:
              "<p>Our recycling service includes the taking away of your old appliance & packaging. The materials will be reused or recycled to create less waste & impact on the environment.</p>\n\n<p>Please drain/remove the contents of your old appliance and safely disconnect from the water/electricity supply.</p>\n\n<p>If you've booked a recycling service, please place your old appliance outside your home before our team's arrival. If you've booked an installation and recycling service, we'll take your old appliance away from the room.</p>",
            price: "20.00",
            currency: "GBP",
            orderOnSite: 3,
            type: "DBS",
            url: "",
            customProperties: {},
          },
        ],
      },
      code: "81701226",
    };
    axios.get.mockResolvedValue({ data: mockProductDetailApiResponse });
    const app = mount(<ProductDetail />);

    await waitForComponentToPaint(app);

    expect(app.find("h1").text()).toEqual(
      "Bosch SMS25EW00G Freestanding Dishwasher, White"
    );
    expect(app.find("h2").text()).toEqual("£379.00");
    expect(app.find(".included-services").text()).toEqual("2 year guarantee included");
    expect(app.find(".product-information").text()).toEqual("The SMS25EW00G freestanding dishwasher from Bosch, has plenty of room, is brimming with the latest washer technology to treat your dishes with care and get them sparkling clean, and it’s very quiet. \n</p>\n\n<p>As a SilencePlus model you can enjoy maximum dishwashing performance with minimal noise. The EcoSilence Drive motor is powerful, durable, quiet and efficient with very low electricity consumption.</p>\n\n<p><strong>VarioDrawer</strong><br>\nThe retractable VarioDrawer on the third loading level is the ideal place for cutlery and smaller kitchen utensils.</p>\n\n<p><strong>AquaSensor</strong><br>\nThe AquaSensor regulates water usage depending on the type and degree of soiling, using light beams to manage the rinse. Depending on remaining food particles, grease or detergent residues in the rinse, the rinsing process is assessed to evaluate whether it needs to be continued.</p>\n\n<p><strong>Heat Exchanger</strong><br>\nDishwashers with heat exchangers treat precious glasses and porcelain with particular care and no risks. Water is pre-heated in the rinsing tank to avoid any temperature shocks. You always get the right temperature for optimal dish care.</p>\n\n<p><strong> Glass 40° programme</strong><br> \nThis programme gently cleans delicate glasses such as high-quality crystal glasses, while providing optimum drying resulting in a brilliant shine. Additionally, glass protection technology guards against soft water glass corrosion. The dishwasher constantly regulates the degree of hardness.</p>\n\n<p><strong>Child lock</strong><br>\nSafety is paramount and the child-proof door lock prevents the door from being opened and the programme being altered during the cycle.</p>\n\n<p><strong>ActiveWater</strong><br>\nThis feature ensures water and energy is saved through targeted water distribution, optimised filter technology, faster heating and higher pump performance for increased water circulation.</p>\n\n<p><strong>LoadSensor </strong><br> \nAlso saving water and energy use is the LoadSensor. For bigger loads, more water is needed to soak the dishes and the water level decreases. In that case more water is added. For smaller loads, less water is needed for rinsing.</p>\n\n<p><strong>Time Delay</strong><br>\nWith the time delay function you can pre-select any programme to start anytime within 24 hours, so your clean dishes are ready when you want. After the start of any programme a display indicates the precise remaining time.</p>\n\n<p>This great dishwasher from Bosch also features DosageAssist detergent dispenser, automatic detergent detection, 5 programmes ( Intensive 70 °C, Eco 50 °C, Glass 40 °C, Quick 45 °C, Pre rinse) and 2 special options (VarioSpeed Plus, Extra Dry).");
    expect(app.find(".special-oofer").text()).toEqual("This is a special offer");
    expect(app.find(".product-coder").text()).toEqual("81701226");
    expect(app.find(".product-coder").text()).toEqual("81701226");
  });
});

describe("With Snapshot Testing", () => {
  test("ProductDetail snapshot", () => {
    const component = renderer.create(<ProductDetail />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
