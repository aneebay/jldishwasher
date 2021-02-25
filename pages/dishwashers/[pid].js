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
    const { title, price, media, details, additionalServices, displaySpecialOffer, code } = productData;
    setProductDetails({
      title, price: price.now,
      images: [media.images.urls[0]],
      imagesAltText: media.images.altText,
      productInformation: details.productInformation,
      includedServices: additionalServices.includedServices[0],
      displaySpecialOffer,
      code
    });
  }, []);

  return (
    <div className={`${styles.container} text-center`}>
      <Head>
        <title>Dishwashers - Product Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="flex justify-center items-center leading-10">
          <Link href="/">
            <span className="text-4xl px-5 u-grey-text cursor-pointer">
              &laquo;
            </span>
          </Link>
          <h1 className="text-3xl my-4">{productDetails.title}</h1>
        </div>
        <article className="text-left u-grey-text">
          <ul className={`container mx-auto flex text-center ${styles.imageCarousel}`}>
            {productDetails.images.map(image => {
              return (
                <li key={image} className={`container`}>
                  <img src={image} alt={productDetails.imagesAltText} className={`${styles.imageCarouselImage}`} />
                </li>
              )
            })}
          </ul>
          <section className="container mx-auto mb-9 px-5">
            <h2 className="text-3xl">£{productDetails.price}</h2>
            <h5 className="u-red-text text-2xl special-offer">{productDetails.displaySpecialOffer}</h5>
            <h5 className="u-green-text included-services text-2xl">{productDetails.includedServices}</h5>
          </section>
          <section className="container mx-auto mb-9 px-5">
            <h3 className="text-2xl mb-3">Product Information</h3>
            <div className="product-information" dangerouslySetInnerHTML={{__html: productDetails.productInformation }} />
            <div className="product-code">Product code: {productDetails.code}</div>
          </section>
        </article>
      </main>
    </div>
  );
}
