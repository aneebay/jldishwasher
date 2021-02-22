import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function ProductGrid() {
  return (
    <div className={`${styles.container} text-center`}>
      <Head>
        <title>Dishwashers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="leading-10 text-3xl my-4">Dishwashers</h1>
        <section className={styles.section}>
            Here the grid will go.
        </section>
      </main>
    </div>
  )
}
