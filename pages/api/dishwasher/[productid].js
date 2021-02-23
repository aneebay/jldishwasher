import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .get("/api/dishwasher/:productid", async (req, res) => {
    const { productid } = req.query;
    try {
      const config = {};
      const response = await fetch(
        `https://api.johnlewis.com/mobile-apps/api/v1/products/${productid}`,
        config
      );
      const productDetails = await response.json();
      console.log(productDetails)
      res.status(200).json(productDetails);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  });

export default handler;
