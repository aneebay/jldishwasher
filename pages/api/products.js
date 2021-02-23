import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const config = {};
    const response = await fetch(
      "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI",
      config
    );
    const { products } = await response.json();
    console.log(products)
    res.status(200).json(products);
  });

export default handler;
