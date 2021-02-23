import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductGrid() {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      });
  }, []);

  return (
    <div className={`${styles.container} text-center`}>
      <Head>
        <title>Dishwashers - Product Grid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="leading-10 text-3xl my-4">Dishwashers</h1>
        <section
          className={`${styles.section} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
        >
          <div>product</div>
          <div>product</div>
          <div>product</div>
          <div>product</div>
          <div>product</div>
          <div>product</div>
          <div>product</div>
          <div>product</div>
          <div>product</div>
          <div>product</div>
        </section>
      </main>
    </div>
  );
}
