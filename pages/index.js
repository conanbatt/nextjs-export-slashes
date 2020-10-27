import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Without slash</a>
        </h1>
        <h1 className={styles.title}>
          Welcome to <Link href="https://nextjs.org">With slash?</Link>
        </h1>
      </main>
    </div>
  )
}
