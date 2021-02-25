import Head from "next/head";
import styles from "../../styles/Detail.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

export default function ProductDetail() {
  const router = useRouter();
  const { pid } = router.query;
  const [productDetails, setProductDetails] = useState({ images: []});

  useEffect(async () => {
    if (!pid) {
      return;
    }
    const productData = await axios
      .get(`/api/dishwasher/${pid}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    const { title, price, media } = productData;
    setProductDetails({ title, price: price.now, images: [media.images.urls[0]], imagesAltText: media.images.altText });
  }, []);

  return (
    <div className={`${styles.container} text-center`}>
      <Head>
        <title>Dishwashers - Product Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="flex">
          <Link href="/">
            &laquo; Back
          </Link>
          <h1 className="leading-10 text-3xl my-4">{productDetails.title}</h1>
        </div>
        <article>
          <ul className={`container mx-auto flex ${styles.imageCarousel}`}>
            {productDetails.images.map(image => {
              return (
                <li key={image} className={`container ${styles.imageCarouselImage}`}>
                  <img src={image} alt={productDetails.imagesAltText} />
                </li>
              )
            })}
          </ul>
          <section>
            <h2>£{productDetails.price}</h2>
            <h5 className="u-red-text">Special offer</h5>
            <h5 className="u-green-text">Special offer</h5>
          </section>
          <section className="product-information">
            <h3>Product Information</h3>
            <p>bla bla</p>
          </section>
        </article>
      </main>
    </div>
  );
}
