import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    try {
      const config = {};
      const response = await fetch(
        "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI",
        config
      );
      const { products } = await response.json();
      res.status(200).json(products);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  });

export default handler;
