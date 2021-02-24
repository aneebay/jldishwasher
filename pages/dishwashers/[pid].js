import Head from "next/head";
import styles from "../../styles/Detail.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductDetail() {
  const router = useRouter();
  const { pid } = router.query;
  const [productDetails, setProductDetails] = useState({});

  useEffect(async () => {
    const productData = await axios
      .get(`/api/dishwasher/${pid}`)
      .then((response) => {
        console.log("data", response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    setProductDetails(productData);
    console.log("pid", pid);
  }, []);

  return (
    <div className={`${styles.container} text-center`}>
      <Head>
        <title>Dishwashers - Product Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="leading-10 text-3xl my-4">Product title</h1>
        <article className={`${styles.section}`}>
          <ul>
            <li>Image 1</li>
            <li>Image 2</li>
            <li>Image 3</li>
          </ul>
          <section>
            <h2>Price</h2>
            <h5>Special offer</h5>
            <h5>Special offer</h5>
          </section>
          <section>
            <h3>Product Information</h3>
            <p>bla bla</p>
          </section>
        </article>
      </main>
    </div>
  );
}
