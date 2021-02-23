import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductGrid() {
  const [productItems, setProductItems] = useState([]);
  const productItemsCards = productItems.map(productItem => {
    const {productId, image, title, price} = productItem;
    return (
      <div key={productId} className={`product-item p-6 ${styles.item}`}>
        <img src={image} alt={title} />
        <h3 className="text-left">{title}</h3>
        <h4 className="text-left font-bold">£{price.now}</h4>
      </div>
    )
  });

  useEffect(async () => {
    const dishwashersList = await axios.get("/api/dishwashers")
      .then(response => {
        return response.data;
      }).catch(error => {
        console.log(error)
      });
      setProductItems(dishwashersList);
  }, []);

  return (
    <div className={`${styles.container} text-center`}>
      <Head>
        <title>Dishwashers - Product Grid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="leading-10 text-3xl my-4">Dishwashers ({productItems.length})</h1>
        <section
          className={`${styles.section} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
        >
          {productItemsCards}
        </section>
      </main>
    </div>
  );
}
